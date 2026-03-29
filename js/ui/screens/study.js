// ===== Study Screen (Category Selection) =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.StudyScreen = (() => {
  function mount(el, params) {
    // If a category was passed, start quiz directly
    if (params) {
      startCategorySession(params);
      return { unmount: () => {} };
    }
    render(el);
    return { unmount: () => {} };
  }

  function render(el) {
    const categories = TDC.Questions.getCategoryInfo();
    const dueCount = TDC.Questions.getTotalDueCount();

    el.innerHTML = `
      <h2 class="mb-lg">Study Mode</h2>

      <button class="btn btn-primary btn-lg btn-block mb-md" onclick="TDC.StudyScreen.startSRS()">
        SRS Smart Review
        ${dueCount > 0 ? `<span class="due-count">${dueCount} due</span>` : '<span class="text-sm" style="opacity:0.7">all categories</span>'}
      </button>

      <div class="flex gap-sm mb-lg">
        <button class="btn btn-secondary flex-1" onclick="TDC.StudyScreen.startMode('quick15')">
          Quick 15
        </button>
        <button class="btn btn-secondary flex-1" onclick="TDC.StudyScreen.startMode('winners')">
          Winners Mode
        </button>
        <button class="btn btn-secondary flex-1" onclick="TDC.StudyScreen.startMode('numbers')">
          Numbers Blitz
        </button>
      </div>

      <h3 class="mb-md">Study by Category</h3>
      <div class="category-list">
        ${categories.map(cat => `
          <div class="category-card" onclick="TDC.StudyScreen.startCategory('${cat.key}')">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-info">
              <div class="category-name">${cat.name}</div>
              <div class="category-meta">
                ${cat.total} questions · ${cat.mastered} mastered
                ${cat.dueCount > 0 ? ` · <span class="text-error">${cat.dueCount} due</span>` : ''}
              </div>
              <div class="progress-bar mt-sm" style="height:4px">
                <div class="progress-fill" style="width: ${cat.total > 0 ? Math.round(cat.mastered / cat.total * 100) : 0}%"></div>
              </div>
            </div>
            <div class="category-progress">${cat.total > 0 ? Math.round(cat.mastered / cat.total * 100) : 0}%</div>
          </div>
        `).join('')}
      </div>

      <div class="mt-lg">
        <button class="btn btn-secondary btn-block" onclick="TDC.StudyScreen.startMode('acronym')">
          Acronym Drill (Rapid Fire)
        </button>
      </div>

      <div class="flex gap-sm mt-md text-sm text-center text-secondary">
        <div class="flex-1">Session size:</div>
      </div>
      <div class="flex gap-sm mt-sm">
        <button class="btn btn-sm flex-1 ${getSessionSize() === 10 ? 'btn-primary' : 'btn-secondary'}" onclick="TDC.StudyScreen.setSize(10)">10</button>
        <button class="btn btn-sm flex-1 ${getSessionSize() === 20 ? 'btn-primary' : 'btn-secondary'}" onclick="TDC.StudyScreen.setSize(20)">20</button>
        <button class="btn btn-sm flex-1 ${getSessionSize() === 50 ? 'btn-primary' : 'btn-secondary'}" onclick="TDC.StudyScreen.setSize(50)">50</button>
        <button class="btn btn-sm flex-1 ${getSessionSize() === 999 ? 'btn-primary' : 'btn-secondary'}" onclick="TDC.StudyScreen.setSize(999)">All</button>
      </div>
    `;
  }

  function getSessionSize() {
    return TDC.Store.get('settings.sessionSize') || 20;
  }

  function setSize(n) {
    TDC.Store.set('settings.sessionSize', n);
    TDC.Router.handleRoute();
  }

  function startSRS() {
    const size = getSessionSize();
    TDC.QuizEngine.createSession({ mode: 'srs', size });
    TDC.Router.navigate('/quiz');
  }

  function startCategory(cat) {
    const size = getSessionSize();
    TDC.QuizEngine.createSession({ mode: 'category', category: cat, size });
    TDC.Router.navigate('/quiz');
  }

  function startCategorySession(cat) {
    const size = getSessionSize();
    TDC.QuizEngine.createSession({ mode: 'category', category: cat, size });
    TDC.Router.navigate('/quiz');
  }

  function startMode(mode) {
    const size = mode === 'quick15' ? 15 : (mode === 'acronym' ? 30 : getSessionSize());
    TDC.QuizEngine.createSession({ mode, size });
    TDC.Router.navigate('/quiz');
  }

  return { mount, startSRS, startCategory, startMode, setSize };
})();
