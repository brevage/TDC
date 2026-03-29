// ===== Quiz Engine: Session Management & Card Selection =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.QuizEngine = (() => {
  let currentSession = null;

  function createSession(options = {}) {
    const {
      mode = 'srs',       // 'srs', 'category', 'exam', 'quick15', 'acronym', 'winners', 'numbers'
      category = null,
      size = 20,
    } = options;

    const questions = selectQuestions(mode, category, size);

    currentSession = {
      mode,
      category,
      questions,
      currentIndex: 0,
      answers: [],
      correctCount: 0,
      currentStreak: 0,
      bestStreak: 0,
      xpEarned: 0,
      startTime: Date.now(),
      requeueCards: [], // Cards to show again this session
    };

    return currentSession;
  }

  function selectQuestions(mode, category, size) {
    const allQuestions = TDC.Questions.getAll();
    const today = new Date().toISOString().split('T')[0];
    let selected = [];

    if (mode === 'exam') {
      return selectExamQuestions();
    }

    if (mode === 'quick15') {
      return selectQuick15Questions();
    }

    if (mode === 'acronym') {
      const acronymQs = allQuestions.filter(q => q.category === 'acronyms');
      return shuffleArray(acronymQs).slice(0, Math.min(size, acronymQs.length));
    }

    if (mode === 'winners') {
      const hardQs = allQuestions.filter(q =>
        q.difficulty >= 2 || q.tags?.includes('numbers') || q.tags?.includes('regulation')
      );
      return shuffleArray(hardQs).slice(0, Math.min(size, hardQs.length));
    }

    if (mode === 'numbers') {
      const numQs = allQuestions.filter(q =>
        q.tags?.includes('numbers') || q.subcategory?.includes('number')
      );
      return shuffleArray(numQs).slice(0, Math.min(size, numQs.length));
    }

    // SRS mode or category mode
    let pool = category
      ? allQuestions.filter(q => q.category === category)
      : allQuestions;

    // 1. Overdue review cards
    const overdueCards = [];
    const learningCards = [];
    const newCards = [];

    for (const q of pool) {
      const card = TDC.Store.getCard(q.id);
      if (card.phase === 'new' && !card.lastReviewDate) {
        newCards.push(q);
      } else if (card.phase === 'learning' && card.nextReviewDate && card.nextReviewDate <= today) {
        learningCards.push(q);
      } else if ((card.phase === 'review' || card.phase === 'mastered') && card.nextReviewDate && card.nextReviewDate <= today) {
        overdueCards.push(q);
      }
    }

    // Sort overdue by most overdue first
    overdueCards.sort((a, b) => {
      const ca = TDC.Store.getCard(a.id);
      const cb = TDC.Store.getCard(b.id);
      return (ca.nextReviewDate || '').localeCompare(cb.nextReviewDate || '');
    });

    // Build session queue
    selected = [...overdueCards, ...shuffleArray(learningCards)];

    // Add new cards up to daily limit
    const todayStats = TDC.Store.getTodayStats();
    const newCardLimit = TDC.SRS.getDailyNewCardLimit() - (todayStats.newCards || 0);
    const newToAdd = shuffleArray(newCards).slice(0, Math.max(0, newCardLimit));
    selected = [...selected, ...newToAdd];

    // Trim to session size
    selected = selected.slice(0, size);

    // If still have room, add ahead-of-schedule review cards
    if (selected.length < size) {
      const aheadCards = pool.filter(q => {
        const card = TDC.Store.getCard(q.id);
        return card.phase === 'review' && card.nextReviewDate && card.nextReviewDate > today
          && !selected.includes(q);
      });
      const shuffledAhead = shuffleArray(aheadCards);
      selected = [...selected, ...shuffledAhead.slice(0, size - selected.length)];
    }

    // If STILL empty, just grab random questions
    if (selected.length === 0) {
      selected = shuffleArray(pool).slice(0, size);
    }

    return shuffleArray(selected);
  }

  function selectExamQuestions() {
    const allQuestions = TDC.Questions.getAll();
    // Weighted proportions matching real exam
    const distribution = {
      safety: 16,
      hazmat: 10,
      acronyms: 5,
      firstaid: 3,
      fire: 3,
      security: 2,
      health: 1,
    };

    let examQs = [];
    for (const [cat, count] of Object.entries(distribution)) {
      const pool = allQuestions.filter(q => q.category === cat);
      const picked = shuffleArray(pool).slice(0, Math.min(count, pool.length));
      examQs = [...examQs, ...picked];
    }

    // Fill remaining to 40 if any category was short
    if (examQs.length < 40) {
      const remaining = allQuestions.filter(q => !examQs.includes(q));
      examQs = [...examQs, ...shuffleArray(remaining).slice(0, 40 - examQs.length)];
    }

    return shuffleArray(examQs).slice(0, 40);
  }

  function selectQuick15Questions() {
    const allQuestions = TDC.Questions.getAll();
    const today = new Date().toISOString().split('T')[0];

    // Mix: 5 due/overdue, 5 weakest, 5 new/random
    let quick = [];

    // 5 due cards
    const dueQs = allQuestions.filter(q => {
      const card = TDC.Store.getCard(q.id);
      return card.nextReviewDate && card.nextReviewDate <= today;
    });
    quick = [...shuffleArray(dueQs).slice(0, 5)];

    // 5 weakest (lowest accuracy)
    const weakQs = allQuestions
      .filter(q => {
        const card = TDC.Store.getCard(q.id);
        return card.totalAttempts > 0 && !quick.includes(q);
      })
      .sort((a, b) => {
        const ca = TDC.Store.getCard(a.id);
        const cb = TDC.Store.getCard(b.id);
        const accA = ca.totalCorrect / ca.totalAttempts;
        const accB = cb.totalCorrect / cb.totalAttempts;
        return accA - accB;
      });
    quick = [...quick, ...weakQs.slice(0, 5)];

    // Fill remaining with new/random
    const remainingPool = allQuestions.filter(q => !quick.includes(q));
    quick = [...quick, ...shuffleArray(remainingPool).slice(0, 15 - quick.length)];

    return shuffleArray(quick).slice(0, 15);
  }

  function getCurrentQuestion() {
    if (!currentSession) return null;
    // Check requeue first
    if (currentSession.requeueCards.length > 0 &&
        currentSession.currentIndex > 0 &&
        currentSession.currentIndex % 4 === 0) {
      return currentSession.requeueCards.shift();
    }
    if (currentSession.currentIndex >= currentSession.questions.length) return null;
    return currentSession.questions[currentSession.currentIndex];
  }

  function submitAnswer(questionId, userAnswer) {
    if (!currentSession) return null;

    const question = TDC.Questions.getById(questionId);
    if (!question) return null;

    const isCorrect = checkAnswer(question, userAnswer);
    const card = TDC.Store.getCard(questionId);

    // Determine quality rating (will be overridden by difficulty buttons for correct answers)
    let quality = isCorrect ? 4 : 1;

    // Update session stats
    currentSession.answers.push({ questionId, userAnswer, isCorrect });
    if (isCorrect) {
      currentSession.correctCount++;
      currentSession.currentStreak++;
      if (currentSession.currentStreak > currentSession.bestStreak) {
        currentSession.bestStreak = currentSession.currentStreak;
      }
    } else {
      currentSession.currentStreak = 0;
      // Requeue wrong cards
      if (currentSession.mode !== 'exam') {
        currentSession.requeueCards.push(question);
      }
    }

    // Calculate XP
    const xp = TDC.Scoring.calculateXP(isCorrect, card, question, currentSession.currentStreak);
    const xpResult = TDC.Scoring.awardXP(xp);
    currentSession.xpEarned += xp;

    // Update today stats
    const todayStats = TDC.Store.getTodayStats();
    todayStats.questionsAnswered++;
    if (isCorrect) todayStats.questionsCorrect++;
    if (card.phase === 'new' && !card.lastReviewDate) todayStats.newCards++;
    else todayStats.reviewCards++;
    if (question.category && !todayStats.categoriesStudied.includes(question.category)) {
      todayStats.categoriesStudied.push(question.category);
    }

    // Update profile
    TDC.Store.update('profile.totalQuestionsAnswered', n => (n || 0) + 1);
    if (isCorrect) TDC.Store.update('profile.totalCorrect', n => (n || 0) + 1);

    return {
      isCorrect,
      xp,
      levelUp: xpResult.levelUp,
      newLevel: xpResult.newLevel,
      sessionStreak: currentSession.currentStreak,
      card,
    };
  }

  function rateDifficulty(questionId, rating) {
    // rating: 'hard' = 3, 'good' = 4, 'easy' = 5
    const qualityMap = { hard: 3, good: 4, easy: 5 };
    const quality = qualityMap[rating] || 4;
    TDC.SRS.reviewCard(questionId, quality);
  }

  function rateWrong(questionId) {
    TDC.SRS.reviewCard(questionId, 1);
  }

  function checkAnswer(question, userAnswer) {
    if (question.type === 'tf') {
      return String(userAnswer).toLowerCase() === String(question.answer).toLowerCase();
    }
    if (question.type === 'fill') {
      const accepted = question.acceptedAnswers || [question.answer];
      const normalized = String(userAnswer).trim().toLowerCase();
      return accepted.some(a => {
        const norm = String(a).trim().toLowerCase();
        if (norm === normalized) return true;
        // Fuzzy match: allow minor differences
        if (levenshtein(norm, normalized) <= Math.max(2, Math.floor(norm.length * 0.15))) return true;
        return false;
      });
    }
    // Multiple choice
    return String(userAnswer).toUpperCase() === String(question.answer).toUpperCase();
  }

  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = Math.min(
          dp[i-1][j] + 1,
          dp[i][j-1] + 1,
          dp[i-1][j-1] + (a[i-1] !== b[j-1] ? 1 : 0)
        );
      }
    }
    return dp[m][n];
  }

  function nextQuestion() {
    if (!currentSession) return null;
    currentSession.currentIndex++;
    return getCurrentQuestion();
  }

  function endSession() {
    if (!currentSession) return null;

    const duration = Math.round((Date.now() - currentSession.startTime) / 60000);
    const result = {
      mode: currentSession.mode,
      category: currentSession.category,
      totalQuestions: currentSession.answers.length,
      totalCorrect: currentSession.correctCount,
      bestStreak: currentSession.bestStreak,
      xpEarned: currentSession.xpEarned,
      durationMinutes: duration,
      answers: currentSession.answers,
    };

    // Award session completion bonus
    if (currentSession.answers.length >= 5) {
      const bonus = TDC.Scoring.awardSessionBonus(result.totalQuestions, result.totalCorrect);
      result.xpEarned += bonus.xp;
    }

    // Store session
    TDC.Store.addSession({
      date: new Date().toISOString(),
      ...result,
    });

    TDC.Store.update('profile.totalSessionsCompleted', n => (n || 0) + 1);
    TDC.Store.update('profile.studyTimeMinutes', n => (n || 0) + duration);

    // Update streak
    TDC.Streaks.checkAndUpdateStreak();

    // Check badges
    TDC.Badges.checkAll();

    const session = currentSession;
    currentSession = null;
    return result;
  }

  function getSession() {
    return currentSession;
  }

  function getSessionProgress() {
    if (!currentSession) return null;
    return {
      current: currentSession.currentIndex + 1,
      total: currentSession.questions.length + currentSession.requeueCards.length,
      correct: currentSession.correctCount,
      streak: currentSession.currentStreak,
      xp: currentSession.xpEarned,
    };
  }

  function isSessionComplete() {
    if (!currentSession) return true;
    return currentSession.currentIndex >= currentSession.questions.length
      && currentSession.requeueCards.length === 0;
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function shuffleChoices(question) {
    if (question.type !== 'mc' || !question.choices) return question;
    const q = { ...question };
    const shuffled = shuffleArray(q.choices);
    // Remap answer to new position
    const correctText = q.choices.find(c => c.key === q.answer)?.text;
    const keys = ['A', 'B', 'C', 'D'];
    q.choices = shuffled.map((c, i) => ({ key: keys[i], text: c.text, originalKey: c.key }));
    const newCorrect = q.choices.find(c => c.text === correctText);
    q.answer = newCorrect ? newCorrect.key : q.answer;
    return q;
  }

  return {
    createSession,
    getCurrentQuestion,
    submitAnswer,
    rateDifficulty,
    rateWrong,
    nextQuestion,
    endSession,
    getSession,
    getSessionProgress,
    isSessionComplete,
    shuffleChoices,
    shuffleArray,
  };
})();
