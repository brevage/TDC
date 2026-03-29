// ===== Quiz Screen =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.QuizScreen = (() => {
  let container = null;
  let currentQuestion = null;
  let selectedAnswer = null;
  let answered = false;
  let lastResult = null;

  function mount(el) {
    container = el;
    const session = TDC.QuizEngine.getSession();
    if (!session || session.questions.length === 0) {
      el.innerHTML = `
        <div class="text-center mt-lg">
          <h2>No questions available</h2>
          <p class="text-secondary mt-md">Try selecting a different category or mode.</p>
          <button class="btn btn-primary mt-lg" onclick="TDC.Router.navigate('/study')">Back to Study</button>
        </div>`;
      return { unmount };
    }
    showQuestion();
    return { unmount };
  }

  function unmount() {
    container = null;
    currentQuestion = null;
    selectedAnswer = null;
    answered = false;
    lastResult = null;
  }

  function showQuestion() {
    if (!container) return;

    if (TDC.QuizEngine.isSessionComplete()) {
      showResults();
      return;
    }

    const raw = TDC.QuizEngine.getCurrentQuestion();
    if (!raw) {
      showResults();
      return;
    }

    currentQuestion = raw.type === 'mc' ? TDC.QuizEngine.shuffleChoices(raw) : raw;
    selectedAnswer = null;
    answered = false;
    lastResult = null;

    const progress = TDC.QuizEngine.getSessionProgress();
    const session = TDC.QuizEngine.getSession();
    const catInfo = getCategoryLabel(currentQuestion.category);

    container.innerHTML = `
      <div class="quiz-header">
        <div>
          <span class="text-sm text-secondary">${catInfo}</span>
          ${currentQuestion.subcategory ? `<span class="text-xs text-muted"> · ${currentQuestion.subcategory}</span>` : ''}
        </div>
        <button class="btn btn-ghost btn-sm" onclick="TDC.QuizScreen.endQuiz()">End</button>
      </div>

      <div class="progress-bar mb-md" style="height:3px">
        <div class="progress-fill" style="width: ${(progress.current / progress.total) * 100}%"></div>
      </div>

      <div class="flex justify-between items-center mb-md text-sm">
        <span class="quiz-progress">Q${progress.current} of ${progress.total}</span>
        <div class="flex gap-md items-center">
          ${progress.streak >= 3 ? `<span class="quiz-streak-indicator">🔥 ${progress.streak}</span>` : ''}
          <span class="text-secondary">${progress.correct}/${progress.current - 1} correct</span>
        </div>
      </div>

      <div class="question-text slide-in">${currentQuestion.question}</div>

      <div id="answer-area">
        ${renderAnswerArea()}
      </div>

      <div class="quiz-footer" id="quiz-footer">
        ${renderFooter()}
      </div>

      <div class="session-stats">
        <span>+${progress.xp} XP this session</span>
      </div>
    `;
  }

  function renderAnswerArea() {
    if (currentQuestion.type === 'mc') {
      return `
        <div class="options-list" id="options-list">
          ${currentQuestion.choices.map(c => `
            <button class="option-btn" data-key="${c.key}" onclick="TDC.QuizScreen.selectOption('${c.key}')">
              <span class="option-key">${c.key}</span>
              <span>${c.text}</span>
            </button>
          `).join('')}
        </div>`;
    }
    if (currentQuestion.type === 'tf') {
      return `
        <div class="options-list" id="options-list">
          <button class="option-btn" data-key="true" onclick="TDC.QuizScreen.selectOption('true')">
            <span class="option-key">T</span>
            <span>True</span>
          </button>
          <button class="option-btn" data-key="false" onclick="TDC.QuizScreen.selectOption('false')">
            <span class="option-key">F</span>
            <span>False</span>
          </button>
        </div>`;
    }
    if (currentQuestion.type === 'fill') {
      return `
        <div class="mt-md">
          <input type="text" class="fill-input" id="fill-input" placeholder="Type your answer..."
            onkeydown="if(event.key==='Enter')TDC.QuizScreen.submitFill()" autocomplete="off" autofocus>
        </div>`;
    }
    return '';
  }

  function renderFooter() {
    if (currentQuestion.type === 'fill') {
      return `<button class="btn btn-primary btn-block" onclick="TDC.QuizScreen.submitFill()">Submit Answer</button>`;
    }
    return `<button class="btn btn-primary btn-block" id="submit-btn" disabled onclick="TDC.QuizScreen.submitAnswer()">Select an Answer</button>`;
  }

  function selectOption(key) {
    if (answered) return;
    selectedAnswer = key;

    // Update UI
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.classList.remove('option-selected');
      if (btn.dataset.key === key) btn.classList.add('option-selected');
    });

    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Answer';
    }
  }

  function submitAnswer() {
    if (answered || !selectedAnswer) return;
    processAnswer(selectedAnswer);
  }

  function submitFill() {
    if (answered) return;
    const input = document.getElementById('fill-input');
    if (!input || !input.value.trim()) return;
    selectedAnswer = input.value.trim();
    processAnswer(selectedAnswer);
  }

  function processAnswer(answer) {
    answered = true;
    lastResult = TDC.QuizEngine.submitAnswer(currentQuestion.id, answer);

    if (lastResult.isCorrect) {
      showCorrectFeedback();
    } else {
      showWrongFeedback();
      TDC.QuizEngine.rateWrong(currentQuestion.id);
    }

    // Show XP popup
    showXPPopup(lastResult.xp);

    // Check for level up
    if (lastResult.levelUp) {
      setTimeout(() => showLevelUp(lastResult.newLevel), 600);
    }

    // Check badges
    const newBadges = TDC.Badges.checkAll();
    if (newBadges.length > 0) {
      setTimeout(() => showBadgeUnlock(newBadges[0]), 800);
    }
  }

  function showCorrectFeedback() {
    const answerArea = document.getElementById('answer-area');
    const footer = document.getElementById('quiz-footer');

    // Highlight correct answer
    if (currentQuestion.type === 'mc' || currentQuestion.type === 'tf') {
      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.add('option-disabled');
        const key = btn.dataset.key;
        const correctKey = currentQuestion.type === 'tf' ? String(currentQuestion.answer) : currentQuestion.answer;
        if (key === correctKey) {
          btn.classList.add('option-correct');
          btn.classList.add('flash-correct');
        }
      });
    } else if (currentQuestion.type === 'fill') {
      const input = document.getElementById('fill-input');
      if (input) { input.classList.add('fill-correct'); input.disabled = true; }
    }

    // Show explanation
    answerArea.innerHTML += `
      <div class="explanation-panel explanation-correct slide-in mt-md">
        <h4>✓ Correct!</h4>
        <p>${currentQuestion.explanation}</p>
        ${currentQuestion.keyFact ? `<div class="key-fact">📌 ${currentQuestion.keyFact}</div>` : ''}
      </div>
    `;

    // Show difficulty rating and next button
    footer.innerHTML = `
      <div class="text-center text-sm text-secondary mb-sm">How hard was this?</div>
      <div class="difficulty-buttons">
        <button class="diff-btn diff-btn-hard" onclick="TDC.QuizScreen.rate('hard')">Hard</button>
        <button class="diff-btn diff-btn-good" onclick="TDC.QuizScreen.rate('good')">Good</button>
        <button class="diff-btn diff-btn-easy" onclick="TDC.QuizScreen.rate('easy')">Easy</button>
      </div>
    `;
  }

  function showWrongFeedback() {
    const answerArea = document.getElementById('answer-area');
    const footer = document.getElementById('quiz-footer');
    const correctAnswer = currentQuestion.answer;

    if (currentQuestion.type === 'mc' || currentQuestion.type === 'tf') {
      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.add('option-disabled');
        const key = btn.dataset.key;
        const correctKey = currentQuestion.type === 'tf' ? String(correctAnswer) : correctAnswer;
        if (key === selectedAnswer) {
          btn.classList.add('option-wrong');
          btn.classList.add('flash-wrong');
        }
        if (key === correctKey) {
          btn.classList.add('option-correct');
        }
      });
    } else if (currentQuestion.type === 'fill') {
      const input = document.getElementById('fill-input');
      if (input) { input.classList.add('fill-wrong'); input.disabled = true; }
    }

    // Build wrong explanation
    let wrongExp = '';
    if (currentQuestion.type === 'mc' && currentQuestion.wrongExplanations && currentQuestion.wrongExplanations[selectedAnswer]) {
      wrongExp = `
        <div class="explanation-panel explanation-wrong slide-in mt-md">
          <h4>✗ Why your answer is wrong</h4>
          <p><strong>You chose ${selectedAnswer}:</strong> ${currentQuestion.wrongExplanations[selectedAnswer]}</p>
        </div>
      `;
    } else if (currentQuestion.type === 'tf') {
      wrongExp = `
        <div class="explanation-panel explanation-wrong slide-in mt-md">
          <h4>✗ Incorrect</h4>
          <p>The correct answer is <strong>${correctAnswer === true || correctAnswer === 'true' ? 'True' : 'False'}</strong>.</p>
        </div>
      `;
    } else if (currentQuestion.type === 'fill') {
      wrongExp = `
        <div class="explanation-panel explanation-wrong slide-in mt-md">
          <h4>✗ Incorrect</h4>
          <p>Your answer: <strong>${selectedAnswer}</strong></p>
          <p>Correct answer: <strong>${currentQuestion.answer}</strong></p>
        </div>
      `;
    }

    answerArea.innerHTML += wrongExp + `
      <div class="explanation-panel explanation-correct slide-in mt-md">
        <h4>✓ Correct Answer</h4>
        <p>${currentQuestion.explanation}</p>
        ${currentQuestion.keyFact ? `<div class="key-fact">📌 ${currentQuestion.keyFact}</div>` : ''}
      </div>
    `;

    footer.innerHTML = `
      <button class="btn btn-primary btn-block" onclick="TDC.QuizScreen.next()">Next Question</button>
    `;
  }

  function rate(difficulty) {
    TDC.QuizEngine.rateDifficulty(currentQuestion.id, difficulty);
    next();
  }

  function next() {
    TDC.QuizEngine.nextQuestion();
    showQuestion();
    if (container) container.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function endQuiz() {
    const result = TDC.QuizEngine.endSession();
    if (result) {
      showFinalResults(result);
    } else {
      TDC.Router.navigate('/');
    }
  }

  function showResults() {
    const result = TDC.QuizEngine.endSession();
    if (result) {
      showFinalResults(result);
    }
  }

  function showFinalResults(result) {
    if (!container) return;
    const pct = result.totalQuestions > 0 ? Math.round((result.totalCorrect / result.totalQuestions) * 100) : 0;
    const grade = pct >= 95 ? 'S' : pct >= 90 ? 'A' : pct >= 80 ? 'B' : pct >= 70 ? 'C' : pct >= 60 ? 'D' : 'F';
    const gradeColor = pct >= 80 ? 'text-success' : pct >= 60 ? 'text-accent' : 'text-error';

    container.innerHTML = `
      <div class="results-header">
        <div class="text-sm text-secondary mb-sm">Session Complete</div>
        <div class="results-score">${pct}%</div>
        <div class="results-grade ${gradeColor}">Grade: ${grade}</div>
      </div>

      <div class="results-stats">
        <div class="stat-item">
          <div class="stat-value">${result.totalCorrect}/${result.totalQuestions}</div>
          <div class="stat-label">Correct</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${result.bestStreak}</div>
          <div class="stat-label">Best Streak</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">+${result.xpEarned}</div>
          <div class="stat-label">XP Earned</div>
        </div>
      </div>

      ${result.answers.filter(a => !a.isCorrect).length > 0 ? `
        <h3 class="mt-lg mb-md">Review Mistakes</h3>
        <div class="flex flex-col gap-sm">
          ${result.answers.filter(a => !a.isCorrect).map(a => {
            const q = TDC.Questions.getById(a.questionId);
            if (!q) return '';
            return `
              <div class="card card-compact">
                <div class="text-sm text-error mb-sm">✗ ${q.question}</div>
                <div class="text-xs text-secondary">Correct: ${q.answer}${q.type === 'mc' && q.choices ? ' — ' + (q.choices.find(c => c.key === q.answer)?.text || '') : ''}</div>
                <div class="text-xs mt-sm">${q.explanation}</div>
              </div>
            `;
          }).join('')}
        </div>
      ` : `
        <div class="text-center mt-lg">
          <div style="font-size:3rem">🎉</div>
          <div class="text-success text-lg text-bold">Perfect Session!</div>
        </div>
      `}

      <div class="flex gap-sm mt-lg">
        <button class="btn btn-secondary flex-1" onclick="TDC.Router.navigate('/')">Home</button>
        <button class="btn btn-primary flex-1" onclick="TDC.Router.navigate('/study')">Study More</button>
      </div>
    `;
  }

  function showXPPopup(xp) {
    const popup = document.createElement('div');
    popup.className = 'xp-popup';
    popup.textContent = `+${xp} XP`;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1500);
  }

  function showLevelUp(level) {
    const info = TDC.Levels.getLevelInfo(level);
    const overlay = document.createElement('div');
    overlay.className = 'level-up-overlay';
    overlay.innerHTML = `
      <div class="level-up-content">
        <div class="text-secondary">LEVEL UP!</div>
        <div class="level-up-number">${level}</div>
        <div class="level-up-title">${info.title}</div>
      </div>
    `;
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 3000);
  }

  function showBadgeUnlock(badge) {
    const toast = document.createElement('div');
    toast.className = 'badge-unlock-toast';
    toast.innerHTML = `
      <span style="font-size:1.5rem">${badge.icon}</span>
      <div>
        <div class="text-bold">${badge.name}</div>
        <div class="text-xs text-secondary">${badge.description}</div>
      </div>
      <div class="text-accent text-sm text-bold">+${badge.xp} XP</div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  function getCategoryLabel(cat) {
    const map = {
      safety: '🛡️ Safety', hazmat: '☢️ HazMat', acronyms: '🔤 Acronyms',
      firstaid: '🩹 First Aid', fire: '🧯 Fire', security: '🔒 Security', health: '💪 Health',
    };
    return map[cat] || cat;
  }

  return { mount, selectOption, submitAnswer, submitFill, rate, next, endQuiz };
})();
