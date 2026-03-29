// ===== SM-2 Spaced Repetition Algorithm =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.SRS = (() => {
  const LEARNING_STEPS_MINUTES = [1, 10, 1440]; // 1min, 10min, 1 day
  const GRADUATING_INTERVAL = 1; // days
  const EASY_INTERVAL = 4;
  const MIN_EASE = 1.3;

  function getMaxInterval() {
    const examDate = new Date('2026-04-24');
    const now = new Date();
    const daysUntilExam = Math.max(1, Math.ceil((examDate - now) / 86400000));

    if (daysUntilExam <= 3) return 1;
    if (daysUntilExam <= 7) return 3;
    if (daysUntilExam <= 14) return 7;
    return Math.min(30, daysUntilExam);
  }

  function getDailyNewCardLimit() {
    const examDate = new Date('2026-04-24');
    const now = new Date();
    const daysUntilExam = Math.max(1, Math.ceil((examDate - now) / 86400000));

    if (daysUntilExam <= 7) return 40;
    if (daysUntilExam <= 14) return 25;
    return TDC.Store.get('settings.dailyNewCardLimit') || 20;
  }

  // quality: 1 = wrong, 3 = hard, 4 = good, 5 = easy
  function reviewCard(questionId, quality) {
    const card = TDC.Store.getCard(questionId);
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const maxInterval = getMaxInterval();
    const isCorrect = quality >= 3;

    card.totalAttempts++;
    card.lastReviewDate = today;

    if (isCorrect) {
      card.totalCorrect++;
      card.streak++;
      if (card.streak > card.bestStreak) card.bestStreak = card.streak;
    } else {
      card.streak = 0;
    }

    if (card.phase === 'new' || card.phase === 'learning') {
      if (isCorrect) {
        card.learningStep++;
        if (card.learningStep >= LEARNING_STEPS_MINUTES.length) {
          // Graduate to review
          card.phase = 'review';
          card.interval = quality === 5 ? EASY_INTERVAL : GRADUATING_INTERVAL;
          card.interval = Math.min(card.interval, maxInterval);
          card.repetitions = 1;
          card.nextReviewDate = addDays(today, card.interval);
        } else {
          card.phase = 'learning';
          const minutesUntilNext = LEARNING_STEPS_MINUTES[card.learningStep];
          if (minutesUntilNext >= 1440) {
            card.nextReviewDate = addDays(today, Math.floor(minutesUntilNext / 1440));
          } else {
            // Within-session requeue (handled by quiz engine)
            card.nextReviewDate = today;
          }
        }
      } else {
        card.learningStep = 0;
        card.phase = 'learning';
        card.nextReviewDate = today; // Requeue in session
      }
    } else if (card.phase === 'review' || card.phase === 'mastered') {
      if (isCorrect) {
        if (card.repetitions === 0) {
          card.interval = 1;
        } else if (card.repetitions === 1) {
          card.interval = 6;
        } else {
          card.interval = Math.round(card.interval * card.easeFactor);
        }

        card.interval = Math.min(card.interval, maxInterval);
        card.repetitions++;
        card.nextReviewDate = addDays(today, card.interval);

        // Update ease factor
        card.easeFactor = card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        card.easeFactor = Math.max(card.easeFactor, MIN_EASE);

        if (card.interval >= 14 && card.streak >= 3) {
          card.phase = 'mastered';
        } else {
          card.phase = 'review';
        }
      } else {
        card.repetitions = 0;
        card.interval = 1;
        card.nextReviewDate = addDays(today, 1);
        card.easeFactor = Math.max(card.easeFactor - 0.2, MIN_EASE);
        card.phase = 'review';
      }
    }

    TDC.Store.updateCard(questionId, card);
    return card;
  }

  function addDays(dateStr, days) {
    const d = new Date(dateStr + 'T12:00:00');
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  }

  function getCardPriority(card) {
    if (!card.nextReviewDate) return 1000; // New card, lowest priority
    const today = new Date().toISOString().split('T')[0];
    const daysOverdue = daysBetween(card.nextReviewDate, today);

    if (card.phase === 'learning') return -100 + card.learningStep;
    if (daysOverdue > 0) return -daysOverdue; // More overdue = higher priority
    return card.interval; // Not yet due, lower priority
  }

  function daysBetween(dateStr1, dateStr2) {
    const d1 = new Date(dateStr1 + 'T12:00:00');
    const d2 = new Date(dateStr2 + 'T12:00:00');
    return Math.round((d2 - d1) / 86400000);
  }

  function isDue(card) {
    if (card.phase === 'new' && !card.lastReviewDate) return false;
    if (!card.nextReviewDate) return false;
    const today = new Date().toISOString().split('T')[0];
    return card.nextReviewDate <= today;
  }

  return {
    reviewCard,
    getCardPriority,
    isDue,
    addDays,
    daysBetween,
    getMaxInterval,
    getDailyNewCardLimit,
  };
})();
