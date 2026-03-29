// ===== Hash-based SPA Router =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.Router = (() => {
  const routes = {};
  let currentScreen = null;
  let currentRoute = '';

  function register(path, mountFn) {
    routes[path] = mountFn;
  }

  function navigate(path) {
    window.location.hash = path;
  }

  function handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, ...paramParts] = hash.split('/').filter(Boolean);
    const route = '/' + (path || '');
    const params = paramParts.join('/');

    if (route === currentRoute && !params) return;

    // Unmount current screen
    if (currentScreen && currentScreen.unmount) {
      currentScreen.unmount();
    }

    const container = document.getElementById('app');
    if (!container) return;
    container.innerHTML = '';

    // Find matching route
    const mountFn = routes[route] || routes['/'];
    if (mountFn) {
      currentRoute = route;
      currentScreen = mountFn(container, params);
    }

    // Update nav
    updateNav(route);
  }

  function updateNav(route) {
    document.querySelectorAll('.nav-item').forEach(item => {
      const href = item.dataset.route;
      item.classList.toggle('active', href === route);
    });
  }

  function init() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  function getCurrentRoute() {
    return currentRoute;
  }

  return { register, navigate, init, getCurrentRoute, handleRoute };
})();
