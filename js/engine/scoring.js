// ===== XP Scoring Engine =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.Scoring = (() => {
  const XP_TABLE = {
    correct_new: 15,
    correct_learning: 10,
    correct_review: 8,
    correct_mastered: 6,
    wrong: 2,
    hard_bonus: 5,
    fill_bonus: 3,
    perfect_session: 25,
    session_complete: 30,
  };

  function calculateXP(isCorrect, card, question, sessionStreak) {
    let xp = 0;

    if (isCorrect) {
      // Base XP by phase
      switch (card.phase) {
        case 'new': xp = XP_TABLE.correct_new; break;
        case 'learning': xp = XP_TABLE.correct_learning; break;
        case 'review': xp = XP_TABLE.correct_review; break;
        case 'mastered': xp = XP_TABLE.correct_mastered; break;
        default: xp = XP_TABLE.correct_review;
      }

      // Difficulty bonus
      if (question.difficulty >= 3) xp += XP_TABLE.hard_bonus;

      // Fill-in-blank bonus
      if (question.type === 'fill') xp += XP_TABLE.fill_bonus;

      // Hot streak bonus (5+ in a row = 1.5x)
      if (sessionStreak >= 5) xp = Math.round(xp * 1.5);
    } else {
      xp = XP_TABLE.wrong;
    }

    // Apply daily streak multiplier
    const streak = TDC.Store.get('profile.currentStreak') || 0;
    const streakMultiplier = Math.min(2.0, 1.0 + streak * 0.1);
    xp = Math.round(xp * streakMultiplier);

    return xp;
  }

  function awardXP(amount) {
    const current = TDC.Store.get('profile.totalXP') || 0;
    const newTotal = current + amount;
    TDC.Store.set('profile.totalXP', newTotal);

    // Check level up
    const currentLevel = TDC.Store.get('profile.level') || 1;
    const newLevel = TDC.Levels.getLevelForXP(newTotal);
    if (newLevel > currentLevel) {
      TDC.Store.set('profile.level', newLevel);
      return { xp: amount, levelUp: true, newLevel };
    }

    // Update today stats
    const todayStats = TDC.Store.getTodayStats();
    todayStats.xpEarned += amount;

    return { xp: amount, levelUp: false };
  }

  function awardSessionBonus(totalQuestions, totalCorrect) {
    let bonus = XP_TABLE.session_complete;
    if (totalQuestions >= 10 && totalCorrect === totalQuestions) {
      bonus += XP_TABLE.perfect_session;
    }
    return awardXP(bonus);
  }

  function getStreakXP() {
    const streak = TDC.Store.get('profile.currentStreak') || 0;
    return 20 * streak;
  }

  return {
    calculateXP,
    awardXP,
    awardSessionBonus,
    getStreakXP,
    XP_TABLE,
  };
})();
