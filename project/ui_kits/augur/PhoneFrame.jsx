// Phone frame + status bar + bottom tab bar for the Augur kit.
// Plain dark device shell — no brand IP.

function StatusBar() {
  return (
    <div style={{
      height: 44, flex: 'none', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 22px',
      font: '600 14px/1 var(--font-ui)', color: 'var(--text-primary)',
    }}>
      <span style={{ fontVariantNumeric: 'tabular-nums' }}>21:47</span>
      <span style={{ display: 'flex', gap: 6, alignItems: 'center', opacity: 0.9 }}>
        <i data-lucide="signal" style={{ width: 16, height: 16 }} />
        <i data-lucide="wifi" style={{ width: 16, height: 16 }} />
        <i data-lucide="battery-medium" style={{ width: 20, height: 20 }} />
      </span>
    </div>
  );
}

const TABS = [
  { key: 'select',    label: 'Combat',     icon: 'swords' },
  { key: 'result',    label: 'Pronostic',  icon: 'dices' },
  { key: 'assistant', label: 'Assistant',  icon: 'list-checks' },
  { key: 'tracker',   label: 'Partie',     icon: 'map' },
];

function TabBar({ active, onChange }) {
  return (
    <div style={{
      flex: 'none', display: 'flex',
      padding: '8px 8px calc(8px + var(--safe-bottom))',
      background: 'rgba(8,10,14,0.82)', backdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border-default)',
    }}>
      {TABS.map((t) => {
        const on = t.key === active;
        return (
          <button key={t.key} type="button" onClick={() => onChange(t.key)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px 0',
              color: on ? 'var(--signal-400)' : 'var(--text-tertiary)',
            }}>
            <i data-lucide={t.icon} style={{ width: 22, height: 22 }} />
            <span style={{ font: `${on ? 600 : 500} 10px/1 var(--font-ui)`, letterSpacing: '0.02em' }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function PhoneFrame({ active, onTab, children }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div style={{
      width: 'var(--screen-w)', height: 844, position: 'relative',
      background: 'var(--bg-app)', borderRadius: 44, overflow: 'hidden',
      border: '10px solid #000', boxShadow: 'var(--shadow-3), 0 0 0 1px #2a2f38',
      display: 'flex', flexDirection: 'column',
    }}>
      <StatusBar />
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {children}
      </div>
      {onTab && <TabBar active={active} onChange={onTab} />}
    </div>
  );
}

Object.assign(window, { PhoneFrame, StatusBar, TabBar });
