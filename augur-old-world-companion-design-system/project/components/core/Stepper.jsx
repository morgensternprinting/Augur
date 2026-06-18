import React from 'react';

/**
 * Stepper — the primary numeric input at the table. Big −/+ targets so
 * the player never opens a keyboard. Used for attacks, ranks, static
 * resolution modifiers, etc.
 */
export function Stepper({
  value,
  onChange = () => {},
  min = 0,
  max = 99,
  step = 1,
  label = null,
  signed = false,        // show explicit +/- on the value (modifiers)
  size = 'md',           // 'md' | 'lg'
  style = {},
}) {
  const h = size === 'lg' ? 'var(--touch-large)' : 'var(--touch-comfy)';
  const clamp = (n) => Math.max(min, Math.min(max, n));
  const display = signed && value > 0 ? `+${value}` : `${value}`;

  const btn = (dir, glyph) => (
    <button
      type="button"
      aria-label={dir > 0 ? 'augmenter' : 'diminuer'}
      onClick={() => onChange(clamp(value + dir * step))}
      disabled={dir > 0 ? value >= max : value <= min}
      style={{
        width: h, height: h, flex: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'transparent', border: 'none', cursor: 'pointer',
        color: 'var(--text-primary)', fontSize: '22px', fontFamily: 'var(--font-ui)',
        opacity: (dir > 0 ? value >= max : value <= min) ? 0.3 : 1,
        transition: 'background var(--dur-fast)', borderRadius: 'var(--r-md)',
      }}
    >{glyph}</button>
  );

  return (
    <div style={style}>
      {label && (
        <div style={{
          font: `var(--fw-semibold) var(--fs-label)/1 var(--font-ui)`,
          letterSpacing: 'var(--ls-label)', textTransform: 'uppercase',
          color: 'var(--text-tertiary)', marginBottom: 'var(--sp-2)',
        }}>{label}</div>
      )}
      <div style={{
        display: 'flex', alignItems: 'center',
        background: 'var(--surface-3)', borderRadius: 'var(--r-md)',
        border: '1px solid var(--border-default)',
      }}>
        {btn(-1, '−')}
        <div style={{
          flex: 1, textAlign: 'center', minWidth: '40px',
          font: `var(--fw-semibold) var(--fs-h3)/1 var(--font-mono)`,
          color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums',
        }}>{display}</div>
        {btn(1, '+')}
      </div>
    </div>
  );
}
