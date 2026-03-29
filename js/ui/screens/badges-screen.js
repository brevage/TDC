// ===== Badges Screen =====
const TDC = window.TDC || {};
window.TDC = TDC;

TDC.BadgesScreen = (() => {
  function mount(el) {
    render(el);
    return { unmount: () => {} };
  }

  function render(el) {
    const allBadges = TDC.Badges.getAll();
    const unlockedCount = allBadges.filter(b => b.unlocked).length;
    const totalCount = allBadges.length;

    // Group by category
    const groups = {};
    for (const badge of allBadges) {
      if (!groups[badge.group]) groups[badge.group] = [];
      groups[badge.group].push(badge);
    }

    // Recent unlocks
    const recent = allBadges
      .filter(b => b.unlocked)
      .sort((a, b) => (b.unlockedAt || '').localeCompare(a.unlockedAt || ''))
      .slice(0, 3);

    el.innerHTML = `
      <div class="flex justify-between items-center mb-lg">
        <h2>Achievements</h2>
        <span class="chip chip-accent">${unlockedCount}/${totalCount}</span>
      </div>

      <div class="progress-bar mb-lg" style="height:6px">
        <div class="progress-fill" style="width:${(unlockedCount / totalCount) * 100}%"></div>
      </div>

      ${recent.length > 0 ? `
        <h3 class="mb-md">Recently Earned</h3>
        <div class="flex flex-col gap-sm mb-lg">
          ${recent.map(b => `
            <div class="card card-compact flex items-center gap-md">
              <span style="font-size:1.5rem">${b.icon}</span>
              <div class="flex-1">
                <div class="text-bold">${b.name}</div>
                <div class="text-xs text-secondary">${b.description}</div>
              </div>
              <span class="chip chip-accent">+${b.xp}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${Object.entries(groups).map(([group, badges]) => `
        <h3 class="mb-md mt-lg">${group}</h3>
        <div class="badges-grid">
          ${badges.map(b => `
            <div class="badge-card ${b.unlocked ? 'unlocked' : 'locked'}" title="${b.description}">
              <div class="badge-icon">${b.icon}</div>
              <div class="badge-name">${b.name}</div>
              <div class="badge-tier">${b.tier}</div>
              ${b.unlocked ? `<div class="text-xs text-success mt-xs">✓</div>` : ''}
            </div>
          `).join('')}
        </div>
      `).join('')}
    `;
  }

  return { mount };
})();
