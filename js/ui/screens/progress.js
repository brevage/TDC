// ===== Progress Screen =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.ProgressScreen = (() => {
  function mount(el) {
    render(el);
    return { unmount: () => {} };
  }

  function render(el) {
    const stats = TDC.Questions.getOverallStats();
    const categories = TDC.Questions.getCategoryInfo();
    const profile = TDC.Store.get('profile');
    const examSims = TDC.Store.get('examSims') || [];
    const sessions = TDC.Store.get('sessions') || [];

    // Find weakest subcategories
    const weakTopics = findWeakTopics();

    // Recent accuracy (last 7 days)
    const recentAccuracy = getRecentAccuracy();

    el.innerHTML = `
      <h2 class="mb-lg">Your Progress</h2>

      <div class="estimated-score">
        <div class="text-sm text-secondary">Estimated Exam Score</div>
        <div class="score-number">${stats.estimatedScore}/40</div>
        <div class="text-sm text-secondary">${stats.estimatedScore * 2}/80 points</div>
        <div class="progress-bar mt-md" style="height:6px; background: rgba(255,255,255,0.1)">
          <div class="progress-fill" style="width:${(stats.estimatedScore / 40) * 100}%"></div>
        </div>
      </div>

      <div class="stat-grid mt-lg">
        <div class="stat-item">
          <div class="stat-value">${stats.total}</div>
          <div class="stat-label">Total Questions</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${stats.seen}</div>
          <div class="stat-label">Questions Seen</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${stats.mastered}</div>
          <div class="stat-label">Mastered</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${stats.accuracy}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
      </div>

      <h3 class="mt-lg mb-md">Category Breakdown</h3>
      <div class="flex flex-col gap-sm">
        ${categories.map(cat => {
          const pct = cat.total > 0 ? Math.round((cat.mastered / cat.total) * 100) : 0;
          return `
            <div class="card card-compact">
              <div class="flex justify-between items-center mb-sm">
                <span>${cat.icon} ${cat.name}</span>
                <span class="text-accent text-bold">${pct}%</span>
              </div>
              <div class="progress-bar" style="height:6px">
                <div class="progress-fill ${pct >= 80 ? 'progress-fill-success' : ''}" style="width:${pct}%"></div>
              </div>
              <div class="flex justify-between text-xs text-secondary mt-sm">
                <span>${cat.mastered}/${cat.total} mastered</span>
                <span>${cat.dueCount} due for review</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      ${weakTopics.length > 0 ? `
        <h3 class="mt-lg mb-md">Weakest Areas</h3>
        <div class="flex flex-col gap-sm">
          ${weakTopics.slice(0, 5).map(t => `
            <div class="weak-topic-item">
              <span class="text-sm">${t.label}</span>
              <span class="chip chip-error">${t.accuracy}%</span>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-secondary btn-block mt-md" onclick="TDC.ProgressScreen.studyWeak()">Study Weak Areas</button>
      ` : ''}

      ${examSims.length > 0 ? `
        <h3 class="mt-lg mb-md">Exam Simulations</h3>
        <div class="flex flex-col gap-sm">
          ${examSims.slice(-5).reverse().map(sim => `
            <div class="card card-compact flex justify-between items-center">
              <div>
                <div class="text-bold">${sim.score}/40</div>
                <div class="text-xs text-secondary">${new Date(sim.date).toLocaleDateString()}</div>
              </div>
              <div class="${sim.score >= 38 ? 'text-success' : sim.score >= 32 ? 'text-accent' : 'text-error'} text-bold">
                ${Math.round((sim.score / 40) * 100)}%
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <h3 class="mt-lg mb-md">Study Stats</h3>
      <div class="stat-grid">
        <div class="stat-item">
          <div class="stat-value">${profile.totalSessionsCompleted || 0}</div>
          <div class="stat-label">Sessions</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${profile.totalQuestionsAnswered || 0}</div>
          <div class="stat-label">Answered</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${profile.studyTimeMinutes || 0}m</div>
          <div class="stat-label">Study Time</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${profile.longestStreak || 0}</div>
          <div class="stat-label">Best Streak</div>
        </div>
      </div>

      ${recentAccuracy.length > 0 ? `
        <h3 class="mt-lg mb-md">Recent Accuracy</h3>
        <div class="flex gap-sm items-end" style="height:80px">
          ${recentAccuracy.map(d => `
            <div class="flex flex-col items-center flex-1">
              <div style="width:100%;background:var(--bg-input);border-radius:var(--radius-sm);position:relative;height:60px">
                <div style="position:absolute;bottom:0;width:100%;height:${d.accuracy}%;background:${d.accuracy >= 80 ? 'var(--success)' : d.accuracy >= 60 ? 'var(--accent)' : 'var(--error)'};border-radius:var(--radius-sm);transition:height 0.3s"></div>
              </div>
              <div class="text-xs text-muted mt-xs">${d.label}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    `;
  }

  function findWeakTopics() {
    const allQs = TDC.Questions.getAll();
    const subcategoryStats = {};

    for (const q of allQs) {
      const key = `${q.category}:${q.subcategory || 'general'}`;
      if (!subcategoryStats[key]) {
        subcategoryStats[key] = { label: q.subcategory || q.category, attempts: 0, correct: 0 };
      }
      const card = TDC.Store.getCard(q.id);
      subcategoryStats[key].attempts += card.totalAttempts;
      subcategoryStats[key].correct += card.totalCorrect;
    }

    return Object.values(subcategoryStats)
      .filter(s => s.attempts >= 3)
      .map(s => ({ ...s, accuracy: Math.round((s.correct / s.attempts) * 100) }))
      .sort((a, b) => a.accuracy - b.accuracy);
  }

  function getRecentAccuracy() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      const stats = TDC.Store.get('dailyStats')?.[key];
      const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      days.push({
        label: labels[d.getDay()],
        accuracy: stats && stats.questionsAnswered > 0
          ? Math.round((stats.questionsCorrect / stats.questionsAnswered) * 100)
          : 0,
      });
    }
    return days;
  }

  function studyWeak() {
    TDC.QuizEngine.createSession({ mode: 'srs', size: 20 });
    TDC.Router.navigate('/quiz');
  }

  return { mount, studyWeak };
})();
