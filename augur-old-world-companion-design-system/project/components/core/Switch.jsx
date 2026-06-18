import React from 'react';

/** Toggle switch — for boolean game flags like Inébranlable, étendard, charge. */
export function Switch({
  checked = false,
  onChange = () => {},
  label = null,
  disabled = false,
  style = {},
}) {
  const track = (
    <span
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && onChange(!checked)}
      style={{
        width: '52px', height: '30px', flex: 'none',
        borderRadius: 'var(--r-pill)',
        background: checked ? 'var(--signal-500)' : 'var(--surface-3)',
        border: `1px solid ${checked ? 'var(--signal-500)' : 'var(--border-strong)'}`,
        position: 'relative', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--dur-base) var(--ease-out)',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <span style={{
        position: 'absolute', top: '3px', left: checked ? '24px' : '3px',
        width: '24px', height: '24px', borderRadius: 'var(--r-pill)',
        background: checked ? 'var(--text-on-signal)' : 'var(--slate-300)',
        transition: 'left var(--dur-base) var(--ease-out)',
        boxShadow: 'var(--shadow-1)',
      }} />
    </span>
  );

  if (!label) return <span style={style}>{track}</span>;

  return (
    <label style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 'var(--sp-4)', minHeight: 'var(--touch-min)', cursor: disabled ? 'not-allowed' : 'pointer',
      ...style,
    }}>
      <span style={{ font: 'var(--fw-medium) var(--fs-body)/1.2 var(--font-ui)', color: 'var(--text-primary)' }}>{label}</span>
      {track}
    </label>
  );
}
