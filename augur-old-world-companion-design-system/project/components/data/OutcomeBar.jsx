import React from 'react';

/**
 * OutcomeBar — the stacked probability bar for the 5 Old World engagement
 * issues. Reads at a glance; the FUIR (catastrophe) segment is emphasised
 * and segments below a threshold collapse their inline label.
 */

export const OUTCOMES = [
  { key: 'win',      label: "L'emporter",        color: 'var(--out-win)' },
  { key: 'draw',     label: 'Égalité',           color: 'var(--out-draw)' },
  { key: 'give',     label: 'Céder du terrain',  color: 'var(--out-give)' },
  { key: 'fallback', label: 'Reculer en bon ordre', color: 'var(--out-fallback)' },
  { key: 'flee',     label: 'FUIR',              color: 'var(--out-flee)' },
];

export function OutcomeBar({
  dist,                  // { win, draw, give, fallback, flee } — fractions 0..1 (or %)
  height = 30,
  showInline = true,     // show % inside large-enough segments
  emphasizeFlee = true,
  style = {},
}) {
  const norm = (() => {
    const total = OUTCOMES.reduce((s, o) => s + (dist[o.key] || 0), 0) || 1;
    return OUTCOMES.map((o) => ({ ...o, frac: (dist[o.key] || 0) / total }));
  })();

  return (
    <div style={style}>
      <div style={{
        display: 'flex', height: `${height}px`, width: '100%',
        borderRadius: 'var(--r-sm)', overflow: 'hidden',
        border: '1px solid var(--border-default)', background: 'var(--surface-3)',
      }}>
        {norm.map((o) => {
          const pct = Math.round(o.frac * 100);
          const isFlee = o.key === 'flee';
          if (o.frac <= 0) return null;
          return (
            <div
              key={o.key}
              title={`${o.label} · ${pct} %`}
              style={{
                width: `${o.frac * 100}%`,
                background: o.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: isFlee ? '#fff' : '#06090d',
                font: 'var(--fw-semibold) var(--fs-xs)/1 var(--font-mono)',
                boxShadow: isFlee && emphasizeFlee ? 'inset 0 0 0 2px var(--out-flee), 0 0 12px var(--out-flee-glow)' : 'none',
                position: 'relative', zIndex: isFlee ? 1 : 0,
                transition: 'width var(--dur-slow) var(--ease-out)',
                minWidth: 0, overflow: 'hidden',
              }}
            >
              {showInline && o.frac > 0.12 ? `${pct}` : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
}
