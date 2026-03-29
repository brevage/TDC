// ===== Achievement Badges =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.Badges = (() => {
  const BADGES = [
    // Streak badges
    { id: 'streak-3', name: 'Ignition', icon: '🔥', tier: 'bronze', group: 'Streaks',
      description: '3-day study streak', xp: 50,
      check: () => (TDC.Store.get('profile.currentStreak') || 0) >= 3 },
    { id: 'streak-7', name: 'Cruising', icon: '🔥', tier: 'silver', group: 'Streaks',
      description: '7-day study streak', xp: 150,
      check: () => (TDC.Store.get('profile.currentStreak') || 0) >= 7 },
    { id: 'streak-14', name: 'Long Haul', icon: '🔥', tier: 'gold', group: 'Streaks',
      description: '14-day study streak', xp: 300,
      check: () => (TDC.Store.get('profile.currentStreak') || 0) >= 14 },
    { id: 'streak-21', name: 'Iron Will', icon: '🔥', tier: 'platinum', group: 'Streaks',
      description: '21-day study streak', xp: 500,
      check: () => (TDC.Store.get('profile.longestStreak') || 0) >= 21 },

    // Performance badges
    { id: 'perfect-session', name: 'Perfect Load', icon: '✨', tier: 'silver', group: 'Performance',
      description: 'Perfect score on a 15+ question session', xp: 100,
      check: () => TDC.Store.get('sessions')?.some(s => s.totalQuestions >= 15 && s.totalCorrect === s.totalQuestions) },
    { id: 'streak-50', name: 'Error-Free Mile', icon: '🎯', tier: 'gold', group: 'Performance',
      description: '50 consecutive correct answers', xp: 200,
      check: () => checkConsecutiveCorrect(50) },
    { id: 'streak-100', name: 'Century Run', icon: '💯', tier: 'platinum', group: 'Performance',
      description: '100 consecutive correct answers', xp: 500,
      check: () => checkConsecutiveCorrect(100) },

    // Study habit badges
    { id: 'first-session', name: 'First Mile', icon: '🚛', tier: 'bronze', group: 'Habits',
      description: 'Complete your first study session', xp: 25,
      check: () => (TDC.Store.get('profile.totalSessionsCompleted') || 0) >= 1 },
    { id: 'marathon', name: 'Marathon', icon: '🏃', tier: 'gold', group: 'Habits',
      description: 'Answer 100+ questions in one sitting', xp: 200,
      check: () => TDC.Store.get('sessions')?.some(s => s.totalQuestions >= 100) },
    { id: 'well-rounded', name: 'Well Rounded', icon: '🔄', tier: 'silver', group: 'Habits',
      description: 'Study all 7 categories in one day', xp: 150,
      check: () => {
        const today = TDC.Store.getTodayStats();
        return today.categoriesStudied?.length >= 7;
      }},
    { id: 'completionist', name: 'Completionist', icon: '📚', tier: 'platinum', group: 'Habits',
      description: 'See every question at least once', xp: 500,
      check: () => {
        const all = TDC.Questions?.getAll() || [];
        return all.length > 0 && all.every(q => (TDC.Store.getCard(q.id).totalAttempts || 0) > 0);
      }},

    // Category mastery badges
    ...createCategoryBadges('safety', 'Safety', '🛡️'),
    ...createCategoryBadges('hazmat', 'HazMat', '☢️'),
    ...createCategoryBadges('acronyms', 'Acronyms', '🔤'),
    ...createCategoryBadges('firstaid', 'First Aid', '🩹'),
    ...createCategoryBadges('fire', 'Fire Safety', '🧯'),
    ...createCategoryBadges('security', 'Security', '🔒'),
    ...createCategoryBadges('health', 'Health', '💪'),

    // Exam readiness badges
    { id: 'exam-90', name: 'Mock Champion', icon: '🏆', tier: 'gold', group: 'Exam',
      description: 'Score 38+ on an exam simulation', xp: 300,
      check: () => TDC.Store.get('examSims')?.some(e => e.score >= 38) },
    { id: 'exam-consistent', name: 'Consistent', icon: '📊', tier: 'gold', group: 'Exam',
      description: 'Score 36+ on 3 consecutive exam sims', xp: 250,
      check: () => {
        const sims = TDC.Store.get('examSims') || [];
        if (sims.length < 3) return false;
        const last3 = sims.slice(-3);
        return last3.every(s => s.score >= 36);
      }},
    { id: 'exam-perfect', name: 'Perfect Score', icon: '👑', tier: 'platinum', group: 'Exam',
      description: 'Score 40/40 on an exam simulation', xp: 1000,
      check: () => TDC.Store.get('examSims')?.some(e => e.score >= 40) },
  ];

  function createCategoryBadges(cat, label, icon) {
    return [
      { id: `${cat}-25`, name: `${label} Starter`, icon, tier: 'bronze', group: 'Mastery',
        description: `25% of ${label} questions correct`, xp: 50,
        check: () => getCategoryMastery(cat) >= 25 },
      { id: `${cat}-50`, name: `${label} Student`, icon, tier: 'silver', group: 'Mastery',
        description: `50% of ${label} questions correct`, xp: 100,
        check: () => getCategoryMastery(cat) >= 50 },
      { id: `${cat}-80`, name: `${label} Expert`, icon, tier: 'gold', group: 'Mastery',
        description: `80% of ${label} questions correct`, xp: 200,
        check: () => getCategoryMastery(cat) >= 80 },
      { id: `${cat}-100`, name: `${label} Master`, icon, tier: 'platinum', group: 'Mastery',
        description: `100% of ${label} questions correct`, xp: 500,
        check: () => getCategoryMastery(cat) >= 100 },
    ];
  }

  function getCategoryMastery(category) {
    const questions = TDC.Questions?.getAll()?.filter(q => q.category === category) || [];
    if (questions.length === 0) return 0;
    const mastered = questions.filter(q => {
      const card = TDC.Store.getCard(q.id);
      return card.totalAttempts > 0 && (card.totalCorrect / card.totalAttempts) >= 0.7;
    });
    return Math.round((mastered.length / questions.length) * 100);
  }

  function checkConsecutiveCorrect(target) {
    const sessions = TDC.Store.get('sessions') || [];
    let consecutive = 0;
    for (const s of sessions) {
      if (!s.answers) continue;
      for (const a of s.answers) {
        if (a.isCorrect) {
          consecutive++;
          if (consecutive >= target) return true;
        } else {
          consecutive = 0;
        }
      }
    }
    return false;
  }

  function checkAll() {
    const badges = TDC.Store.get('badges') || {};
    const newUnlocks = [];

    for (const badge of BADGES) {
      if (badges[badge.id]?.unlockedAt) continue; // Already unlocked
      try {
        if (badge.check()) {
          badges[badge.id] = { unlockedAt: new Date().toISOString() };
          newUnlocks.push(badge);
          // Award XP
          TDC.Scoring.awardXP(badge.xp);
        }
      } catch (e) {
        // Badge check failed, skip
      }
    }

    TDC.Store.set('badges', badges);
    return newUnlocks;
  }

  function getAll() {
    const badges = TDC.Store.get('badges') || {};
    return BADGES.map(b => ({
      ...b,
      unlocked: !!badges[b.id]?.unlockedAt,
      unlockedAt: badges[b.id]?.unlockedAt || null,
    }));
  }

  function getUnlockedCount() {
    const badges = TDC.Store.get('badges') || {};
    return Object.values(badges).filter(b => b.unlockedAt).length;
  }

  return {
    BADGES,
    checkAll,
    getAll,
    getUnlockedCount,
    getCategoryMastery,
  };
})();
