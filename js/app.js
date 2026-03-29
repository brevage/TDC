// ===== Main App Entry Point =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.App = (() => {
  let navElement = null;

  function init() {
    // Initialize question registry
    TDC.Questions.init();

    // Apply theme
    const darkMode = TDC.Store.get('settings.darkMode');
    document.documentElement.setAttribute('data-theme', darkMode !== false ? 'dark' : 'light');

    // Check if a profile is active
    if (!TDC.Store.hasActiveProfile()) {
      // Show profile selection screen
      showProfileSelect();
      return;
    }

    // Profile is active — boot the full app
    bootApp();
  }

  function showProfileSelect() {
    // Hide nav if it exists
    if (navElement) navElement.style.display = 'none';

    const container = document.getElementById('app');
    container.innerHTML = '';
    TDC.ProfileSelectScreen.mount(container);
  }

  function onProfileSelected() {
    // Called by ProfileSelectScreen after user picks a profile
    bootApp();
  }

  function bootApp() {
    // Show nav
    if (!navElement) {
      createNav();
    } else {
      navElement.style.display = '';
    }

    // Register routes
    TDC.Router.register('/', (el) => TDC.DashboardScreen.mount(el));
    TDC.Router.register('/study', (el, params) => TDC.StudyScreen.mount(el, params));
    TDC.Router.register('/quiz', (el) => TDC.QuizScreen.mount(el));
    TDC.Router.register('/exam', (el) => TDC.ExamSimScreen.mount(el));
    TDC.Router.register('/quick15', (el) => {
      TDC.QuizEngine.createSession({ mode: 'quick15' });
      return TDC.QuizScreen.mount(el);
    });
    TDC.Router.register('/progress', (el) => TDC.ProgressScreen.mount(el));
    TDC.Router.register('/badges', (el) => TDC.BadgesScreen.mount(el));
    TDC.Router.register('/settings', (el) => TDC.SettingsScreen.mount(el));
    TDC.Router.register('/profiles', (el) => TDC.ProfileSelectScreen.mount(el));

    // Initialize router
    window.location.hash = '/';
    TDC.Router.init();

    // Check streak on load
    TDC.Streaks.checkAndUpdateStreak();

    console.log('TDC Study Pro loaded. Profile: ' + TDC.Store.getActiveProfile() + '. ' + TDC.Questions.getAll().length + ' questions available.');
  }

  function switchProfile() {
    // Go back to profile select
    if (navElement) navElement.style.display = 'none';
    const container = document.getElementById('app');
    container.innerHTML = '';
    TDC.ProfileSelectScreen.mount(container);
  }

  function createNav() {
    navElement = document.createElement('nav');
    navElement.className = 'bottom-nav';
    navElement.innerHTML = `
      <button class="nav-item" data-route="/" onclick="TDC.Router.navigate('/')">
        <span class="nav-icon">🏠</span>
        <span>Home</span>
      </button>
      <button class="nav-item" data-route="/study" onclick="TDC.Router.navigate('/study')">
        <span class="nav-icon">📖</span>
        <span>Study</span>
      </button>
      <button class="nav-item" data-route="/exam" onclick="TDC.Router.navigate('/exam')">
        <span class="nav-icon">📋</span>
        <span>Exam</span>
      </button>
      <button class="nav-item" data-route="/progress" onclick="TDC.Router.navigate('/progress')">
        <span class="nav-icon">📊</span>
        <span>Progress</span>
      </button>
      <button class="nav-item" data-route="/badges" onclick="TDC.Router.navigate('/badges')">
        <span class="nav-icon">🏆</span>
        <span>Badges</span>
      </button>
    `;
    document.body.appendChild(navElement);
  }

  return { init, onProfileSelected, switchProfile };
})();

// Boot the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => TDC.App.init());
