// ===== Central State Store with localStorage Persistence + Profile System =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.Store = (() => {
  const STORAGE_PREFIX = 'tdc-study-v1-profile-';
  const ACTIVE_PROFILE_KEY = 'tdc-active-profile';
  const PROFILE_NAME_PREFIX = 'tdc-profile-name-';
  const SCHEMA_VERSION = 1;
  const listeners = {};
  let activeProfile = null;

  function getStorageKey() {
    return STORAGE_PREFIX + (activeProfile || '1');
  }

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

  // ===== Profile Management =====
  function getActiveProfile() {
    if (!activeProfile) {
      activeProfile = localStorage.getItem(ACTIVE_PROFILE_KEY);
    }
    return activeProfile;
  }

  function selectProfile(num) {
    activeProfile = String(num);
    localStorage.setItem(ACTIVE_PROFILE_KEY, activeProfile);
    load();
  }

  function getProfileName(num) {
    return localStorage.getItem(PROFILE_NAME_PREFIX + num) || '';
  }

  function setProfileName(num, name) {
    localStorage.setItem(PROFILE_NAME_PREFIX + num, name);
  }

  function getProfileSummaries() {
    const summaries = [];
    for (let i = 1; i <= 10; i++) {
      const key = STORAGE_PREFIX + i;
      const name = getProfileName(i);
      let summary = { num: i, name, empty: true, level: 0, xp: 0, lastStudy: null, questionsAnswered: 0 };
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const data = JSON.parse(raw);
          if (data && data.profile) {
            summary.empty = false;
            summary.level = data.profile.level || 1;
            summary.xp = data.profile.totalXP || 0;
            summary.lastStudy = data.profile.lastStudyDate || null;
            summary.questionsAnswered = data.profile.totalQuestionsAnswered || 0;
          }
        }
      } catch (e) { /* empty slot */ }
      summaries.push(summary);
    }
    return summaries;
  }

  function deleteProfile(num) {
    localStorage.removeItem(STORAGE_PREFIX + num);
    localStorage.removeItem(PROFILE_NAME_PREFIX + num);
    if (activeProfile === String(num)) {
      activeProfile = null;
      localStorage.removeItem(ACTIVE_PROFILE_KEY);
      state = getDefaultState();
    }
  }

  function hasActiveProfile() {
    return !!getActiveProfile();
  }

  // ===== State Persistence =====
  function load() {
    try {
      const raw = localStorage.getItem(getStorageKey());
      if (raw) {
        const saved = JSON.parse(raw);
        state = deepMerge(getDefaultState(), saved);
      } else {
        state = getDefaultState();
      }
    } catch (e) {
      console.warn('Failed to load state:', e);
      state = getDefaultState();
    }
  }

  let saveTimer = null;
  function save() {
    if (!activeProfile) return;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        localStorage.setItem(getStorageKey(), JSON.stringify(state));
      } catch (e) {
        console.warn('Failed to save state:', e);
      }
    }, 300);
  }

  function saveNow() {
    if (!activeProfile) return;
    if (saveTimer) clearTimeout(saveTimer);
    try {
      localStorage.setItem(getStorageKey(), JSON.stringify(state));
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
    for (let i = parts.length; i >= 1; i--) {
      const key = parts.slice(0, i).join('.');
      if (listeners[key]) {
        listeners[key].forEach(cb => cb(data));
      }
    }
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

  // Load active profile on init
  activeProfile = localStorage.getItem(ACTIVE_PROFILE_KEY);
  if (activeProfile) {
    load();
  }

  return {
    get, set, update, on, emit,
    getCard, updateCard, getCardsByPhase, getDueCards, getNewCardCount,
    getTodayStats, getTodayKey, addSession, addExamSim,
    exportState, importState, resetAll, saveNow, load,
    // Profile methods
    getActiveProfile, selectProfile, getProfileName, setProfileName,
    getProfileSummaries, deleteProfile, hasActiveProfile,
  };
})();
