// ===== Streak Tracking =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.Streaks = (() => {
  const RESET_HOUR = 4; // Day resets at 4 AM

  function getStudyDay(date = new Date()) {
    const d = new Date(date);
    if (d.getHours() < RESET_HOUR) {
      d.setDate(d.getDate() - 1);
    }
    return d.toISOString().split('T')[0];
  }

  function checkAndUpdateStreak() {
    const today = getStudyDay();
    const lastStudy = TDC.Store.get('profile.lastStudyDate');
    const dailyGoal = TDC.Store.get('settings.dailyGoal') || 10;
    const todayStats = TDC.Store.getTodayStats();

    // Must meet daily goal
    if (todayStats.questionsAnswered < dailyGoal) return;

    if (!lastStudy) {
      // First ever study day
      TDC.Store.set('profile.currentStreak', 1);
      TDC.Store.set('profile.longestStreak', 1);
      TDC.Store.set('profile.lastStudyDate', today);
      return;
    }

    if (lastStudy === today) return; // Already counted today

    const yesterday = getYesterday(today);

    if (lastStudy === yesterday) {
      // Consecutive day
      const newStreak = (TDC.Store.get('profile.currentStreak') || 0) + 1;
      TDC.Store.set('profile.currentStreak', newStreak);
      if (newStreak > (TDC.Store.get('profile.longestStreak') || 0)) {
        TDC.Store.set('profile.longestStreak', newStreak);
      }
      // Award streak freeze token every 7 days
      if (newStreak % 7 === 0) {
        const freezes = Math.min((TDC.Store.get('profile.streakFreezes') || 0) + 1, 3);
        TDC.Store.set('profile.streakFreezes', freezes);
      }
    } else {
      // Missed at least one day
      const daysBetween = dateDiff(lastStudy, today);
      if (daysBetween === 2) {
        // Missed exactly one day - try to use freeze
        const freezes = TDC.Store.get('profile.streakFreezes') || 0;
        if (freezes > 0) {
          TDC.Store.set('profile.streakFreezes', freezes - 1);
          const newStreak = (TDC.Store.get('profile.currentStreak') || 0) + 1;
          TDC.Store.set('profile.currentStreak', newStreak);
          if (newStreak > (TDC.Store.get('profile.longestStreak') || 0)) {
            TDC.Store.set('profile.longestStreak', newStreak);
          }
        } else {
          TDC.Store.set('profile.currentStreak', 1);
        }
      } else {
        TDC.Store.set('profile.currentStreak', 1);
      }
    }

    TDC.Store.set('profile.lastStudyDate', today);
  }

  function getYesterday(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
  }

  function dateDiff(date1, date2) {
    const d1 = new Date(date1 + 'T12:00:00');
    const d2 = new Date(date2 + 'T12:00:00');
    return Math.round((d2 - d1) / 86400000);
  }

  function getStreakFireClass() {
    const streak = TDC.Store.get('profile.currentStreak') || 0;
    if (streak >= 21) return 'streak-fire-21';
    if (streak >= 14) return 'streak-fire-14';
    if (streak >= 7) return 'streak-fire-7';
    if (streak >= 3) return 'streak-fire-3';
    return 'streak-fire-1';
  }

  function hasMetDailyGoal() {
    const todayStats = TDC.Store.getTodayStats();
    const goal = TDC.Store.get('settings.dailyGoal') || 10;
    return todayStats.questionsAnswered >= goal;
  }

  return {
    checkAndUpdateStreak,
    getStudyDay,
    getStreakFireClass,
    hasMetDailyGoal,
  };
})();
