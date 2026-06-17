import React from 'react';
import { StatPill } from '../core/StatPill.jsx';
import { StatusDot } from './StatusDot.jsx';
import { Badge } from '../core/Badge.jsx';

/**
 * UnitStatCard — a roster unit rendered as a profile card: name, points,
 * role badges (Général / GB / étendard), the stat line, and a Force d'Unité
 * bar with the 25 % threshold marked.
 */
export function UnitStatCard({
  unit,                  // see UnitProfile shape in .d.ts
  side = 'friendly',     // 'friendly' | 'enemy' — tints the accent rail
  selected = false,
  onClick = null,
  compact = false,
  style = {},
}) {
  const {
    name, points, profile = {}, fu = {}, status = 'full',
    isGeneral = false, isBSB = false, hasStandard = false,
  } = unit || {};

  const accent = side === 'enemy' ? 'var(--out-flee)' : 'var(--signal-500)';
  const fuPct = fu.max ? Math.max(0, Math.min(1, fu.current / fu.max)) : 0;
  const below25 = fuPct > 0 && fuPct < 0.25;
  const stats = [
    ['CC', profile.cc], ['F', profile.str], ['E', profile.tou],
    ['A', profile.att], ['Svg', profile.save], ['Cd', profile.cd],
  ];

  return (
    <div
      onClick={onClick || undefined}
      style={{
        position: 'relative',
        background: 'var(--surface-1)',
        borderRadius: 'var(--r-lg)',
        border: `1px solid ${selected ? accent : 'var(--border-subtle)'}`,
        padding: 'var(--sp-4)',
        paddingLeft: 'calc(var(--sp-4) + 3px)',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: selected ? 'var(--glow-signal)' : 'var(--shadow-1)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* side accent rail */}
      <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: accent }} />

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--sp-2)', marginBottom: 'var(--sp-3)' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ font: 'var(--fw-semibold) var(--fs-h3)/1.1 var(--font-display)', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</div>
          <div style={{ font: 'var(--fw-regular) var(--fs-xs)/1 var(--font-mono)', color: 'var(--text-tertiary)', marginTop: '3px' }}>{points} pts</div>
        </div>
        <StatusDot status={status} showLabel={!compact} />
      </div>

      {(isGeneral || isBSB || hasStandard) && (
        <div style={{ display: 'flex', gap: 'var(--sp-1)', flexWrap: 'wrap', marginBottom: 'var(--sp-3)' }}>
          {isGeneral && <Badge tone="signal">Général</Badge>}
          {isBSB && <Badge tone="signal">Grande bannière</Badge>}
          {hasStandard && <Badge tone="neutral">Étendard</Badge>}
        </div>
      )}

      {!compact && (
        <div style={{ display: 'flex', gap: 'var(--sp-1)', marginBottom: 'var(--sp-3)' }}>
          {stats.map(([k, v]) => <StatPill key={k} label={k} value={v ?? '—'} style={{ flex: 1 }} />)}
        </div>
      )}

      {/* Force d'Unité bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--sp-1)' }}>
          <span style={{ font: 'var(--fw-semibold) var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Force d'unité</span>
          <span style={{ font: 'var(--fw-semibold) var(--fs-sm)/1 var(--font-mono)', color: below25 ? 'var(--status-weak)' : 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>{fu.current ?? '—'} / {fu.max ?? '—'}</span>
        </div>
        <div style={{ position: 'relative', height: '8px', borderRadius: 'var(--r-pill)', background: 'var(--surface-3)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, width: `${fuPct * 100}%`, background: below25 ? 'var(--status-weak)' : 'var(--status-full)', borderRadius: 'var(--r-pill)', transition: 'width var(--dur-slow) var(--ease-out)' }} />
          {/* 25% threshold tick */}
          <div style={{ position: 'absolute', left: '25%', top: '-2px', bottom: '-2px', width: '2px', background: 'var(--bg-app)', opacity: 0.9 }} />
        </div>
      </div>
    </div>
  );
}
