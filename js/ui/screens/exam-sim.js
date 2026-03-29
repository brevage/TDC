// ===== Exam Simulation Screen =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.ExamSimScreen = (() => {
  let container = null;
  let timerInterval = null;
  let startTime = null;
  let timeLimit = 60 * 60 * 1000; // 60 minutes
  let questions = [];
  let currentIndex = 0;
  let answers = {};
  let flagged = new Set();
  let submitted = false;

  function mount(el) {
    container = el;
    startExam();
    return { unmount };
  }

  function unmount() {
    if (timerInterval) clearInterval(timerInterval);
    container = null;
  }

  function startExam() {
    const session = TDC.QuizEngine.createSession({ mode: 'exam' });
    questions = session.questions.map(q =>
      q.type === 'mc' ? TDC.QuizEngine.shuffleChoices(q) : q
    );
    currentIndex = 0;
    answers = {};
    flagged = new Set();
    submitted = false;
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    renderExam();
  }

  function renderExam() {
    if (!container || submitted) return;
    const q = questions[currentIndex];
    const answeredCount = Object.keys(answers).length;

    container.innerHTML = `
      <div class="flex justify-between items-center mb-md">
        <h3>Exam Simulation</h3>
        <div class="exam-timer" id="exam-timer"></div>
      </div>

      <div class="progress-bar mb-sm" style="height:3px">
        <div class="progress-fill" style="width:${((currentIndex + 1) / 40) * 100}%"></div>
      </div>

      <div class="flex justify-between text-xs text-secondary mb-md">
        <span>Question ${currentIndex + 1} of 40</span>
        <span>${answeredCount} answered · ${flagged.size} flagged</span>
      </div>

      <div class="exam-question-grid mb-md" id="exam-grid">
        ${questions.map((_, i) => {
          let cls = 'exam-q-dot';
          if (i === currentIndex) cls += ' current';
          if (answers[i] !== undefined) cls += ' answered';
          if (flagged.has(i)) cls += ' flagged';
          return `<div class="${cls}" onclick="TDC.ExamSimScreen.goTo(${i})">${i + 1}</div>`;
        }).join('')}
      </div>

      <div class="question-text">${q.question}</div>

      <div class="options-list" id="exam-options">
        ${q.type === 'mc' ? q.choices.map(c => `
          <button class="option-btn ${answers[currentIndex] === c.key ? 'option-selected' : ''}"
            data-key="${c.key}" onclick="TDC.ExamSimScreen.select('${c.key}')">
            <span class="option-key">${c.key}</span>
            <span>${c.text}</span>
          </button>
        `).join('') : q.type === 'tf' ? `
          <button class="option-btn ${answers[currentIndex] === 'true' ? 'option-selected' : ''}"
            data-key="true" onclick="TDC.ExamSimScreen.select('true')">
            <span class="option-key">T</span><span>True</span>
          </button>
          <button class="option-btn ${answers[currentIndex] === 'false' ? 'option-selected' : ''}"
            data-key="false" onclick="TDC.ExamSimScreen.select('false')">
            <span class="option-key">F</span><span>False</span>
          </button>
        ` : `
          <input type="text" class="fill-input" id="exam-fill" placeholder="Type your answer..."
            value="${answers[currentIndex] || ''}"
            oninput="TDC.ExamSimScreen.fillInput(this.value)" autocomplete="off">
        `}
      </div>

      <div class="exam-nav mt-md">
        <button class="btn btn-secondary flex-1" onclick="TDC.ExamSimScreen.flag()" style="color:${flagged.has(currentIndex) ? 'var(--warning)' : ''}">
          ${flagged.has(currentIndex) ? '★ Flagged' : '☆ Flag'}
        </button>
        <button class="btn btn-secondary flex-1" onclick="TDC.ExamSimScreen.prev()" ${currentIndex === 0 ? 'disabled' : ''}>
          ← Previous
        </button>
        <button class="btn btn-${currentIndex === 39 ? 'primary' : 'secondary'} flex-1" onclick="TDC.ExamSimScreen.nextQ()">
          ${currentIndex === 39 ? 'Review' : 'Next →'}
        </button>
      </div>

      ${answeredCount === 40 ? `
        <button class="btn btn-success btn-block btn-lg mt-lg" onclick="TDC.ExamSimScreen.submit()">
          Submit Exam
        </button>
      ` : `
        <button class="btn btn-ghost btn-block mt-md text-sm" onclick="TDC.ExamSimScreen.submit()">
          Submit Early (${answeredCount}/40 answered)
        </button>
      `}
    `;

    updateTimer();
  }

  function select(key) {
    answers[currentIndex] = key;
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.classList.toggle('option-selected', btn.dataset.key === key);
    });
    // Update grid dot
    const dots = document.querySelectorAll('.exam-q-dot');
    if (dots[currentIndex]) dots[currentIndex].classList.add('answered');
  }

  function fillInput(val) {
    answers[currentIndex] = val;
  }

  function flag() {
    if (flagged.has(currentIndex)) flagged.delete(currentIndex);
    else flagged.add(currentIndex);
    renderExam();
  }

  function prev() {
    if (currentIndex > 0) { currentIndex--; renderExam(); }
  }

  function nextQ() {
    if (currentIndex < 39) { currentIndex++; renderExam(); }
    else { renderExam(); } // Stay on last, show review
  }

  function goTo(i) {
    currentIndex = i;
    renderExam();
  }

  function updateTimer() {
    const el = document.getElementById('exam-timer');
    if (!el) return;
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, timeLimit - elapsed);

    if (remaining <= 0) {
      submit();
      return;
    }

    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    el.textContent = `${mins}:${String(secs).padStart(2, '0')}`;

    if (remaining < 300000) el.className = 'exam-timer danger';
    else if (remaining < 600000) el.className = 'exam-timer warning';
    else el.className = 'exam-timer';
  }

  function submit() {
    if (submitted) return;
    submitted = true;
    if (timerInterval) clearInterval(timerInterval);

    let correct = 0;
    const wrongIds = [];
    const results = [];

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const userAns = answers[i];
      let isCorrect = false;

      if (q.type === 'tf') {
        isCorrect = String(userAns).toLowerCase() === String(q.answer).toLowerCase();
      } else if (q.type === 'fill') {
        const accepted = q.acceptedAnswers || [q.answer];
        isCorrect = accepted.some(a => String(a).toLowerCase().trim() === String(userAns || '').toLowerCase().trim());
      } else {
        isCorrect = userAns === q.answer;
      }

      if (isCorrect) correct++;
      else wrongIds.push(q.id);
      results.push({ questionId: q.id, userAnswer: userAns, isCorrect });

      // Update SRS
      TDC.SRS.reviewCard(q.id, isCorrect ? 4 : 1);
    }

    const score = correct;
    const elapsed = Math.round((Date.now() - startTime) / 60000);

    // Store exam sim result
    TDC.Store.addExamSim({
      date: new Date().toISOString(),
      score,
      outOf: 40,
      durationMinutes: elapsed,
      wrongQuestionIds: wrongIds,
    });

    // Award XP
    let xp = score * 5;
    if (score >= 38) xp += 150;
    if (score >= 40) xp += 500;
    TDC.Scoring.awardXP(xp);

    TDC.Badges.checkAll();

    showExamResults(score, results, elapsed, xp);
  }

  function showExamResults(score, results, duration, xp) {
    if (!container) return;
    const pct = Math.round((score / 40) * 100);
    const pointsScore = score * 2;
    const wrong = results.filter(r => !r.isCorrect);

    container.innerHTML = `
      <div class="results-header">
        <div class="text-sm text-secondary">Exam Simulation Complete</div>
        <div class="results-score">${score}/40</div>
        <div class="text-lg text-secondary">${pointsScore}/80 points</div>
        <div class="mt-sm ${pct >= 95 ? 'text-success' : pct >= 80 ? 'text-accent' : 'text-error'}">
          ${pct >= 95 ? 'Championship Level!' : pct >= 90 ? 'Excellent!' : pct >= 80 ? 'Good - Keep studying!' : 'Needs improvement'}
        </div>
      </div>

      <div class="results-stats">
        <div class="stat-item">
          <div class="stat-value">${pct}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${duration}min</div>
          <div class="stat-label">Time</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">+${xp}</div>
          <div class="stat-label">XP</div>
        </div>
      </div>

      ${wrong.length > 0 ? `
        <h3 class="mt-lg mb-md text-error">Missed Questions (${wrong.length})</h3>
        <div class="flex flex-col gap-sm">
          ${wrong.map((r, i) => {
            const q = TDC.Questions.getById(r.questionId);
            if (!q) return '';
            return `
              <div class="card card-compact">
                <div class="text-sm text-bold mb-sm">${i + 1}. ${q.question}</div>
                ${r.userAnswer ? `<div class="text-xs text-error">Your answer: ${r.userAnswer}</div>` : '<div class="text-xs text-muted">Not answered</div>'}
                <div class="text-xs text-success mt-sm">Correct: ${q.answer}${q.type === 'mc' && q.choices ? ' — ' + (q.choices.find(c => c.key === q.answer)?.text || '') : ''}</div>
                <div class="text-xs mt-sm text-secondary">${q.explanation}</div>
                ${q.keyFact ? `<div class="key-fact mt-sm">${q.keyFact}</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      ` : `
        <div class="text-center mt-xl" style="font-size:4rem">👑</div>
        <div class="text-center text-success text-xl text-bold">PERFECT SCORE!</div>
      `}

      <div class="flex gap-sm mt-lg">
        <button class="btn btn-secondary flex-1" onclick="TDC.Router.navigate('/')">Home</button>
        <button class="btn btn-primary flex-1" onclick="TDC.ExamSimScreen.retake()">Retake Exam</button>
      </div>
    `;
  }

  function retake() {
    TDC.Router.navigate('/exam');
  }

  return { mount, select, fillInput, flag, prev, nextQ: nextQ, goTo, submit, retake };
})();
