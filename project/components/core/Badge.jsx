import React from 'react';

/** Small status / category label. Tone maps to the system palette. */
export function Badge({
  children,
  tone = 'neutral',      // 'neutral' | 'signal' | 'win' | 'caution' | 'flee'
  solid = false,
  icon = null,
  style = {},
}) {
  const tones = {
    neutral: { fg: 'var(--text-secondary)', soft: 'var(--surface-3)',    solid: 'var(--slate-600)' },
    signal:  { fg: 'var(--signal-300)',     soft: 'var(--signal-soft)',  solid: 'var(--signal-500)' },
    win:     { fg: 'var(--out-win)',        soft: 'var(--out-win-soft)', solid: 'var(--out-win)' },
    caution: { fg: 'var(--caution)',        soft: 'var(--out-give-soft)',solid: 'var(--caution)' },
    flee:    { fg: 'var(--out-flee)',       soft: 'var(--out-flee-soft)',solid: 'var(--out-flee)' },
  };
  const t = tones[tone] || tones.neutral;

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-1)',
      height: '22px', padding: '0 var(--sp-2)',
      borderRadius: 'var(--r-sm)',
      background: solid ? t.solid : t.soft,
      color: solid ? 'var(--text-on-signal)' : t.fg,
      border: solid ? '1px solid transparent' : `1px solid ${t.fg}33`,
      font: 'var(--fw-semibold) var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)', textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style,
    }}>
      {icon}
      {children}
    </span>
  );
}
