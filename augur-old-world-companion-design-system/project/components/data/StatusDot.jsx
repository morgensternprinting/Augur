import React from 'react';

const STATUS = {
  full:      { color: 'var(--status-full)',      label: 'Pleine force' },
  weak:      { color: 'var(--status-weak)',      label: 'Sous 25 % FU' },
  fleeing:   { color: 'var(--status-fleeing)',   label: 'En fuite' },
  destroyed: { color: 'var(--status-destroyed)', label: 'Détruite' },
};

/** Coloured status dot + word. Status is never communicated by glyph alone. */
export function StatusDot({
  status = 'full',       // 'full' | 'weak' | 'fleeing' | 'destroyed'
  showLabel = true,
  pulse = false,         // gentle pulse for the live 'fleeing' alarm
  style = {},
}) {
  const s = STATUS[status] || STATUS.full;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-2)', ...style }}>
      <span style={{
        width: '10px', height: '10px', flex: 'none', borderRadius: 'var(--r-pill)',
        background: s.color,
        boxShadow: status === 'fleeing' ? '0 0 8px var(--out-flee-glow)' : 'none',
        animation: pulse && status === 'fleeing' ? 'augur-pulse 1.6s var(--ease-inout) infinite' : 'none',
      }} />
      {showLabel && (
        <span style={{
          font: 'var(--fw-medium) var(--fs-sm)/1 var(--font-ui)',
          color: status === 'destroyed' ? 'var(--text-tertiary)' : 'var(--text-secondary)',
          textDecoration: status === 'destroyed' ? 'line-through' : 'none',
        }}>{s.label}</span>
      )}
      <style>{`@keyframes augur-pulse{0%,100%{opacity:1}50%{opacity:.45}}@media (prefers-reduced-motion: reduce){[style*="augur-pulse"]{animation:none!important}}`}</style>
    </span>
  );
}
