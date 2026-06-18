// Screen 3 — Assistant de phase de combat.
// Step-by-step through the 4 Old World sub-phases. Minimal input, big
// buttons; runs the break test on the unit's Cd and applies the result.

const PHASES = [
  { key:'fight',  n:1, title:'Choisir & Combattre', icon:'swords',
    hint:'Désigne les figurines au contact, applique les attaques dans l\u2019ordre d\u2019Initiative.' },
  { key:'result', n:2, title:'Calculer le résultat', icon:'calculator',
    hint:'Blessures infligées + bonus statiques de chaque camp. La différence est l\u2019écart de résultat.' },
  { key:'break',  n:3, title:'Test de Break', icon:'dices',
    hint:'Le perdant teste sous son Commandement, modifié par l\u2019écart de résultat.' },
  { key:'pursue', n:4, title:'Poursuite', icon:'wind',
    hint:'Si l\u2019unité fuit, le vainqueur poursuit. Une unité rattrapée est détruite.' },
];

function PhaseRail({ active }) {
  return (
    <div style={{ display: 'flex', gap: 6, padding: '0 var(--screen-pad)' }}>
      {PHASES.map((p, i) => (
        <div key={p.key} style={{ flex: 1, height: 4, borderRadius: 'var(--r-pill)',
          background: i <= active ? 'var(--signal-500)' : 'var(--surface-3)',
          boxShadow: i === active ? 'var(--glow-signal)' : 'none', transition: 'background var(--dur-base)' }} />
      ))}
    </div>
  );
}

function ResultTally({ me, setMe, foe, setFoe }) {
  const { Stepper } = window.AugurNS;
  const diff = me - foe;
  const leader = diff === 0 ? null : diff > 0 ? 'me' : 'foe';
  return (
    <React.Fragment>
      <div style={{ display: 'flex', gap: 10 }}>
        <Stepper label="Ton résultat" value={me} onChange={setMe} min={0} max={30} style={{ flex: 1 }} />
        <Stepper label="Résultat adverse" value={foe} onChange={setFoe} min={0} max={30} style={{ flex: 1 }} />
      </div>
      <div style={{ textAlign: 'center', padding: 'var(--sp-3)', background: 'var(--surface-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--border-subtle)' }}>
        <div style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Écart de résultat</div>
        <div style={{ font: '700 var(--fs-display)/1 var(--font-mono)', color: leader === 'me' ? 'var(--positive)' : leader === 'foe' ? 'var(--danger)' : 'var(--text-secondary)', marginTop: 4 }}>
          {diff > 0 ? '+' : ''}{diff}
        </div>
        <div style={{ font: '500 var(--fs-sm)/1 var(--font-ui)', color: 'var(--text-secondary)', marginTop: 4 }}>
          {leader === 'me' ? 'L\u2019adversaire doit tester' : leader === 'foe' ? 'Ton unité doit tester' : 'Égalité — pas de test'}
        </div>
      </div>
    </React.Fragment>
  );
}

