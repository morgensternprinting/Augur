// Full-screen app shell for real iPhone deployment.
// Replaces PhoneFrame — no decorative phone casing, uses device safe areas
// via env(safe-area-inset-*). Requires viewport-fit=cover in the <meta> tag.

const APP_TABS = [
  { key: 'select',    label: 'Combat',     icon: 'swords' },
  { key: 'result',    label: 'Pronostic',  icon: 'dices' },
  { key: 'assistant', label: 'Assistant',  icon: 'list-checks' },
  { key: 'tracker',   label: 'Partie',     icon: 'map' },
];

function AppTabBar({ active, onChange }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div style={{
      flex: 'none',
      display: 'flex',
      paddingTop: 8,
      // Push above home indicator; env() falls back to 24px on non-iPhone
      paddingBottom: 'calc(8px + env(safe-area-inset-bottom, 24px))',
      paddingLeft: 'max(8px, env(safe-area-inset-left, 0px))',
      paddingRight: 'max(8px, env(safe-area-inset-right, 0px))',
      background: 'rgba(8,10,14,0.88)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderTop: '1px solid var(--border-default)',
    }}>
      {APP_TABS.map((t) => {
        const on = t.key === active;
        return (
          <button key={t.key} type="button" onClick={() => onChange(t.key)}
            style={{
              flex: 1,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: '6px 0',
              minHeight: 44,  // iOS minimum touch target
              color: on ? 'var(--signal-400)' : 'var(--text-tertiary)',
              WebkitTapHighlightColor: 'transparent',
            }}>
            <i data-lucide={t.icon} style={{ width: 22, height: 22 }} />
            <span style={{
              font: `${on ? 600 : 500} 10px/1 var(--font-ui)`,
              letterSpacing: '0.02em',
            }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function AppShell({ active, onTab, children }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-app)',
      // Push content below the transparent status bar (black-translucent)
      paddingTop: 'env(safe-area-inset-top, 0px)',
    }}>
      <div style={{
        flex: 1, minHeight: 0,
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {children}
      </div>
      {onTab && <AppTabBar active={active} onChange={onTab} />}
    </div>
  );
}

Object.assign(window, { AppShell });
