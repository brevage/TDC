// ===== Question Registry: Aggregates all question banks =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.Questions = (() => {
  let allQuestions = [];
  let byId = {};
  let byCategory = {};

  function init() {
    allQuestions = [
      ...(TDC.QuestionsSafety || []),
      ...(TDC.QuestionsHazmat || []),
      ...(TDC.QuestionsAcronyms || []),
      ...(TDC.QuestionsFirstAid || []),
      ...(TDC.QuestionsFire || []),
      ...(TDC.QuestionsSecurity || []),
      ...(TDC.QuestionsHealth || []),
    ];

    byId = {};
    byCategory = {};

    for (const q of allQuestions) {
      byId[q.id] = q;
      if (!byCategory[q.category]) byCategory[q.category] = [];
      byCategory[q.category].push(q);
    }
  }

  function getAll() {
    if (allQuestions.length === 0) init();
    return allQuestions;
  }

  function getById(id) {
    if (allQuestions.length === 0) init();
    return byId[id] || null;
  }

  function getByCategory(category) {
    if (allQuestions.length === 0) init();
    return byCategory[category] || [];
  }

  function getCategories() {
    if (allQuestions.length === 0) init();
    return Object.keys(byCategory);
  }

  function getCategoryInfo() {
    if (allQuestions.length === 0) init();
    const categories = {
      safety: { name: 'Safety & Regulations', icon: '🛡️', color: '#4caf50' },
      hazmat: { name: 'HazMat & Tank Trucks', icon: '☢️', color: '#ff9800' },
      acronyms: { name: 'Industry Acronyms', icon: '🔤', color: '#2196f3' },
      firstaid: { name: 'First Aid', icon: '🩹', color: '#f44336' },
      fire: { name: 'Fire Safety', icon: '🧯', color: '#ff5722' },
      security: { name: 'Security', icon: '🔒', color: '#9c27b0' },
      health: { name: 'Health & Wellness', icon: '💪', color: '#00bcd4' },
    };

    return Object.entries(categories).map(([key, info]) => ({
      key,
      ...info,
      total: (byCategory[key] || []).length,
      mastered: getMasteredCount(key),
      dueCount: getDueCount(key),
    }));
  }

  function getMasteredCount(category) {
    const questions = byCategory[category] || [];
    return questions.filter(q => {
      const card = TDC.Store.getCard(q.id);
      return card.totalAttempts > 0 && (card.totalCorrect / card.totalAttempts) >= 0.7;
    }).length;
  }

  function getDueCount(category) {
    const questions = category ? (byCategory[category] || []) : allQuestions;
    const today = new Date().toISOString().split('T')[0];
    return questions.filter(q => {
      const card = TDC.Store.getCard(q.id);
      return card.nextReviewDate && card.nextReviewDate <= today;
    }).length;
  }

  function getTotalDueCount() {
    return getDueCount(null);
  }

  function getOverallStats() {
    if (allQuestions.length === 0) init();
    const total = allQuestions.length;
    let seen = 0, mastered = 0, totalAccuracy = 0, withAttempts = 0;

    for (const q of allQuestions) {
      const card = TDC.Store.getCard(q.id);
      if (card.totalAttempts > 0) {
        seen++;
        const acc = card.totalCorrect / card.totalAttempts;
        totalAccuracy += acc;
        withAttempts++;
        if (acc >= 0.7 && card.totalAttempts >= 2) mastered++;
      }
    }

    return {
      total,
      seen,
      mastered,
      accuracy: withAttempts > 0 ? Math.round((totalAccuracy / withAttempts) * 100) : 0,
      estimatedScore: Math.round(40 * (mastered / Math.max(total, 1))),
    };
  }

  return {
    init,
    getAll,
    getById,
    getByCategory,
    getCategories,
    getCategoryInfo,
    getMasteredCount,
    getDueCount,
    getTotalDueCount,
    getOverallStats,
  };
})();
