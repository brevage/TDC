// ===== Central State Store with localStorage Persistence =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.Store = (() => {
  const STORAGE_KEY = 'tdc-study-v1';
  const SCHEMA_VERSION = 1;
  const listeners = {};

  function getDefaultState() {
    return {
      schemaVersion: SCHEMA_VERSION,
      profile: {
        totalXP: 0,
        level: 1,
        currentStreak: 0,
        longestStreak: 0,
        streakFreezes: 0,
        lastStudyDate: null,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        totalSessionsCompleted: 0,
        studyTimeMinutes: 0,
      },
      cards: {},
      sessions: [],
      examSims: [],
      badges: {},
      dailyStats: {},
      settings: {
        darkMode: true,
        soundEffects: true,
        sessionSize: 20,
        dailyGoal: 10,
        dailyNewCardLimit: 20,
      }
    };
  }

  let state = getDefaultState();

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        state = deepMerge(getDefaultState(), saved);
      }
    } catch (e) {
      console.warn('Failed to load state:', e);
      state = getDefaultState();
    }
  }

  let saveTimer = null;
  function save() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        console.warn('Failed to save state:', e);
      }
    }, 300);
  }

  function saveNow() {
    if (saveTimer) clearTimeout(saveTimer);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }

  function get(path) {
    if (!path) return state;
    const keys = path.split('.');
    let val = state;
    for (const k of keys) {
      if (val == null) return undefined;
      val = val[k];
    }
    return val;
  }

  function set(path, value) {
    const keys = path.split('.');
    let obj = state;
    for (let i = 0; i < keys.length - 1; i++) {
      if (obj[keys[i]] == null) obj[keys[i]] = {};
      obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = value;
    save();
    emit(path, value);
  }

  function update(path, fn) {
    const current = get(path);
    set(path, fn(current));
  }

  function on(event, callback) {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(callback);
    return () => {
      listeners[event] = listeners[event].filter(cb => cb !== callback);
    };
  }

  function emit(event, data) {
    const parts = event.split('.');
    // Emit exact match and parent paths
    for (let i = parts.length; i >= 1; i--) {
      const key = parts.slice(0, i).join('.');
      if (listeners[key]) {
        listeners[key].forEach(cb => cb(data));
      }
    }
    // Emit wildcard
    if (listeners['*']) {
      listeners['*'].forEach(cb => cb(event, data));
    }
  }

  // Card state management
  function getCard(questionId) {
    if (!state.cards[questionId]) {
      state.cards[questionId] = {
        questionId,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReviewDate: null,
        lastReviewDate: null,
        totalAttempts: 0,
        totalCorrect: 0,
        streak: 0,
        bestStreak: 0,
        phase: 'new',
        learningStep: 0,
      };
    }
    return state.cards[questionId];
  }

  function updateCard(questionId, updates) {
    const card = getCard(questionId);
    Object.assign(card, updates);
    save();
  }

  function getCardsByPhase(phase) {
    return Object.values(state.cards).filter(c => c.phase === phase);
  }

  function getDueCards() {
    const now = new Date().toISOString().split('T')[0];
    return Object.values(state.cards).filter(c =>
      c.nextReviewDate && c.nextReviewDate <= now && c.phase !== 'new'
    );
  }

  function getNewCardCount() {
    return Object.values(state.cards).filter(c => c.phase === 'new' || !c.lastReviewDate).length;
  }

  function getTodayKey() {
    return new Date().toISOString().split('T')[0];
  }

  function getTodayStats() {
    const key = getTodayKey();
    if (!state.dailyStats[key]) {
      state.dailyStats[key] = {
        questionsAnswered: 0,
        questionsCorrect: 0,
        xpEarned: 0,
        newCards: 0,
        reviewCards: 0,
        studyMinutes: 0,
        categoriesStudied: [],
      };
    }
    return state.dailyStats[key];
  }

  function addSession(session) {
    state.sessions.push(session);
    // Keep last 100 sessions
    if (state.sessions.length > 100) {
      state.sessions = state.sessions.slice(-100);
    }
    save();
  }

  function addExamSim(result) {
    state.examSims.push(result);
    save();
  }

  function exportState() {
    return JSON.stringify(state, null, 2);
  }

  function importState(json) {
    try {
      const imported = JSON.parse(json);
      state = deepMerge(getDefaultState(), imported);
      saveNow();
      return true;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  }

  function resetAll() {
    state = getDefaultState();
    saveNow();
  }

  function deepMerge(target, source) {
    const result = { ...target };
    for (const key of Object.keys(source)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    return result;
  }

  // Save on page unload
  window.addEventListener('beforeunload', saveNow);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') saveNow();
  });

  // Load on init
  load();

  return {
    get, set, update, on, emit,
    getCard, updateCard, getCardsByPhase, getDueCards, getNewCardCount,
    getTodayStats, getTodayKey, addSession, addExamSim,
    exportState, importState, resetAll, saveNow, load,
  };
})();
