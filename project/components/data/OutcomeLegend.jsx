import React from 'react';
import { OUTCOMES } from './OutcomeBar.jsx';

/** Legend for the outcome spectrum. Optionally shows each outcome's %. */
export function OutcomeLegend({
  dist = null,           // optional { key: frac } to print percentages
  columns = 1,           // 1 (stacked rows) | 2
  highlightFlee = true,
  style = {},
}) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: columns === 2 ? '1fr 1fr' : '1fr',
      gap: 'var(--sp-1) var(--sp-4)', ...style,
    }}>
      {OUTCOMES.map((o) => {
        const pct = dist ? Math.round(((dist[o.key] || 0)) * 100) : null;
        const isFlee = o.key === 'flee';
        return (
          <div key={o.key} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--sp-2)',
            minHeight: '26px',
          }}>
            <span style={{
              width: '10px', height: '10px', flex: 'none', borderRadius: '3px',
              background: o.color,
              boxShadow: isFlee && highlightFlee ? '0 0 8px var(--out-flee-glow)' : 'none',
            }} />
            <span style={{
              flex: 1,
              font: `${isFlee ? 'var(--fw-semibold)' : 'var(--fw-regular)'} var(--fs-sm)/1.2 var(--font-ui)`,
              color: isFlee && highlightFlee ? 'var(--out-flee)' : 'var(--text-secondary)',
            }}>{o.label}</span>
            {pct !== null && (
              <span style={{
                font: 'var(--fw-semibold) var(--fs-sm)/1 var(--font-mono)',
                color: isFlee && highlightFlee ? 'var(--out-flee)' : 'var(--text-primary)',
                fontVariantNumeric: 'tabular-nums',
              }}>{pct} %</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
