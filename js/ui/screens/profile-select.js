// ===== Profile Selection Screen =====
var TDC = window.TDC || {};
window.TDC = TDC;

TDC.ProfileSelectScreen = (() => {
  let container = null;

  function mount(el) {
    container = el;
    render();
    return { unmount: () => { container = null; } };
  }

  function render() {
    if (!container) return;
    const profiles = TDC.Store.getProfileSummaries();

    container.innerHTML = `
      <div class="text-center mt-lg mb-lg">
        <div style="font-size:2.5rem;margin-bottom:8px">🚛</div>
        <h1>TDC Study Pro</h1>
        <p class="text-secondary mt-sm">Georgia Truck Driving Championship</p>
      </div>

      <h3 class="mb-md text-center">Select Your Profile</h3>

      <div class="flex flex-col gap-sm">
        ${profiles.map(p => `
          <div class="card card-hover card-compact flex items-center gap-md"
               onclick="TDC.ProfileSelectScreen.pick(${p.num})"
               style="cursor:pointer">
            <div style="width:40px;height:40px;border-radius:50%;background:${p.empty ? 'var(--bg-input)' : 'var(--accent)'};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;color:${p.empty ? 'var(--text-muted)' : 'var(--text-inverse)'}">
              ${p.num}
            </div>
            <div class="flex-1">
              ${p.empty ? `
                <div class="text-secondary">Empty Slot</div>
                <div class="text-xs text-muted">Tap to start a new profile</div>
              ` : `
                <div class="text-bold">${p.name || 'Profile ' + p.num}</div>
                <div class="text-xs text-secondary">
                  Lv.${p.level} · ${p.xp} XP · ${p.questionsAnswered} questions answered
                  ${p.lastStudy ? ' · Last: ' + p.lastStudy : ''}
                </div>
              `}
            </div>
            ${!p.empty ? `
              <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();TDC.ProfileSelectScreen.confirmDelete(${p.num})" title="Delete profile" style="color:var(--text-muted);font-size:0.8rem">✕</button>
            ` : ''}
          </div>
        `).join('')}
      </div>

      <div class="text-center text-xs text-muted mt-lg">
        Your progress is saved locally on this device.
      </div>
    `;
  }

  function pick(num) {
    const profiles = TDC.Store.getProfileSummaries();
    const profile = profiles.find(p => p.num === num);

    if (profile && profile.empty) {
      // New profile — ask for name
      showNamePrompt(num);
    } else {
      // Existing profile — load it
      TDC.Store.selectProfile(num);
      TDC.App.onProfileSelected();
    }
  }

  function showNamePrompt(num) {
    if (!container) return;
    container.innerHTML = `
      <div class="text-center mt-lg mb-lg">
        <div style="font-size:2.5rem;margin-bottom:8px">🚛</div>
        <h2>New Profile #${num}</h2>
        <p class="text-secondary mt-sm">Enter your name to get started</p>
      </div>

      <div class="card" style="max-width:350px;margin:0 auto">
        <input type="text" id="profile-name-input" placeholder="Your name"
          class="fill-input mb-md" autofocus maxlength="20"
          onkeydown="if(event.key==='Enter')TDC.ProfileSelectScreen.createProfile(${num})">
        <button class="btn btn-primary btn-block" onclick="TDC.ProfileSelectScreen.createProfile(${num})">
          Start Studying
        </button>
        <button class="btn btn-ghost btn-block mt-sm" onclick="TDC.ProfileSelectScreen.render()">
          Back
        </button>
      </div>
    `;
    setTimeout(() => {
      const input = document.getElementById('profile-name-input');
      if (input) input.focus();
    }, 100);
  }

  function createProfile(num) {
    const input = document.getElementById('profile-name-input');
    const name = input ? input.value.trim() : '';
    TDC.Store.setProfileName(num, name || 'Profile ' + num);
    TDC.Store.selectProfile(num);
    TDC.App.onProfileSelected();
  }

  function confirmDelete(num) {
    const name = TDC.Store.getProfileName(num) || 'Profile ' + num;
    if (confirm('Delete "' + name + '"? All progress will be lost.')) {
      TDC.Store.deleteProfile(num);
      render();
    }
  }

  return { mount, pick, showNamePrompt, createProfile, confirmDelete, render };
})();