function BreakTest({ cd, modifier, rolled, setRolled, unbreakable }) {
  const { Button } = window.AugurNS;
  const target = Math.max(2, cd - modifier);
  const passed = rolled != null && (unbreakable || rolled <= target);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', padding: 'var(--sp-3) 0' }}>
        <div><div style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Cd</div><div style={{ font: '700 var(--fs-h1)/1 var(--font-mono)', color: 'var(--text-primary)', marginTop: 4 }}>{cd}</div></div>
        <div><div style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Malus</div><div style={{ font: '700 var(--fs-h1)/1 var(--font-mono)', color: 'var(--danger)', marginTop: 4 }}>−{modifier}</div></div>
        <div><div style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Cible</div><div style={{ font: '700 var(--fs-h1)/1 var(--font-mono)', color: 'var(--signal-400)', marginTop: 4 }}>{unbreakable ? '—' : '≤' + target}</div></div>
      </div>
      {unbreakable ? (
        <div style={{ textAlign: 'center', padding: 'var(--sp-4)', background: 'var(--out-give-soft)', border: '1px solid var(--caution)', borderRadius: 'var(--r-md)', color: 'var(--caution)', font: '600 var(--fs-body)/1.3 var(--font-ui)' }}>
          Unité inébranlable — réussite automatique, elle tient.
        </div>
      ) : rolled == null ? (
        <Button variant="primary" size="lg" block onClick={() => setRolled(Math.floor(Math.random() * 11) + 2)}
          icon={<i data-lucide="dices" style={{ width: 22, height: 22 }} />}>Lancer 2D6</Button>
      ) : (
        <div style={{ textAlign: 'center', padding: 'var(--sp-4)', borderRadius: 'var(--r-md)',
          background: passed ? 'var(--out-win-soft)' : 'var(--out-flee-soft)',
          border: `1px solid ${passed ? 'var(--out-win)' : 'var(--out-flee)'}`,
          boxShadow: passed ? 'none' : 'var(--glow-flee)' }}>
          <div style={{ font: '700 var(--fs-hero)/1 var(--font-mono)', color: passed ? 'var(--out-win)' : 'var(--out-flee)' }}>{rolled}</div>
          <div style={{ font: '600 var(--fs-h3)/1 var(--font-display)', color: passed ? 'var(--out-win)' : 'var(--out-flee)', marginTop: 6 }}>
            {passed ? 'Test réussi — l\u2019unité tient' : 'Test raté — L\u2019UNITÉ FUIT'}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function CombatAssistant({ onDone }) {
  const { Button } = window.AugurNS;
  const [step, setStep] = React.useState(0);
  const [me, setMe] = React.useState(7);
  const [foe, setFoe] = React.useState(3);
  const [rolled, setRolled] = React.useState(null);
  const phase = PHASES[step];
  const modifier = Math.max(0, me - foe);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const next = () => { if (step < PHASES.length - 1) { setStep(step + 1); } else { onDone && onDone(); } };
  const back = () => step > 0 && setStep(step - 1);

  return (
    <React.Fragment>
      <ScreenHeader eyebrow={`Phase de combat · ${phase.n} / 4`} title="Assistant" />
      <PhaseRail active={step} />
      <Body style={{ paddingTop: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 44, height: 44, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--r-md)', background: 'var(--signal-soft)', border: '1px solid var(--signal-600)' }}>
            <i data-lucide={phase.icon} style={{ width: 22, height: 22, color: 'var(--signal-400)' }} />
          </span>
          <div>
            <div style={{ font: '600 var(--fs-h2)/1.1 var(--font-display)', color: 'var(--text-primary)' }}>{phase.title}</div>
          </div>
        </div>
        <p style={{ margin: '2px 0 6px', font: '400 var(--fs-sm)/1.5 var(--font-ui)', color: 'var(--text-secondary)' }}>{phase.hint}</p>

        <div style={{ background: 'var(--surface-1)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--r-lg)', padding: 'var(--sp-4)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
          {phase.key === 'fight' && (
            <div style={{ font: '400 var(--fs-sm)/1.6 var(--font-ui)', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}><i data-lucide="check" style={{ width: 16, height: 16, color: 'var(--out-win)' }} /> Initiative la plus haute frappe en premier</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}><i data-lucide="check" style={{ width: 16, height: 16, color: 'var(--out-win)' }} /> Touches → blessures → sauvegardes</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}><i data-lucide="check" style={{ width: 16, height: 16, color: 'var(--out-win)' }} /> Retire les pertes au contact</div>
            </div>
          )}
          {phase.key === 'result' && <ResultTally me={me} setMe={setMe} foe={foe} setFoe={setFoe} />}
          {phase.key === 'break' && <BreakTest cd={5} modifier={modifier} rolled={rolled} setRolled={setRolled} unbreakable={false} />}
          {phase.key === 'pursue' && (
            <div style={{ font: '400 var(--fs-sm)/1.6 var(--font-ui)', color: 'var(--text-secondary)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid var(--border-subtle)' }}><span>Distance de fuite</span><span style={{ font:'600 var(--fs-body)/1 var(--font-mono)', color:'var(--text-primary)' }}>2D6 = 9"</span></div>
              <div style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid var(--border-subtle)' }}><span>Poursuite</span><span style={{ font:'600 var(--fs-body)/1 var(--font-mono)', color:'var(--text-primary)' }}>2D6 = 10"</span></div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0 2px' }}><span style={{ color:'var(--out-flee)', fontWeight:600 }}>Unité rattrapée</span>
                <span style={{ font:'600 var(--fs-sm)/1 var(--font-ui)', color:'var(--out-flee)' }}>détruite · +320 PV</span></div>
            </div>
          )}
        </div>
      </Body>
      <div style={{ flex: 'none', padding: '12px var(--screen-pad) 16px', borderTop: '1px solid var(--border-default)', background: 'rgba(12,15,20,0.9)', backdropFilter: 'blur(12px)', display: 'flex', gap: 10 }}>
        {step > 0 && <Button variant="secondary" size="lg" onClick={back} icon={<i data-lucide="chevron-left" style={{ width: 20, height: 20 }} />}>Retour</Button>}
        <Button variant="primary" size="lg" block onClick={next}
          icon={<i data-lucide={step === PHASES.length - 1 ? 'check' : 'chevron-right'} style={{ width: 20, height: 20 }} />}>
          {step === PHASES.length - 1 ? 'Appliquer & terminer' : 'Étape suivante'}
        </Button>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { CombatAssistant });
