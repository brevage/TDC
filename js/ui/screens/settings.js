// ===== Settings Screen =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.SettingsScreen = (() => {
  function mount(el) {
    render(el);
    return { unmount: () => {} };
  }

  function render(el) {
    const settings = TDC.Store.get('settings');
    const profile = TDC.Store.get('profile');

    const profileNum = TDC.Store.getActiveProfile() || '?';
    const profileName = TDC.Store.getProfileName(profileNum) || 'Profile ' + profileNum;

    el.innerHTML = `
      <h2 class="mb-lg">Settings</h2>

      <div class="settings-group">
        <h3 class="mb-md">Profile</h3>
        <div class="card card-compact flex items-center justify-between mb-md">
          <div>
            <div class="text-bold">${profileName}</div>
            <div class="text-xs text-secondary">Profile #${profileNum}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="TDC.App.switchProfile()">Switch Profile</button>
        </div>
      </div>

      <div class="settings-group">
        <h3 class="mb-md">Appearance</h3>
        <div class="settings-row">
          <div>
            <div class="settings-label">Dark Mode</div>
            <div class="settings-desc">Easier on the eyes for night study</div>
          </div>
          <div class="toggle ${settings.darkMode !== false ? 'active' : ''}"
            onclick="TDC.SettingsScreen.toggleDarkMode()"></div>
        </div>
      </div>

      <div class="settings-group">
        <h3 class="mb-md">Study</h3>
        <div class="settings-row">
          <div>
            <div class="settings-label">Daily Goal</div>
            <div class="settings-desc">Minimum questions per day for streak</div>
          </div>
          <select onchange="TDC.SettingsScreen.setDailyGoal(this.value)" style="width:80px">
            ${[5, 10, 15, 20, 30, 50].map(n =>
              `<option value="${n}" ${settings.dailyGoal === n ? 'selected' : ''}>${n}</option>`
            ).join('')}
          </select>
        </div>
        <div class="settings-row">
          <div>
            <div class="settings-label">Session Size</div>
            <div class="settings-desc">Default questions per session</div>
          </div>
          <select onchange="TDC.SettingsScreen.setSessionSize(this.value)" style="width:80px">
            ${[10, 15, 20, 30, 50].map(n =>
              `<option value="${n}" ${settings.sessionSize === n ? 'selected' : ''}>${n}</option>`
            ).join('')}
          </select>
        </div>
        <div class="settings-row">
          <div>
            <div class="settings-label">New Cards/Day</div>
            <div class="settings-desc">Max new cards introduced per day</div>
          </div>
          <select onchange="TDC.SettingsScreen.setNewCardLimit(this.value)" style="width:80px">
            ${[10, 15, 20, 30, 50].map(n =>
              `<option value="${n}" ${settings.dailyNewCardLimit === n ? 'selected' : ''}>${n}</option>`
            ).join('')}
          </select>
        </div>
      </div>

      <div class="settings-group">
        <h3 class="mb-md">Data</h3>
        <div class="flex gap-sm">
          <button class="btn btn-secondary flex-1" onclick="TDC.SettingsScreen.exportData()">Export</button>
          <button class="btn btn-secondary flex-1" onclick="document.getElementById('import-file').click()">Import</button>
          <input type="file" id="import-file" accept=".json" class="hidden" onchange="TDC.SettingsScreen.importData(this)">
        </div>
        <button class="btn btn-danger btn-block mt-md" onclick="TDC.SettingsScreen.resetData()">Reset All Progress</button>
      </div>

      <div class="settings-group">
        <h3 class="mb-md">Stats</h3>
        <div class="text-sm text-secondary">
          <div>Total XP: ${profile.totalXP || 0}</div>
          <div>Level: ${profile.level || 1} — ${TDC.Levels.getCurrentTitle()}</div>
          <div>Questions answered: ${profile.totalQuestionsAnswered || 0}</div>
          <div>Current streak: ${profile.currentStreak || 0} days</div>
          <div>Longest streak: ${profile.longestStreak || 0} days</div>
          <div>Streak freezes available: ${profile.streakFreezes || 0}</div>
          <div>Total study time: ${profile.studyTimeMinutes || 0} minutes</div>
        </div>
      </div>
    `;
  }

  function toggleDarkMode() {
    const current = TDC.Store.get('settings.darkMode');
    TDC.Store.set('settings.darkMode', !current);
    document.documentElement.setAttribute('data-theme', !current ? 'dark' : 'light');
    TDC.Router.handleRoute();
  }

  function setDailyGoal(val) {
    TDC.Store.set('settings.dailyGoal', parseInt(val));
  }

  function setSessionSize(val) {
    TDC.Store.set('settings.sessionSize', parseInt(val));
  }

  function setNewCardLimit(val) {
    TDC.Store.set('settings.dailyNewCardLimit', parseInt(val));
  }

  function exportData() {
    const data = TDC.Store.exportState();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tdc-study-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (TDC.Store.importState(e.target.result)) {
        alert('Data imported successfully!');
        TDC.Router.navigate('/');
      } else {
        alert('Failed to import data. Invalid file format.');
      }
    };
    reader.readAsText(file);
  }

  function resetData() {
    if (confirm('Are you sure? This will delete ALL your progress, XP, and study history. This cannot be undone.')) {
      if (confirm('Really? All your streaks and badges will be gone forever.')) {
        TDC.Store.resetAll();
        TDC.Router.navigate('/');
      }
    }
  }

  return { mount, toggleDarkMode, setDailyGoal, setSessionSize, setNewCardLimit, exportData, importData, resetData };
})();
