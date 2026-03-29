// ===== Dashboard Screen =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.DashboardScreen = (() => {
  let container = null;
  let countdownInterval = null;

  function mount(el) {
    container = el;
    render();
    countdownInterval = setInterval(updateCountdown, 1000);
    return { unmount };
  }

  function unmount() {
    if (countdownInterval) clearInterval(countdownInterval);
    container = null;
  }

  function render() {
    const profile = TDC.Store.get('profile');
    const level = profile.level || 1;
    const levelInfo = TDC.Levels.getLevelInfo(level);
    const progress = TDC.Levels.getProgressToNextLevel(profile.totalXP || 0);
    const streak = profile.currentStreak || 0;
    const streakClass = TDC.Streaks.getStreakFireClass();
    const todayStats = TDC.Store.getTodayStats();
    const dailyGoal = TDC.Store.get('settings.dailyGoal') || 10;
    const dueCount = TDC.Questions.getTotalDueCount();
    const stats = TDC.Questions.getOverallStats();
    const categories = TDC.Questions.getCategoryInfo();
    const goalMet = todayStats.questionsAnswered >= dailyGoal;

    container.innerHTML = `
      <div class="dashboard-header">
        <h2>TDC Study Pro</h2>
        <div class="level-badge">
          Lv.${level} ${levelInfo.title}
        </div>
      </div>

      <div class="progress-bar mb-md" title="Level progress: ${progress.percent}%">
        <div class="progress-fill" style="width: ${progress.percent}%"></div>
      </div>
      <div class="flex justify-between text-xs text-secondary mb-lg">
        <span>${profile.totalXP || 0} XP</span>
        <span>${progress.current}/${progress.needed} to next level</span>
      </div>

      <div class="countdown-container mb-lg" id="countdown">
        <div class="countdown-label">GEORGIA TDC WRITTEN EXAM</div>
        <div class="countdown-number" id="countdown-number"></div>
        <div class="countdown-label">April 24, 2026</div>
      </div>

      <div class="flex items-center justify-between mb-md">
        <div class="streak-display">
          ${streak > 0 ? `<span class="streak-flame ${streakClass}">🔥</span>` : ''}
          <span>${streak} day${streak !== 1 ? 's' : ''} streak</span>
        </div>
        <div class="text-sm ${goalMet ? 'text-success' : 'text-secondary'}">
          Today: ${todayStats.questionsAnswered}/${dailyGoal} ${goalMet ? '✓' : ''}
        </div>
      </div>

      <button class="btn btn-primary btn-lg btn-block study-now-btn mb-lg" onclick="TDC.Router.navigate('/study')">
        STUDY NOW
        ${dueCount > 0 ? `<span class="due-count">${dueCount} due</span>` : ''}
      </button>

      <div class="flex gap-sm mb-lg">
        <button class="btn btn-secondary flex-1" onclick="TDC.Router.navigate('/quick15')">
          Quick 15
        </button>
        <button class="btn btn-secondary flex-1" onclick="TDC.Router.navigate('/exam')">
          Exam Sim
        </button>
      </div>

      <div class="stat-grid mb-lg">
        <div class="stat-item">
          <div class="stat-value">${stats.estimatedScore}/40</div>
          <div class="stat-label">Est. Score</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${stats.accuracy}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${stats.seen}</div>
          <div class="stat-label">Cards Seen</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${stats.mastered}</div>
          <div class="stat-label">Mastered</div>
        </div>
      </div>

      <h3 class="mb-md">Categories</h3>
      <div class="category-list">
        ${categories.map(cat => `
          <div class="category-card" onclick="TDC.Router.navigate('/study/${cat.key}')">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-info">
              <div class="category-name">${cat.name}</div>
              <div class="category-meta">${cat.total} questions ${cat.dueCount > 0 ? `· ${cat.dueCount} due` : ''}</div>
              <div class="progress-bar mt-sm" style="height:4px">
                <div class="progress-fill" style="width: ${cat.total > 0 ? Math.round(cat.mastered / cat.total * 100) : 0}%"></div>
              </div>
            </div>
            <div class="category-progress">${cat.total > 0 ? Math.round(cat.mastered / cat.total * 100) : 0}%</div>
          </div>
        `).join('')}
      </div>

      <div class="flex gap-sm mt-lg">
        <button class="btn btn-ghost btn-sm flex-1" onclick="TDC.Router.navigate('/settings')">Settings</button>
      </div>
    `;

    updateCountdown();
  }

  function updateCountdown() {
    const el = document.getElementById('countdown-number');
    if (!el) return;

    const exam = new Date('2026-04-24T08:00:00');
    const now = new Date();
    const diff = exam - now;

    if (diff <= 0) {
      el.textContent = 'EXAM DAY!';
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    el.textContent = `${days}d ${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  return { mount };
})();
