import React from 'react';

/**
 * VPMeter — the hero metric. Expected NET Victory-Point swing of an
 * engagement, signed and colour-coded, paired with a direction word so
 * colour is never the only signal.
 */
export function VPMeter({
  value,                 // signed integer, net VP swing (in your favour = +)
  range = null,          // optional [low, high] interval
  size = 'hero',         // 'hero' | 'compact'
  style = {},
}) {
  const positive = value >= 0;
  const color = positive ? 'var(--positive)' : 'var(--danger)';
  const dir = positive ? 'en ta faveur' : 'en ta défaveur';
  const signed = `${positive ? '+' : '−'}${Math.abs(value)}`;
  const fs = size === 'hero' ? 'var(--fs-hero)' : 'var(--fs-display)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ...style }}>
      <span style={{
        font: 'var(--fw-semibold) var(--fs-label)/1 var(--font-ui)',
        letterSpacing: 'var(--ls-label)', textTransform: 'uppercase',
        color: 'var(--text-tertiary)', marginBottom: 'var(--sp-1)',
      }}>Gain net espéré · PV</span>
      <span style={{
        font: `var(--fw-bold) ${fs}/var(--lh-tight) var(--font-display)`,
        letterSpacing: 'var(--ls-tight)', color,
        fontVariantNumeric: 'tabular-nums',
      }}>{signed}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--sp-2)', marginTop: 'var(--sp-1)' }}>
        <span style={{ font: 'var(--fw-semibold) var(--fs-sm)/1 var(--font-ui)', color }}>{dir}</span>
        {range && (
          <span style={{
            font: 'var(--fw-regular) var(--fs-xs)/1 var(--font-mono)',
            color: 'var(--text-tertiary)',
          }}>
            intervalle {range[0] >= 0 ? '+' : '−'}{Math.abs(range[0])} … {range[1] >= 0 ? '+' : '−'}{Math.abs(range[1])}
          </span>
        )}
      </div>
    </div>
  );
}
