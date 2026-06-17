// Screen 2 — Écran résultat probabiliste (HERO SCREEN).
// Output of the Monte-Carlo engine. Hero metric = expected NET VP swing.
// Three presentation variations (Segmented switch): Verdict / Cadran / Duel.
//
// VP-HIERARCHY CHOICES (documented in readme.md):
//  - net VP swing is the single loudest element (fs-hero, signed, colour-coded)
//  - FUIR is the only data point allowed a glow (catastrophe)
//  - a "mauvais échange" banner overrides when win-chance is high but VP gain low

function BadExchangeBanner() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div style={{
      display: 'flex', gap: 10, alignItems: 'flex-start',
      background: 'var(--out-give-soft)', border: '1px solid var(--caution)',
      borderRadius: 'var(--r-md)', padding: 'var(--sp-3) var(--sp-4)',
    }}>
      <i data-lucide="triangle-alert" style={{ width: 20, height: 20, color: 'var(--caution)', flex: 'none', marginTop: 1 }} />
      <div>
        <div style={{ font: '600 var(--fs-sm)/1.2 var(--font-ui)', color: 'var(--caution)' }}>Mauvais échange probable</div>
        <div style={{ font: '400 var(--fs-xs)/1.4 var(--font-ui)', color: 'var(--text-secondary)', marginTop: 2 }}>
          Tu gagnes le combat dans la plupart des cas, mais l'unité inébranlable ne se brise pas : peu de PV à la clé.
        </div>
      </div>
    </div>
  );
}

function UnitOutcomeRow({ label, dist, side }) {
  const { OutcomeBar } = window.AugurNS;
  const fleePct = Math.round((dist.flee || 0) * 100);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span style={{ font: '600 var(--fs-sm)/1 var(--font-ui)', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 170 }}>{label}</span>
        <span style={{ font: '600 var(--fs-xs)/1 var(--font-mono)', color: fleePct >= 30 ? 'var(--out-flee)' : 'var(--text-tertiary)' }}>
          FUIR {fleePct} %
        </span>
      </div>
      <OutcomeBar dist={dist} height={26} />
    </div>
  );
}

