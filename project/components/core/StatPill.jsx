import React from 'react';

/**
 * StatPill — a single profile stat as a compact key/value block, in mono.
 * Used to render unit profiles (CC, F, E, A, Svg, Cd) in a row.
 */
export function StatPill({
  label,
  value,
  emphasis = false,      // signal-tint the value (e.g. a buffed stat)
  style = {},
}) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
      minWidth: '38px', padding: 'var(--sp-2) var(--sp-1)',
      background: 'var(--surface-3)', borderRadius: 'var(--r-sm)',
      border: '1px solid var(--border-subtle)', ...style,
    }}>
      <span style={{
        font: 'var(--fw-semibold) var(--fs-label)/1 var(--font-ui)',
        letterSpacing: 'var(--ls-label)', textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
      }}>{label}</span>
      <span style={{
        font: 'var(--fw-semibold) var(--fs-h3)/1 var(--font-mono)',
        color: emphasis ? 'var(--signal-400)' : 'var(--text-primary)',
        fontVariantNumeric: 'tabular-nums',
      }}>{value}</span>
    </div>
  );
}
