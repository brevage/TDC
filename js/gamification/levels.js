// ===== Level System =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.Levels = (() => {
  const LEVELS = [
    { level: 1,  xp: 0,     title: 'Student Driver' },
    { level: 2,  xp: 100,   title: 'Permit Holder' },
    { level: 3,  xp: 300,   title: 'Rookie Hauler' },
    { level: 4,  xp: 600,   title: 'Road Regular' },
    { level: 5,  xp: 1000,  title: 'Highway Veteran' },
    { level: 6,  xp: 1500,  title: 'Safety Specialist' },
    { level: 7,  xp: 2100,  title: 'Regulation Expert' },
    { level: 8,  xp: 2800,  title: 'HazMat Handler' },
    { level: 9,  xp: 3600,  title: 'Fleet Commander' },
    { level: 10, xp: 4500,  title: 'TDC Champion' },
    { level: 11, xp: 5500,  title: 'Grand Champion' },
    { level: 12, xp: 7000,  title: 'Hall of Fame' },
  ];

  function getLevelForXP(xp) {
    let level = 1;
    for (const l of LEVELS) {
      if (xp >= l.xp) level = l.level;
      else break;
    }
    return level;
  }

  function getLevelInfo(level) {
    return LEVELS.find(l => l.level === level) || LEVELS[0];
  }

  function getNextLevelInfo(level) {
    return LEVELS.find(l => l.level === level + 1) || null;
  }

  function getProgressToNextLevel(xp) {
    const currentLevel = getLevelForXP(xp);
    const currentInfo = getLevelInfo(currentLevel);
    const nextInfo = getNextLevelInfo(currentLevel);

    if (!nextInfo) return { percent: 100, current: 0, needed: 0 };

    const earned = xp - currentInfo.xp;
    const needed = nextInfo.xp - currentInfo.xp;
    return {
      percent: Math.min(100, Math.round((earned / needed) * 100)),
      current: earned,
      needed,
    };
  }

  function getCurrentTitle() {
    const level = TDC.Store.get('profile.level') || 1;
    return getLevelInfo(level).title;
  }

  return {
    LEVELS,
    getLevelForXP,
    getLevelInfo,
    getNextLevelInfo,
    getProgressToNextLevel,
    getCurrentTitle,
  };
})();
