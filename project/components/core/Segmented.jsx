import React from 'react';

/** Segmented control — for 2–4 mutually-exclusive choices (e.g. result-screen variation, scenario). Keyboard-free. */
export function Segmented({
  options = [],          // [{ value, label }] or string[]
  value,
  onChange = () => {},
  size = 'md',           // 'md' | 'sm'
  style = {},
}) {
  const items = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const h = size === 'sm' ? '36px' : 'var(--touch-min)';

  return (
    <div
      role="tablist"
      style={{
        display: 'flex', gap: '2px', padding: '3px',
        background: 'var(--surface-3)', borderRadius: 'var(--r-md)',
        border: '1px solid var(--border-default)', ...style,
      }}
    >
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(it.value)}
            style={{
              flex: 1, height: h, minWidth: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--sp-2)',
              border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              borderRadius: 'var(--r-sm)',
              background: active ? 'var(--signal-500)' : 'transparent',
              color: active ? 'var(--text-on-signal)' : 'var(--text-secondary)',
              font: `var(--fw-semibold) ${size === 'sm' ? 'var(--fs-sm)' : 'var(--fs-body)'}/1 var(--font-ui)`,
              transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast)',
            }}
          >{it.label}</button>
        );
      })}
    </div>
  );
}