/* ── Variation A — VERDICT ───────────────────────────────────────── */
function VariantVerdict({ res, names }) {
  const { Card, VPMeter, OutcomeLegend } = window.AugurNS;
  return (
    <React.Fragment>
      <Card elevation={2} style={{ padding: 'var(--sp-5)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
        <VPMeter value={res.expectedVP} range={res.range} />
        {res.badExchange && <BadExchangeBanner />}
      </Card>
      <Card elevation={1} style={{ padding: 'var(--sp-4)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
        <UnitOutcomeRow label={names.me} dist={res.me} side="friendly" />
        <UnitOutcomeRow label={names.foe} dist={res.foe} side="enemy" />
        <div style={{ height: 1, background: 'var(--border-subtle)' }} />
        <OutcomeLegend columns={2} />
      </Card>
    </React.Fragment>
  );
}

/* ── Variation B — CADRAN (diverging gauge + flee dials) ─────────── */
function DivergingVP({ value, range }) {
  const span = 220; // px half-width domain ~ ±220 VP
  const clamp = (v) => Math.max(-span, Math.min(span, v));
  const pct = (v) => 50 + (clamp(v) / span) * 50;
  const positive = value >= 0;
  const color = positive ? 'var(--positive)' : 'var(--danger)';
  return (
    <div>
      <div style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 8 }}>Gain net espéré · PV</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
        <span style={{ font: '700 var(--fs-hero)/1 var(--font-display)', color, letterSpacing: 'var(--ls-tight)', fontVariantNumeric: 'tabular-nums' }}>{positive ? '+' : '−'}{Math.abs(value)}</span>
        <span style={{ font: '600 var(--fs-sm)/1 var(--font-ui)', color }}>{positive ? 'en ta faveur' : 'en ta défaveur'}</span>
      </div>
      <div style={{ position: 'relative', height: 14, borderRadius: 'var(--r-pill)', background: 'linear-gradient(90deg, var(--out-flee-soft), var(--surface-3) 50%, var(--out-win-soft))', border: '1px solid var(--border-default)', overflow: 'hidden' }}>
        {/* range band */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${pct(range[0])}%`, width: `${pct(range[1]) - pct(range[0])}%`, background: positive ? 'var(--out-win-soft)' : 'var(--out-flee-soft)' }} />
        {/* zero tick */}
        <div style={{ position: 'absolute', left: '50%', top: -3, bottom: -3, width: 2, background: 'var(--text-tertiary)' }} />
        {/* value marker */}
        <div style={{ position: 'absolute', left: `${pct(value)}%`, top: '50%', width: 14, height: 14, transform: 'translate(-50%,-50%)', borderRadius: '50%', background: color, boxShadow: '0 0 10px ' + (positive ? 'rgba(79,176,122,.5)' : 'var(--out-flee-glow)'), border: '2px solid var(--bg-app)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', font: '400 var(--fs-xs)/1 var(--font-mono)', color: 'var(--text-tertiary)', marginTop: 6 }}>
        <span>défaite</span><span>0</span><span>victoire</span>
      </div>
    </div>
  );
}

function FleeDial({ label, value, side }) {
  const pct = Math.round(value * 100);
  const r = 26, c = 2 * Math.PI * r;
  const danger = pct >= 30;
  const col = danger ? 'var(--out-flee)' : 'var(--out-draw)';
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ position: 'relative', width: 64, height: 64 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="32" cy="32" r={r} fill="none" stroke="var(--surface-3)" strokeWidth="6" />
          <circle cx="32" cy="32" r={r} fill="none" stroke={col} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={c * (1 - value)}
            style={{ filter: danger ? 'drop-shadow(0 0 5px var(--out-flee-glow))' : 'none', transition: 'stroke-dashoffset var(--dur-slow) var(--ease-out)' }} />
        </svg>
        <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', font: '700 var(--fs-h3)/1 var(--font-mono)', color: col }}>{pct}</span>
      </div>
      <span style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', textAlign: 'center' }}>FUIR · {label}</span>
    </div>
  );
}

function VariantCadran({ res, names }) {
  const { Card, OutcomeLegend } = window.AugurNS;
  return (
    <React.Fragment>
      <Card elevation={2} style={{ padding: 'var(--sp-5)' }}>
        <DivergingVP value={res.expectedVP} range={res.range} />
      </Card>
      {res.badExchange && <BadExchangeBanner />}
      <Card elevation={1} style={{ padding: 'var(--sp-4)' }}>
        <div style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 12 }}>Risque de fuite</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <FleeDial label={names.meShort} value={res.me.flee} side="friendly" />
          <div style={{ width: 1, background: 'var(--border-subtle)' }} />
          <FleeDial label={names.foeShort} value={res.foe.flee} side="enemy" />
        </div>
      </Card>
      <Card elevation={1} style={{ padding: 'var(--sp-4)' }}>
        <UnitOutcomeRow label={names.me} dist={res.me} side="friendly" />
        <div style={{ height: 12 }} />
        <UnitOutcomeRow label={names.foe} dist={res.foe} side="enemy" />
        <div style={{ height: 1, background: 'var(--border-subtle)', margin: '14px 0' }} />
        <OutcomeLegend columns={2} />
      </Card>
    </React.Fragment>
  );
}

/* ── Variation C — DUEL (side-by-side columns + tug-of-war) ──────── */
function OutcomeColumn({ name, dist, side }) {
  const { OUTCOMES } = window.AugurNS;
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ font: '600 var(--fs-sm)/1.2 var(--font-display)', color: side === 'enemy' ? 'var(--out-flee)' : 'var(--signal-400)', marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {OUTCOMES.map((o) => {
          const pct = Math.round((dist[o.key] || 0) * 100);
          const flee = o.key === 'flee';
          return (
            <div key={o.key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: o.color, flex: 'none', boxShadow: flee && pct > 0 ? '0 0 6px var(--out-flee-glow)' : 'none' }} />
              <span style={{ flex: 1, height: 6, borderRadius: 3, background: 'var(--surface-3)', overflow: 'hidden' }}>
                <span style={{ display: 'block', height: '100%', width: pct + '%', background: o.color, borderRadius: 3 }} />
              </span>
              <span style={{ width: 30, textAlign: 'right', font: `${flee ? 600 : 400} var(--fs-xs)/1 var(--font-mono)`, color: flee && pct >= 20 ? 'var(--out-flee)' : 'var(--text-tertiary)' }}>{pct}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VariantDuel({ res, names }) {
  const { Card } = window.AugurNS;
  const positive = res.expectedVP >= 0;
  // tug-of-war: position of marker based on VP swing
  const tug = 50 + Math.max(-46, Math.min(46, res.expectedVP / 5));
  return (
    <React.Fragment>
      <Card elevation={2} style={{ padding: 'var(--sp-4) var(--sp-5) var(--sp-5)' }}>
        <div style={{ font: '600 var(--fs-label)/1 var(--font-ui)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 10, textAlign: 'center' }}>Gain net espéré · PV</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 14 }}>
          <span style={{ font: '700 var(--fs-hero)/1 var(--font-display)', color: positive ? 'var(--positive)' : 'var(--danger)', letterSpacing: 'var(--ls-tight)', fontVariantNumeric: 'tabular-nums' }}>{positive ? '+' : '−'}{Math.abs(res.expectedVP)}</span>
        </div>
        {/* tug-of-war bar */}
        <div style={{ position: 'relative', height: 8, borderRadius: 'var(--r-pill)', background: 'var(--surface-3)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: tug + '%', background: 'var(--signal-600)' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: (100 - tug) + '%', background: 'var(--out-flee)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, font: '600 var(--fs-xs)/1 var(--font-ui)' }}>
          <span style={{ color: 'var(--signal-400)' }}>{names.meShort}</span>
          <span style={{ color: 'var(--out-flee)' }}>{names.foeShort}</span>
        </div>
      </Card>
      {res.badExchange && <BadExchangeBanner />}
      <Card elevation={1} style={{ padding: 'var(--sp-4)' }}>
        <div style={{ display: 'flex', gap: 16 }}>
          <OutcomeColumn name={names.me} dist={res.me} side="friendly" />
          <div style={{ width: 1, background: 'var(--border-subtle)' }} />
          <OutcomeColumn name={names.foe} dist={res.foe} side="enemy" />
        </div>
      </Card>
    </React.Fragment>
  );
}

function ResultProbabilistic({ onResolve }) {
  const D = window.AUGUR_DATA;
  const { Segmented, Button } = window.AugurNS;
  const [view, setView] = React.useState('verdict');
  const [scenario, setScenario] = React.useState('bad'); // bad | clean — demo toggle
  const res = scenario === 'bad' ? D.result : D.resultClean;
  const names = {
    me: 'Chevaliers du Royaume', foe: scenario === 'bad' ? 'Gobelins de la nuit' : 'Chars à sangliers',
    meShort: 'Chevaliers', foeShort: scenario === 'bad' ? 'Gobelins' : 'Chars',
  };
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  return (
    <React.Fragment>
      <ScreenHeader eyebrow="Résultat probabiliste" title="Pronostic" right={
        <span style={{ font: '400 var(--fs-xs)/1.3 var(--font-mono)', color: 'var(--text-tertiary)', textAlign: 'right' }}>Monte&nbsp;Carlo<br/>10&nbsp;000&nbsp;tirages</span>
      } />
      <div style={{ flex: 'none', padding: '0 var(--screen-pad) 10px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Segmented value={view} onChange={setView} size="sm"
          options={[{value:'verdict',label:'Verdict'},{value:'cadran',label:'Cadran'},{value:'duel',label:'Duel'}]} />
        <Segmented value={scenario} onChange={setScenario} size="sm"
          options={[{value:'bad',label:'vs Gobelins (inébranl.)'},{value:'clean',label:'vs Chars'}]} />
      </div>
      <Body>
        {view === 'verdict' && <VariantVerdict res={res} names={names} />}
        {view === 'cadran' && <VariantCadran res={res} names={names} />}
        {view === 'duel' && <VariantDuel res={res} names={names} />}
        <div style={{ height: 4 }} />
      </Body>
      <div style={{ flex: 'none', padding: '12px var(--screen-pad) 16px', borderTop: '1px solid var(--border-default)', background: 'rgba(12,15,20,0.9)', backdropFilter: 'blur(12px)', display: 'flex', gap: 10 }}>
        <Button variant="secondary" size="lg" icon={<i data-lucide="rotate-ccw" style={{ width: 20, height: 20 }} />}>Ajuster</Button>
        <Button variant="primary" size="lg" block onClick={onResolve}
          icon={<i data-lucide="list-checks" style={{ width: 20, height: 20 }} />}>Résoudre le combat</Button>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { ResultProbabilistic });
