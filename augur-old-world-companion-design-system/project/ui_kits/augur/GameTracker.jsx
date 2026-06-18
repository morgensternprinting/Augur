// Screen 4 — Tracker d'état de partie & Points de Victoire.
// Both armies at a glance, per-unit status, live VP counters from losses,
// scenario objectives. "Who's leading and by how much" instantly.

function VPScoreboard({ players }) {
  const lead = players.me.vp - players.foe.vp;
  const leading = lead >= 0;
  return (
    <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--r-lg)', border: '1px solid var(--border-subtle)', padding: 'var(--sp-4)', boxShadow: 'var(--shadow-2)' }}>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        {[['me', players.me, 'var(--signal-400)'], ['foe', players.foe, 'var(--out-flee)']].map(([k, p, col], i) => (
          <React.Fragment key={k}>
            {i === 1 && <div style={{ width: 1, background: 'var(--border-default)', margin: '0 var(--sp-3)' }} />}
            <div style={{ flex: 1, textAlign: i === 0 ? 'left' : 'right' }}>
              <div style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{p.name}</div>
              <div style={{ font: '700 44px/1 var(--font-display)', color: col, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{p.vp}</div>
              <div style={{ font: '400 var(--fs-xs)/1 var(--font-ui)', color: 'var(--text-tertiary)', marginTop: 2 }}>{p.army}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div style={{ marginTop: 'var(--sp-3)', padding: 'var(--sp-2)', borderRadius: 'var(--r-md)', background: leading ? 'var(--out-win-soft)' : 'var(--out-flee-soft)', textAlign: 'center', font: '600 var(--fs-sm)/1 var(--font-ui)', color: leading ? 'var(--out-win)' : 'var(--out-flee)' }}>
        {leading ? `Tu mènes de ${lead} PV` : `Tu es mené de ${Math.abs(lead)} PV`}
      </div>
    </div>
  );
}

function UnitRow({ unit }) {
  const { StatusDot, Badge } = window.AugurNS;
  const pct = unit.fu.max ? unit.fu.current / unit.fu.max : 0;
  const dead = unit.status === 'destroyed';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', opacity: dead ? 0.5 : 1 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ font: '600 var(--fs-body)/1.1 var(--font-ui)', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textDecoration: dead ? 'line-through' : 'none' }}>{unit.name}</span>
          {unit.isGeneral && <Badge tone="signal">Gén.</Badge>}
          {unit.isBSB && <Badge tone="signal">GB</Badge>}
        </div>
        <div style={{ marginTop: 5, height: 5, borderRadius: 'var(--r-pill)', background: 'var(--surface-3)', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, width: (pct * 100) + '%', background: unit.status === 'weak' ? 'var(--status-weak)' : unit.status === 'fleeing' ? 'var(--status-fleeing)' : dead ? 'var(--status-destroyed)' : 'var(--status-full)', borderRadius: 'var(--r-pill)' }} />
          <div style={{ position: 'absolute', left: '25%', top: -1, bottom: -1, width: 2, background: 'var(--bg-app)' }} />
        </div>
      </div>
      <div style={{ flex: 'none', width: 96, textAlign: 'right' }}>
        <StatusDot status={unit.status} showLabel={true} style={{ justifyContent: 'flex-end' }} />
        <div style={{ font: '400 var(--fs-xs)/1 var(--font-mono)', color: 'var(--text-tertiary)', marginTop: 3 }}>{unit.points} pts</div>
      </div>
    </div>
  );
}

function ArmyPanel({ title, units, side }) {
  const lost = units.filter(u => u.status === 'destroyed').reduce((s, u) => s + u.points, 0);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '4px 0 2px' }}>
        <span style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: side === 'enemy' ? 'var(--out-flee)' : 'var(--signal-400)' }}>{title}</span>
        <span style={{ font: '400 var(--fs-xs)/1 var(--font-mono)', color: 'var(--text-tertiary)' }}>perdu {lost} pts</span>
      </div>
      <div style={{ background: 'var(--surface-1)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--r-lg)', padding: '0 var(--sp-4)' }}>
        {units.map((u, i) => (
          <React.Fragment key={u.id}>
            {i > 0 && <div style={{ height: 1, background: 'var(--border-subtle)' }} />}
            <UnitRow unit={u} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Objectives({ items }) {
  const { Segmented } = window.AugurNS;
  const [state, setState] = React.useState(() => Object.fromEntries(items.map(o => [o.id, o.holder])));
  return (
    <div>
      <div style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', margin: '4px 0 6px' }}>Objectifs du scénario</div>
      <div style={{ background: 'var(--surface-1)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--r-lg)', padding: 'var(--sp-3) var(--sp-4)', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((o) => (
          <div key={o.id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ flex: 1, font: '500 var(--fs-sm)/1.2 var(--font-ui)', color: 'var(--text-secondary)' }}>{o.name}</span>
            <Segmented size="sm" value={state[o.id]} onChange={(v) => setState(s => ({ ...s, [o.id]: v }))} style={{ width: 150 }}
              options={[{value:'me',label:'Toi'},{value:'none',label:'—'},{value:'foe',label:'Adv.'}]} />
          </div>
        ))}
      </div>
    </div>
  );
}

function GameTracker() {
  const D = window.AUGUR_DATA;
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <React.Fragment>
      <ScreenHeader eyebrow="Tour 4 · Phase de mêlée" title="Partie" right={
        <span style={{ font: '400 var(--fs-xs)/1.3 var(--font-mono)', color: 'var(--text-tertiary)', textAlign: 'right' }}>Bataille rangée<br/>2000 pts</span>
      } />
      <Body>
        <VPScoreboard players={D.players} />
        <Objectives items={D.objectives} />
        <ArmyPanel title="Ton armée" units={D.myUnits} side="friendly" />
        <ArmyPanel title="Armée adverse" units={D.foeUnits} side="enemy" />
        <div style={{ height: 4 }} />
      </Body>
    </React.Fragment>
  );
}

Object.assign(window, { GameTracker });
