// Screen 1 — Sélection du combat.
// Pick two engaged units; profiles auto-fill; tweak attacks + static
// resolution modifiers + Inébranlable, then run the simulation.

function UnitPicker({ side, units, selectedId, onSelect }) {
  const { Card } = window.AugurNS;
  const accent = side === 'enemy' ? 'var(--out-flee)' : 'var(--signal-500)';
  return (
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, margin: '0 calc(-1 * var(--screen-pad))', padding: '0 var(--screen-pad) 4px' }}>
      {units.filter(u => u.status !== 'destroyed').map((u) => {
        const on = u.id === selectedId;
        return (
          <button key={u.id} type="button" onClick={() => onSelect(u.id)} style={{
            flex: 'none', width: 150, textAlign: 'left', cursor: 'pointer',
            background: on ? 'var(--signal-soft)' : 'var(--surface-2)',
            border: `1px solid ${on ? accent : 'var(--border-default)'}`,
            borderRadius: 'var(--r-md)', padding: 'var(--sp-3)',
            boxShadow: on ? 'var(--glow-signal)' : 'none',
          }}>
            <div style={{ font: '600 var(--fs-sm)/1.2 var(--font-display)', color: 'var(--text-primary)', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{u.name}</div>
            <div style={{ font: '400 var(--fs-xs)/1 var(--font-mono)', color: 'var(--text-tertiary)' }}>{u.points} pts · FU {u.fu.current}</div>
          </button>
        );
      })}
    </div>
  );
}

function MiniProfile({ unit, side }) {
  const { StatPill } = window.AugurNS;
  if (!unit) return null;
  const stats = [['CC',unit.profile.cc],['F',unit.profile.str],['E',unit.profile.tou],['A',unit.profile.att],['Svg',unit.profile.save],['Cd',unit.profile.cd]];
  return (
    <div style={{ display: 'flex', gap: 5, marginTop: 8 }}>
      {stats.map(([k,v]) => <StatPill key={k} label={k} value={v} style={{ flex: 1, minWidth: 0 }} />)}
    </div>
  );
}

function CombatSelect({ onSimulate }) {
  const D = window.AUGUR_DATA;
  const { Card, Stepper, Switch, Button, Badge } = window.AugurNS;
  const [mine, setMine] = React.useState('u1');
  const [foe, setFoe] = React.useState('e2');
  const [attacks, setAttacks] = React.useState(9);
  const [ranks, setRanks] = React.useState(3);
  const [banner, setBanner] = React.useState(true);
  const [charge, setCharge] = React.useState(true);
  const [flank, setFlank] = React.useState(false);
  const [unbreakable, setUnbreakable] = React.useState(true);

  const myUnit = D.myUnits.find(u => u.id === mine);
  const foeUnit = D.foeUnits.find(u => u.id === foe);
  const staticMod = (ranks > 1 ? Math.min(ranks - 1, 3) : 0) + (banner ? 1 : 0) + (charge ? 1 : 0) + (flank ? 1 : 0);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  return (
    <React.Fragment>
      <ScreenHeader eyebrow="Sélection du combat" title="Engagement" right={
        <span style={{ font: '600 var(--fs-h2)/1 var(--font-mono)', color: 'var(--signal-400)' }}>+{staticMod}</span>
      } />
      <Body>
        <SectionLabel>Ton unité</SectionLabel>
        <UnitPicker side="friendly" units={D.myUnits} selectedId={mine} onSelect={setMine} />
        <Card elevation={1} style={{ padding: 'var(--sp-3) var(--sp-4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ font: '600 var(--fs-h3)/1 var(--font-display)', color: 'var(--text-primary)' }}>{myUnit.name}</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {myUnit.isGeneral && <Badge tone="signal">Général</Badge>}
              {myUnit.hasStandard && <Badge tone="neutral">Étendard</Badge>}
            </div>
          </div>
          <MiniProfile unit={myUnit} side="friendly" />
        </Card>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '4px 0' }}>
          <span style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
          <i data-lucide="swords" style={{ width: 18, height: 18, color: 'var(--text-tertiary)' }} />
          <span style={{ flex: 1, height: 1, background: 'var(--border-default)' }} />
        </div>

        <SectionLabel>Unité adverse</SectionLabel>
        <UnitPicker side="enemy" units={D.foeUnits} selectedId={foe} onSelect={setFoe} />
        <Card elevation={1} style={{ padding: 'var(--sp-3) var(--sp-4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ font: '600 var(--fs-h3)/1 var(--font-display)', color: 'var(--text-primary)' }}>{foeUnit.name}</span>
            {unbreakable && <Badge tone="caution">Inébranlable</Badge>}
          </div>
          <MiniProfile unit={foeUnit} side="enemy" />
        </Card>

        <SectionLabel style={{ marginTop: 10 }}>Ajustements à la volée</SectionLabel>
        <div style={{ display: 'flex', gap: 10 }}>
          <Stepper label="Attaques" value={attacks} onChange={setAttacks} min={1} max={60} style={{ flex: 1 }} />
          <Stepper label="Rangs" value={ranks} onChange={setRanks} min={1} max={10} style={{ flex: 1 }} />
        </div>

        <Card elevation={1} style={{ padding: '4px var(--sp-4)' }}>
          <Switch label="Charge (+1)" checked={charge} onChange={setCharge} />
          <div style={{ height: 1, background: 'var(--border-subtle)' }} />
          <Switch label="Bannière (+1)" checked={banner} onChange={setBanner} />
          <div style={{ height: 1, background: 'var(--border-subtle)' }} />
          <Switch label="Flanc / arrière (+1)" checked={flank} onChange={setFlank} />
          <div style={{ height: 1, background: 'var(--border-subtle)' }} />
          <Switch label="Adversaire inébranlable" checked={unbreakable} onChange={setUnbreakable} />
        </Card>
        <div style={{ height: 4 }} />
      </Body>

      <div style={{ flex: 'none', padding: '12px var(--screen-pad) 16px', borderTop: '1px solid var(--border-default)', background: 'rgba(12,15,20,0.9)', backdropFilter: 'blur(12px)' }}>
        <Button variant="primary" size="lg" block onClick={onSimulate}
          icon={<i data-lucide="dices" style={{ width: 22, height: 22 }} />}>
          Lancer la simulation
        </Button>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { CombatSelect });
