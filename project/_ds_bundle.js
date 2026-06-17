/* @ds-bundle: {"format":3,"namespace":"AugurOldWorldCompanionDesignSystem_b6c10f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Segmented","sourcePath":"components/core/Segmented.jsx"},{"name":"StatPill","sourcePath":"components/core/StatPill.jsx"},{"name":"Stepper","sourcePath":"components/core/Stepper.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"OUTCOMES","sourcePath":"components/data/OutcomeBar.jsx"},{"name":"OutcomeBar","sourcePath":"components/data/OutcomeBar.jsx"},{"name":"OutcomeLegend","sourcePath":"components/data/OutcomeLegend.jsx"},{"name":"StatusDot","sourcePath":"components/data/StatusDot.jsx"},{"name":"UnitStatCard","sourcePath":"components/data/UnitStatCard.jsx"},{"name":"VPMeter","sourcePath":"components/data/VPMeter.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5b85d432a813","components/core/Button.jsx":"00bed1ee1609","components/core/Card.jsx":"8d2e03111edb","components/core/IconButton.jsx":"52a8e54ea009","components/core/Segmented.jsx":"8efb628ffb72","components/core/StatPill.jsx":"982c57437bec","components/core/Stepper.jsx":"744696e96641","components/core/Switch.jsx":"4a5c6a5bfbd0","components/data/OutcomeBar.jsx":"3051d10f7988","components/data/OutcomeLegend.jsx":"b740bb9ba7aa","components/data/StatusDot.jsx":"0058a9f40680","components/data/UnitStatCard.jsx":"a00e6d19adc4","components/data/VPMeter.jsx":"9eac1330ab67","ui_kits/augur/CombatAssistant.jsx":"a311b128c5f0","ui_kits/augur/CombatSelect.jsx":"a82a3781fb00","ui_kits/augur/GameTracker.jsx":"011dee904198","ui_kits/augur/PhoneFrame.jsx":"d0571ee837e5","ui_kits/augur/ResultProbabilistic.jsx":"47fea342b96f","ui_kits/augur/data.js":"e7da0e83d512"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AugurOldWorldCompanionDesignSystem_b6c10f = window.AugurOldWorldCompanionDesignSystem_b6c10f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/** Small status / category label. Tone maps to the system palette. */
function Badge({
  children,
  tone = 'neutral',
  // 'neutral' | 'signal' | 'win' | 'caution' | 'flee'
  solid = false,
  icon = null,
  style = {}
}) {
  const tones = {
    neutral: {
      fg: 'var(--text-secondary)',
      soft: 'var(--surface-3)',
      solid: 'var(--slate-600)'
    },
    signal: {
      fg: 'var(--signal-300)',
      soft: 'var(--signal-soft)',
      solid: 'var(--signal-500)'
    },
    win: {
      fg: 'var(--out-win)',
      soft: 'var(--out-win-soft)',
      solid: 'var(--out-win)'
    },
    caution: {
      fg: 'var(--caution)',
      soft: 'var(--out-give-soft)',
      solid: 'var(--caution)'
    },
    flee: {
      fg: 'var(--out-flee)',
      soft: 'var(--out-flee-soft)',
      solid: 'var(--out-flee)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-1)',
      height: '22px',
      padding: '0 var(--sp-2)',
      borderRadius: 'var(--r-sm)',
      background: solid ? t.solid : t.soft,
      color: solid ? 'var(--text-on-signal)' : t.fg,
      border: solid ? '1px solid transparent' : `1px solid ${t.fg}33`,
      font: 'var(--fw-semibold) var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Augur primary action button. Sized for table-side, one-handed use —
 * never below the 44px touch minimum.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost' | 'danger'
  size = 'md',
  // 'md' | 'lg'
  icon = null,
  // optional leading node (e.g. an <svg>)
  block = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const sizes = {
    md: {
      height: 'var(--touch-comfy)',
      font: 'var(--fs-body)',
      pad: '0 var(--sp-5)'
    },
    lg: {
      height: 'var(--touch-large)',
      font: 'var(--fs-h3)',
      pad: '0 var(--sp-6)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--signal-500)',
      color: 'var(--text-on-signal)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--surface-3)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--out-flee-soft)',
      color: 'var(--out-flee)',
      border: '1px solid var(--out-flee)'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-2)',
      height: s.height,
      padding: s.pad,
      width: block ? '100%' : 'auto',
      font: `var(--fw-semibold) ${s.font}/1 var(--font-ui)`,
      letterSpacing: '0.01em',
      borderRadius: 'var(--r-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), background var(--dur-fast)',
      transform: pressed && !disabled ? 'scale(0.97)' : 'scale(1)',
      filter: pressed && !disabled ? 'brightness(0.92)' : 'none',
      opacity: disabled ? 0.4 : 1,
      ...v,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Base surface container. Elevation by lightening, hairline border, lg radius. */
function Card({
  children,
  elevation = 1,
  // 1 | 2 | 3 → surface step + shadow
  padding = 'var(--sp-4)',
  selected = false,
  glow = false,
  // signal glow for the live/selected element
  style = {},
  ...rest
}) {
  const surf = {
    1: 'var(--surface-1)',
    2: 'var(--surface-2)',
    3: 'var(--surface-3)'
  }[elevation] || 'var(--surface-1)';
  const shadow = {
    1: 'var(--shadow-1)',
    2: 'var(--shadow-2)',
    3: 'var(--shadow-3)'
  }[elevation] || 'var(--shadow-1)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: surf,
      borderRadius: 'var(--r-lg)',
      border: `1px solid ${selected ? 'var(--signal-500)' : 'var(--border-subtle)'}`,
      padding,
      boxShadow: glow ? 'var(--glow-signal)' : shadow,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Icon-only button (square touch target). Pass a Lucide <i> or <svg> as children. */
function IconButton({
  children,
  variant = 'secondary',
  // 'secondary' | 'ghost' | 'signal'
  size = 'md',
  // 'md' (44) | 'lg' (52)
  'aria-label': ariaLabel,
  disabled = false,
  style = {},
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const dim = size === 'lg' ? 'var(--touch-comfy)' : 'var(--touch-min)';
  const variants = {
    secondary: {
      background: 'var(--surface-3)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    signal: {
      background: 'var(--signal-500)',
      color: 'var(--text-on-signal)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      width: dim,
      height: dim,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--r-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast)',
      transform: pressed && !disabled ? 'scale(0.94)' : 'scale(1)',
      opacity: disabled ? 0.4 : 1,
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Segmented.jsx
try { (() => {
/** Segmented control — for 2–4 mutually-exclusive choices (e.g. result-screen variation, scenario). Keyboard-free. */
function Segmented({
  options = [],
  // [{ value, label }] or string[]
  value,
  onChange = () => {},
  size = 'md',
  // 'md' | 'sm'
  style = {}
}) {
  const items = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const h = size === 'sm' ? '36px' : 'var(--touch-min)';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: '2px',
      padding: '3px',
      background: 'var(--surface-3)',
      borderRadius: 'var(--r-md)',
      border: '1px solid var(--border-default)',
      ...style
    }
  }, items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange(it.value),
      style: {
        flex: 1,
        height: h,
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--sp-2)',
        border: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        borderRadius: 'var(--r-sm)',
        background: active ? 'var(--signal-500)' : 'transparent',
        color: active ? 'var(--text-on-signal)' : 'var(--text-secondary)',
        font: `var(--fw-semibold) ${size === 'sm' ? 'var(--fs-sm)' : 'var(--fs-body)'}/1 var(--font-ui)`,
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/core/StatPill.jsx
try { (() => {
/**
 * StatPill — a single profile stat as a compact key/value block, in mono.
 * Used to render unit profiles (CC, F, E, A, Svg, Cd) in a row.
 */
function StatPill({
  label,
  value,
  emphasis = false,
  // signal-tint the value (e.g. a buffed stat)
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2px',
      minWidth: '38px',
      padding: 'var(--sp-2) var(--sp-1)',
      background: 'var(--surface-3)',
      borderRadius: 'var(--r-sm)',
      border: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h3)/1 var(--font-mono)',
      color: emphasis ? 'var(--signal-400)' : 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value));
}
Object.assign(__ds_scope, { StatPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Stepper.jsx
try { (() => {
/**
 * Stepper — the primary numeric input at the table. Big −/+ targets so
 * the player never opens a keyboard. Used for attacks, ranks, static
 * resolution modifiers, etc.
 */
function Stepper({
  value,
  onChange = () => {},
  min = 0,
  max = 99,
  step = 1,
  label = null,
  signed = false,
  // show explicit +/- on the value (modifiers)
  size = 'md',
  // 'md' | 'lg'
  style = {}
}) {
  const h = size === 'lg' ? 'var(--touch-large)' : 'var(--touch-comfy)';
  const clamp = n => Math.max(min, Math.min(max, n));
  const display = signed && value > 0 ? `+${value}` : `${value}`;
  const btn = (dir, glyph) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": dir > 0 ? 'augmenter' : 'diminuer',
    onClick: () => onChange(clamp(value + dir * step)),
    disabled: dir > 0 ? value >= max : value <= min,
    style: {
      width: h,
      height: h,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-primary)',
      fontSize: '22px',
      fontFamily: 'var(--font-ui)',
      opacity: (dir > 0 ? value >= max : value <= min) ? 0.3 : 1,
      transition: 'background var(--dur-fast)',
      borderRadius: 'var(--r-md)'
    }
  }, glyph);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--fw-semibold) var(--fs-label)/1 var(--font-ui)`,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      marginBottom: 'var(--sp-2)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'var(--surface-3)',
      borderRadius: 'var(--r-md)',
      border: '1px solid var(--border-default)'
    }
  }, btn(-1, '−'), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      minWidth: '40px',
      font: `var(--fw-semibold) var(--fs-h3)/1 var(--font-mono)`,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, display), btn(1, '+')));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/** Toggle switch — for boolean game flags like Inébranlable, étendard, charge. */
function Switch({
  checked = false,
  onChange = () => {},
  label = null,
  disabled = false,
  style = {}
}) {
  const track = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange(!checked),
    style: {
      width: '52px',
      height: '30px',
      flex: 'none',
      borderRadius: 'var(--r-pill)',
      background: checked ? 'var(--signal-500)' : 'var(--surface-3)',
      border: `1px solid ${checked ? 'var(--signal-500)' : 'var(--border-strong)'}`,
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-base) var(--ease-out)',
      opacity: disabled ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '3px',
      left: checked ? '24px' : '3px',
      width: '24px',
      height: '24px',
      borderRadius: 'var(--r-pill)',
      background: checked ? 'var(--text-on-signal)' : 'var(--slate-300)',
      transition: 'left var(--dur-base) var(--ease-out)',
      boxShadow: 'var(--shadow-1)'
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("span", {
    style: style
  }, track);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      minHeight: 'var(--touch-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-body)/1.2 var(--font-ui)',
      color: 'var(--text-primary)'
    }
  }, label), track);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/data/OutcomeBar.jsx
try { (() => {
/**
 * OutcomeBar — the stacked probability bar for the 5 Old World engagement
 * issues. Reads at a glance; the FUIR (catastrophe) segment is emphasised
 * and segments below a threshold collapse their inline label.
 */

const OUTCOMES = [{
  key: 'win',
  label: "L'emporter",
  color: 'var(--out-win)'
}, {
  key: 'draw',
  label: 'Égalité',
  color: 'var(--out-draw)'
}, {
  key: 'give',
  label: 'Céder du terrain',
  color: 'var(--out-give)'
}, {
  key: 'fallback',
  label: 'Reculer en bon ordre',
  color: 'var(--out-fallback)'
}, {
  key: 'flee',
  label: 'FUIR',
  color: 'var(--out-flee)'
}];
function OutcomeBar({
  dist,
  // { win, draw, give, fallback, flee } — fractions 0..1 (or %)
  height = 30,
  showInline = true,
  // show % inside large-enough segments
  emphasizeFlee = true,
  style = {}
}) {
  const norm = (() => {
    const total = OUTCOMES.reduce((s, o) => s + (dist[o.key] || 0), 0) || 1;
    return OUTCOMES.map(o => ({
      ...o,
      frac: (dist[o.key] || 0) / total
    }));
  })();
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: `${height}px`,
      width: '100%',
      borderRadius: 'var(--r-sm)',
      overflow: 'hidden',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-3)'
    }
  }, norm.map(o => {
    const pct = Math.round(o.frac * 100);
    const isFlee = o.key === 'flee';
    if (o.frac <= 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: o.key,
      title: `${o.label} · ${pct} %`,
      style: {
        width: `${o.frac * 100}%`,
        background: o.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isFlee ? '#fff' : '#06090d',
        font: 'var(--fw-semibold) var(--fs-xs)/1 var(--font-mono)',
        boxShadow: isFlee && emphasizeFlee ? 'inset 0 0 0 2px var(--out-flee), 0 0 12px var(--out-flee-glow)' : 'none',
        position: 'relative',
        zIndex: isFlee ? 1 : 0,
        transition: 'width var(--dur-slow) var(--ease-out)',
        minWidth: 0,
        overflow: 'hidden'
      }
    }, showInline && o.frac > 0.12 ? `${pct}` : '');
  })));
}
Object.assign(__ds_scope, { OUTCOMES, OutcomeBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/OutcomeBar.jsx", error: String((e && e.message) || e) }); }

// components/data/OutcomeLegend.jsx
try { (() => {
/** Legend for the outcome spectrum. Optionally shows each outcome's %. */
function OutcomeLegend({
  dist = null,
  // optional { key: frac } to print percentages
  columns = 1,
  // 1 (stacked rows) | 2
  highlightFlee = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: columns === 2 ? '1fr 1fr' : '1fr',
      gap: 'var(--sp-1) var(--sp-4)',
      ...style
    }
  }, __ds_scope.OUTCOMES.map(o => {
    const pct = dist ? Math.round((dist[o.key] || 0) * 100) : null;
    const isFlee = o.key === 'flee';
    return /*#__PURE__*/React.createElement("div", {
      key: o.key,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-2)',
        minHeight: '26px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '10px',
        height: '10px',
        flex: 'none',
        borderRadius: '3px',
        background: o.color,
        boxShadow: isFlee && highlightFlee ? '0 0 8px var(--out-flee-glow)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        font: `${isFlee ? 'var(--fw-semibold)' : 'var(--fw-regular)'} var(--fs-sm)/1.2 var(--font-ui)`,
        color: isFlee && highlightFlee ? 'var(--out-flee)' : 'var(--text-secondary)'
      }
    }, o.label), pct !== null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-semibold) var(--fs-sm)/1 var(--font-mono)',
        color: isFlee && highlightFlee ? 'var(--out-flee)' : 'var(--text-primary)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, pct, " %"));
  }));
}
Object.assign(__ds_scope, { OutcomeLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/OutcomeLegend.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusDot.jsx
try { (() => {
const STATUS = {
  full: {
    color: 'var(--status-full)',
    label: 'Pleine force'
  },
  weak: {
    color: 'var(--status-weak)',
    label: 'Sous 25 % FU'
  },
  fleeing: {
    color: 'var(--status-fleeing)',
    label: 'En fuite'
  },
  destroyed: {
    color: 'var(--status-destroyed)',
    label: 'Détruite'
  }
};

/** Coloured status dot + word. Status is never communicated by glyph alone. */
function StatusDot({
  status = 'full',
  // 'full' | 'weak' | 'fleeing' | 'destroyed'
  showLabel = true,
  pulse = false,
  // gentle pulse for the live 'fleeing' alarm
  style = {}
}) {
  const s = STATUS[status] || STATUS.full;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      flex: 'none',
      borderRadius: 'var(--r-pill)',
      background: s.color,
      boxShadow: status === 'fleeing' ? '0 0 8px var(--out-flee-glow)' : 'none',
      animation: pulse && status === 'fleeing' ? 'augur-pulse 1.6s var(--ease-inout) infinite' : 'none'
    }
  }), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-sm)/1 var(--font-ui)',
      color: status === 'destroyed' ? 'var(--text-tertiary)' : 'var(--text-secondary)',
      textDecoration: status === 'destroyed' ? 'line-through' : 'none'
    }
  }, s.label), /*#__PURE__*/React.createElement("style", null, `@keyframes augur-pulse{0%,100%{opacity:1}50%{opacity:.45}}@media (prefers-reduced-motion: reduce){[style*="augur-pulse"]{animation:none!important}}`));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/data/UnitStatCard.jsx
try { (() => {
/**
 * UnitStatCard — a roster unit rendered as a profile card: name, points,
 * role badges (Général / GB / étendard), the stat line, and a Force d'Unité
 * bar with the 25 % threshold marked.
 */
function UnitStatCard({
  unit,
  // see UnitProfile shape in .d.ts
  side = 'friendly',
  // 'friendly' | 'enemy' — tints the accent rail
  selected = false,
  onClick = null,
  compact = false,
  style = {}
}) {
  const {
    name,
    points,
    profile = {},
    fu = {},
    status = 'full',
    isGeneral = false,
    isBSB = false,
    hasStandard = false
  } = unit || {};
  const accent = side === 'enemy' ? 'var(--out-flee)' : 'var(--signal-500)';
  const fuPct = fu.max ? Math.max(0, Math.min(1, fu.current / fu.max)) : 0;
  const below25 = fuPct > 0 && fuPct < 0.25;
  const stats = [['CC', profile.cc], ['F', profile.str], ['E', profile.tou], ['A', profile.att], ['Svg', profile.save], ['Cd', profile.cd]];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick || undefined,
    style: {
      position: 'relative',
      background: 'var(--surface-1)',
      borderRadius: 'var(--r-lg)',
      border: `1px solid ${selected ? accent : 'var(--border-subtle)'}`,
      padding: 'var(--sp-4)',
      paddingLeft: 'calc(var(--sp-4) + 3px)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: selected ? 'var(--glow-signal)' : 'var(--shadow-1)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '3px',
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--sp-2)',
      marginBottom: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) var(--fs-h3)/1.1 var(--font-display)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) var(--fs-xs)/1 var(--font-mono)',
      color: 'var(--text-tertiary)',
      marginTop: '3px'
    }
  }, points, " pts")), /*#__PURE__*/React.createElement(__ds_scope.StatusDot, {
    status: status,
    showLabel: !compact
  })), (isGeneral || isBSB || hasStandard) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-1)',
      flexWrap: 'wrap',
      marginBottom: 'var(--sp-3)'
    }
  }, isGeneral && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "signal"
  }, "G\xE9n\xE9ral"), isBSB && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "signal"
  }, "Grande banni\xE8re"), hasStandard && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral"
  }, "\xC9tendard")), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-1)',
      marginBottom: 'var(--sp-3)'
    }
  }, stats.map(([k, v]) => /*#__PURE__*/React.createElement(__ds_scope.StatPill, {
    key: k,
    label: k,
    value: v ?? '—',
    style: {
      flex: 1
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 'var(--sp-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Force d'unit\xE9"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-sm)/1 var(--font-mono)',
      color: below25 ? 'var(--status-weak)' : 'var(--text-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fu.current ?? '—', " / ", fu.max ?? '—')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '8px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--surface-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: `${fuPct * 100}%`,
      background: below25 ? 'var(--status-weak)' : 'var(--status-full)',
      borderRadius: 'var(--r-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '25%',
      top: '-2px',
      bottom: '-2px',
      width: '2px',
      background: 'var(--bg-app)',
      opacity: 0.9
    }
  }))));
}
Object.assign(__ds_scope, { UnitStatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/UnitStatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/VPMeter.jsx
try { (() => {
/**
 * VPMeter — the hero metric. Expected NET Victory-Point swing of an
 * engagement, signed and colour-coded, paired with a direction word so
 * colour is never the only signal.
 */
function VPMeter({
  value,
  // signed integer, net VP swing (in your favour = +)
  range = null,
  // optional [low, high] interval
  size = 'hero',
  // 'hero' | 'compact'
  style = {}
}) {
  const positive = value >= 0;
  const color = positive ? 'var(--positive)' : 'var(--danger)';
  const dir = positive ? 'en ta faveur' : 'en ta défaveur';
  const signed = `${positive ? '+' : '−'}${Math.abs(value)}`;
  const fs = size === 'hero' ? 'var(--fs-hero)' : 'var(--fs-display)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      marginBottom: 'var(--sp-1)'
    }
  }, "Gain net esp\xE9r\xE9 \xB7 PV"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-bold) ${fs}/var(--lh-tight) var(--font-display)`,
      letterSpacing: 'var(--ls-tight)',
      color,
      fontVariantNumeric: 'tabular-nums'
    }
  }, signed), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-2)',
      marginTop: 'var(--sp-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-sm)/1 var(--font-ui)',
      color
    }
  }, dir), range && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-xs)/1 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, "intervalle ", range[0] >= 0 ? '+' : '−', Math.abs(range[0]), " \u2026 ", range[1] >= 0 ? '+' : '−', Math.abs(range[1]))));
}
Object.assign(__ds_scope, { VPMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/VPMeter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/augur/CombatAssistant.jsx
try { (() => {
// Screen 3 — Assistant de phase de combat.
// Step-by-step through the 4 Old World sub-phases. Minimal input, big
// buttons; runs the break test on the unit's Cd and applies the result.

const PHASES = [{
  key: 'fight',
  n: 1,
  title: 'Choisir & Combattre',
  icon: 'swords',
  hint: 'Désigne les figurines au contact, applique les attaques dans l\u2019ordre d\u2019Initiative.'
}, {
  key: 'result',
  n: 2,
  title: 'Calculer le résultat',
  icon: 'calculator',
  hint: 'Blessures infligées + bonus statiques de chaque camp. La différence est l\u2019écart de résultat.'
}, {
  key: 'break',
  n: 3,
  title: 'Test de Break',
  icon: 'dices',
  hint: 'Le perdant teste sous son Commandement, modifié par l\u2019écart de résultat.'
}, {
  key: 'pursue',
  n: 4,
  title: 'Poursuite',
  icon: 'wind',
  hint: 'Si l\u2019unité fuit, le vainqueur poursuit. Une unité rattrapée est détruite.'
}];
function PhaseRail({
  active
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      padding: '0 var(--screen-pad)'
    }
  }, PHASES.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.key,
    style: {
      flex: 1,
      height: 4,
      borderRadius: 'var(--r-pill)',
      background: i <= active ? 'var(--signal-500)' : 'var(--surface-3)',
      boxShadow: i === active ? 'var(--glow-signal)' : 'none',
      transition: 'background var(--dur-base)'
    }
  })));
}
function ResultTally({
  me,
  setMe,
  foe,
  setFoe
}) {
  const {
    Stepper
  } = window.AugurNS;
  const diff = me - foe;
  const leader = diff === 0 ? null : diff > 0 ? 'me' : 'foe';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    label: "Ton r\xE9sultat",
    value: me,
    onChange: setMe,
    min: 0,
    max: 30,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Stepper, {
    label: "R\xE9sultat adverse",
    value: foe,
    onChange: setFoe,
    min: 0,
    max: 30,
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--sp-3)',
      background: 'var(--surface-2)',
      borderRadius: 'var(--r-md)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "\xC9cart de r\xE9sultat"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--fs-display)/1 var(--font-mono)',
      color: leader === 'me' ? 'var(--positive)' : leader === 'foe' ? 'var(--danger)' : 'var(--text-secondary)',
      marginTop: 4
    }
  }, diff > 0 ? '+' : '', diff), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--fs-sm)/1 var(--font-ui)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, leader === 'me' ? 'L\u2019adversaire doit tester' : leader === 'foe' ? 'Ton unité doit tester' : 'Égalité — pas de test')));
}
function BreakTest({
  cd,
  modifier,
  rolled,
  setRolled,
  unbreakable
}) {
  const {
    Button
  } = window.AugurNS;
  const target = Math.max(2, cd - modifier);
  const passed = rolled != null && (unbreakable || rolled <= target);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      textAlign: 'center',
      padding: 'var(--sp-3) 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Cd"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--fs-h1)/1 var(--font-mono)',
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, cd)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Malus"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--fs-h1)/1 var(--font-mono)',
      color: 'var(--danger)',
      marginTop: 4
    }
  }, "\u2212", modifier)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Cible"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--fs-h1)/1 var(--font-mono)',
      color: 'var(--signal-400)',
      marginTop: 4
    }
  }, unbreakable ? '—' : '≤' + target))), unbreakable ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--sp-4)',
      background: 'var(--out-give-soft)',
      border: '1px solid var(--caution)',
      borderRadius: 'var(--r-md)',
      color: 'var(--caution)',
      font: '600 var(--fs-body)/1.3 var(--font-ui)'
    }
  }, "Unit\xE9 in\xE9branlable \u2014 r\xE9ussite automatique, elle tient.") : rolled == null ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: () => setRolled(Math.floor(Math.random() * 11) + 2),
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "dices",
      style: {
        width: 22,
        height: 22
      }
    })
  }, "Lancer 2D6") : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--sp-4)',
      borderRadius: 'var(--r-md)',
      background: passed ? 'var(--out-win-soft)' : 'var(--out-flee-soft)',
      border: `1px solid ${passed ? 'var(--out-win)' : 'var(--out-flee)'}`,
      boxShadow: passed ? 'none' : 'var(--glow-flee)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 var(--fs-hero)/1 var(--font-mono)',
      color: passed ? 'var(--out-win)' : 'var(--out-flee)'
    }
  }, rolled), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-h3)/1 var(--font-display)',
      color: passed ? 'var(--out-win)' : 'var(--out-flee)',
      marginTop: 6
    }
  }, passed ? 'Test réussi — l\u2019unité tient' : 'Test raté — L\u2019UNITÉ FUIT')));
}
function CombatAssistant({
  onDone
}) {
  const {
    Button
  } = window.AugurNS;
  const [step, setStep] = React.useState(0);
  const [me, setMe] = React.useState(7);
  const [foe, setFoe] = React.useState(3);
  const [rolled, setRolled] = React.useState(null);
  const phase = PHASES[step];
  const modifier = Math.max(0, me - foe);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const next = () => {
    if (step < PHASES.length - 1) {
      setStep(step + 1);
    } else {
      onDone && onDone();
    }
  };
  const back = () => step > 0 && setStep(step - 1);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: `Phase de combat · ${phase.n} / 4`,
    title: "Assistant"
  }), /*#__PURE__*/React.createElement(PhaseRail, {
    active: step
  }), /*#__PURE__*/React.createElement(Body, {
    style: {
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--r-md)',
      background: 'var(--signal-soft)',
      border: '1px solid var(--signal-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": phase.icon,
    style: {
      width: 22,
      height: 22,
      color: 'var(--signal-400)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-h2)/1.1 var(--font-display)',
      color: 'var(--text-primary)'
    }
  }, phase.title))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 6px',
      font: '400 var(--fs-sm)/1.5 var(--font-ui)',
      color: 'var(--text-secondary)'
    }
  }, phase.hint), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-1)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, phase.key === 'fight' && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--fs-sm)/1.6 var(--font-ui)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: 'var(--out-win)'
    }
  }), " Initiative la plus haute frappe en premier"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: 'var(--out-win)'
    }
  }), " Touches \u2192 blessures \u2192 sauvegardes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: 'var(--out-win)'
    }
  }), " Retire les pertes au contact")), phase.key === 'result' && /*#__PURE__*/React.createElement(ResultTally, {
    me: me,
    setMe: setMe,
    foe: foe,
    setFoe: setFoe
  }), phase.key === 'break' && /*#__PURE__*/React.createElement(BreakTest, {
    cd: 5,
    modifier: modifier,
    rolled: rolled,
    setRolled: setRolled,
    unbreakable: false
  }), phase.key === 'pursue' && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--fs-sm)/1.6 var(--font-ui)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Distance de fuite"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-body)/1 var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, "2D6 = 9\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Poursuite"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-body)/1 var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, "2D6 = 10\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0 2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--out-flee)',
      fontWeight: 600
    }
  }, "Unit\xE9 rattrap\xE9e"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-sm)/1 var(--font-ui)',
      color: 'var(--out-flee)'
    }
  }, "d\xE9truite \xB7 +320 PV"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '12px var(--screen-pad) 16px',
      borderTop: '1px solid var(--border-default)',
      background: 'rgba(12,15,20,0.9)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      gap: 10
    }
  }, step > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: back,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-left",
      style: {
        width: 20,
        height: 20
      }
    })
  }, "Retour"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: next,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": step === PHASES.length - 1 ? 'check' : 'chevron-right',
      style: {
        width: 20,
        height: 20
      }
    })
  }, step === PHASES.length - 1 ? 'Appliquer & terminer' : 'Étape suivante')));
}
Object.assign(window, {
  CombatAssistant
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/augur/CombatAssistant.jsx", error: String((e && e.message) || e) }); }

// ui_kits/augur/CombatSelect.jsx
try { (() => {
// Screen 1 — Sélection du combat.
// Pick two engaged units; profiles auto-fill; tweak attacks + static
// resolution modifiers + Inébranlable, then run the simulation.

function UnitPicker({
  side,
  units,
  selectedId,
  onSelect
}) {
  const {
    Card
  } = window.AugurNS;
  const accent = side === 'enemy' ? 'var(--out-flee)' : 'var(--signal-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 4,
      margin: '0 calc(-1 * var(--screen-pad))',
      padding: '0 var(--screen-pad) 4px'
    }
  }, units.filter(u => u.status !== 'destroyed').map(u => {
    const on = u.id === selectedId;
    return /*#__PURE__*/React.createElement("button", {
      key: u.id,
      type: "button",
      onClick: () => onSelect(u.id),
      style: {
        flex: 'none',
        width: 150,
        textAlign: 'left',
        cursor: 'pointer',
        background: on ? 'var(--signal-soft)' : 'var(--surface-2)',
        border: `1px solid ${on ? accent : 'var(--border-default)'}`,
        borderRadius: 'var(--r-md)',
        padding: 'var(--sp-3)',
        boxShadow: on ? 'var(--glow-signal)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '600 var(--fs-sm)/1.2 var(--font-display)',
        color: 'var(--text-primary)',
        marginBottom: 4,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, u.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 var(--fs-xs)/1 var(--font-mono)',
        color: 'var(--text-tertiary)'
      }
    }, u.points, " pts \xB7 FU ", u.fu.current));
  }));
}
function MiniProfile({
  unit,
  side
}) {
  const {
    StatPill
  } = window.AugurNS;
  if (!unit) return null;
  const stats = [['CC', unit.profile.cc], ['F', unit.profile.str], ['E', unit.profile.tou], ['A', unit.profile.att], ['Svg', unit.profile.save], ['Cd', unit.profile.cd]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      marginTop: 8
    }
  }, stats.map(([k, v]) => /*#__PURE__*/React.createElement(StatPill, {
    key: k,
    label: k,
    value: v,
    style: {
      flex: 1,
      minWidth: 0
    }
  })));
}
function CombatSelect({
  onSimulate
}) {
  const D = window.AUGUR_DATA;
  const {
    Card,
    Stepper,
    Switch,
    Button,
    Badge
  } = window.AugurNS;
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
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "S\xE9lection du combat",
    title: "Engagement",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 var(--fs-h2)/1 var(--font-mono)',
        color: 'var(--signal-400)'
      }
    }, "+", staticMod)
  }), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Ton unit\xE9"), /*#__PURE__*/React.createElement(UnitPicker, {
    side: "friendly",
    units: D.myUnits,
    selectedId: mine,
    onSelect: setMine
  }), /*#__PURE__*/React.createElement(Card, {
    elevation: 1,
    style: {
      padding: 'var(--sp-3) var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-h3)/1 var(--font-display)',
      color: 'var(--text-primary)'
    }
  }, myUnit.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, myUnit.isGeneral && /*#__PURE__*/React.createElement(Badge, {
    tone: "signal"
  }, "G\xE9n\xE9ral"), myUnit.hasStandard && /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "\xC9tendard"))), /*#__PURE__*/React.createElement(MiniProfile, {
    unit: myUnit,
    side: "friendly"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      margin: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "swords",
    style: {
      width: 18,
      height: 18,
      color: 'var(--text-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-default)'
    }
  })), /*#__PURE__*/React.createElement(SectionLabel, null, "Unit\xE9 adverse"), /*#__PURE__*/React.createElement(UnitPicker, {
    side: "enemy",
    units: D.foeUnits,
    selectedId: foe,
    onSelect: setFoe
  }), /*#__PURE__*/React.createElement(Card, {
    elevation: 1,
    style: {
      padding: 'var(--sp-3) var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-h3)/1 var(--font-display)',
      color: 'var(--text-primary)'
    }
  }, foeUnit.name), unbreakable && /*#__PURE__*/React.createElement(Badge, {
    tone: "caution"
  }, "In\xE9branlable")), /*#__PURE__*/React.createElement(MiniProfile, {
    unit: foeUnit,
    side: "enemy"
  })), /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginTop: 10
    }
  }, "Ajustements \xE0 la vol\xE9e"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    label: "Attaques",
    value: attacks,
    onChange: setAttacks,
    min: 1,
    max: 60,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Stepper, {
    label: "Rangs",
    value: ranks,
    onChange: setRanks,
    min: 1,
    max: 10,
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(Card, {
    elevation: 1,
    style: {
      padding: '4px var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Charge (+1)",
    checked: charge,
    onChange: setCharge
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Banni\xE8re (+1)",
    checked: banner,
    onChange: setBanner
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Flanc / arri\xE8re (+1)",
    checked: flank,
    onChange: setFlank
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Adversaire in\xE9branlable",
    checked: unbreakable,
    onChange: setUnbreakable
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '12px var(--screen-pad) 16px',
      borderTop: '1px solid var(--border-default)',
      background: 'rgba(12,15,20,0.9)',
      backdropFilter: 'blur(12px)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onSimulate,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "dices",
      style: {
        width: 22,
        height: 22
      }
    })
  }, "Lancer la simulation")));
}
Object.assign(window, {
  CombatSelect
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/augur/CombatSelect.jsx", error: String((e && e.message) || e) }); }

// ui_kits/augur/GameTracker.jsx
try { (() => {
// Screen 4 — Tracker d'état de partie & Points de Victoire.
// Both armies at a glance, per-unit status, live VP counters from losses,
// scenario objectives. "Who's leading and by how much" instantly.

function VPScoreboard({
  players
}) {
  const lead = players.me.vp - players.foe.vp;
  const leading = lead >= 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-2)',
      borderRadius: 'var(--r-lg)',
      border: '1px solid var(--border-subtle)',
      padding: 'var(--sp-4)',
      boxShadow: 'var(--shadow-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch'
    }
  }, [['me', players.me, 'var(--signal-400)'], ['foe', players.foe, 'var(--out-flee)']].map(([k, p, col], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, i === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--border-default)',
      margin: '0 var(--sp-3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: i === 0 ? 'left' : 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 44px/1 var(--font-display)',
      color: col,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.vp), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--fs-xs)/1 var(--font-ui)',
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, p.army))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-3)',
      padding: 'var(--sp-2)',
      borderRadius: 'var(--r-md)',
      background: leading ? 'var(--out-win-soft)' : 'var(--out-flee-soft)',
      textAlign: 'center',
      font: '600 var(--fs-sm)/1 var(--font-ui)',
      color: leading ? 'var(--out-win)' : 'var(--out-flee)'
    }
  }, leading ? `Tu mènes de ${lead} PV` : `Tu es mené de ${Math.abs(lead)} PV`));
}
function UnitRow({
  unit
}) {
  const {
    StatusDot,
    Badge
  } = window.AugurNS;
  const pct = unit.fu.max ? unit.fu.current / unit.fu.max : 0;
  const dead = unit.status === 'destroyed';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 0',
      opacity: dead ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-body)/1.1 var(--font-ui)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textDecoration: dead ? 'line-through' : 'none'
    }
  }, unit.name), unit.isGeneral && /*#__PURE__*/React.createElement(Badge, {
    tone: "signal"
  }, "G\xE9n."), unit.isBSB && /*#__PURE__*/React.createElement(Badge, {
    tone: "signal"
  }, "GB")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      height: 5,
      borderRadius: 'var(--r-pill)',
      background: 'var(--surface-3)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: pct * 100 + '%',
      background: unit.status === 'weak' ? 'var(--status-weak)' : unit.status === 'fleeing' ? 'var(--status-fleeing)' : dead ? 'var(--status-destroyed)' : 'var(--status-full)',
      borderRadius: 'var(--r-pill)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '25%',
      top: -1,
      bottom: -1,
      width: 2,
      background: 'var(--bg-app)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 96,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(StatusDot, {
    status: unit.status,
    showLabel: true,
    style: {
      justifyContent: 'flex-end'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--fs-xs)/1 var(--font-mono)',
      color: 'var(--text-tertiary)',
      marginTop: 3
    }
  }, unit.points, " pts")));
}
function ArmyPanel({
  title,
  units,
  side
}) {
  const lost = units.filter(u => u.status === 'destroyed').reduce((s, u) => s + u.points, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      margin: '4px 0 2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: side === 'enemy' ? 'var(--out-flee)' : 'var(--signal-400)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 var(--fs-xs)/1 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, "perdu ", lost, " pts")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-1)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-lg)',
      padding: '0 var(--sp-4)'
    }
  }, units.map((u, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: u.id
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(UnitRow, {
    unit: u
  })))));
}
function Objectives({
  items
}) {
  const {
    Segmented
  } = window.AugurNS;
  const [state, setState] = React.useState(() => Object.fromEntries(items.map(o => [o.id, o.holder])));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      margin: '4px 0 6px'
    }
  }, "Objectifs du sc\xE9nario"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-1)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-3) var(--sp-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '500 var(--fs-sm)/1.2 var(--font-ui)',
      color: 'var(--text-secondary)'
    }
  }, o.name), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: state[o.id],
    onChange: v => setState(s => ({
      ...s,
      [o.id]: v
    })),
    style: {
      width: 150
    },
    options: [{
      value: 'me',
      label: 'Toi'
    }, {
      value: 'none',
      label: '—'
    }, {
      value: 'foe',
      label: 'Adv.'
    }]
  })))));
}
function GameTracker() {
  const D = window.AUGUR_DATA;
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "Tour 4 \xB7 Phase de m\xEAl\xE9e",
    title: "Partie",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 var(--fs-xs)/1.3 var(--font-mono)',
        color: 'var(--text-tertiary)',
        textAlign: 'right'
      }
    }, "Bataille rang\xE9e", /*#__PURE__*/React.createElement("br", null), "2000 pts")
  }), /*#__PURE__*/React.createElement(Body, null, /*#__PURE__*/React.createElement(VPScoreboard, {
    players: D.players
  }), /*#__PURE__*/React.createElement(Objectives, {
    items: D.objectives
  }), /*#__PURE__*/React.createElement(ArmyPanel, {
    title: "Ton arm\xE9e",
    units: D.myUnits,
    side: "friendly"
  }), /*#__PURE__*/React.createElement(ArmyPanel, {
    title: "Arm\xE9e adverse",
    units: D.foeUnits,
    side: "enemy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4
    }
  })));
}
Object.assign(window, {
  GameTracker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/augur/GameTracker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/augur/PhoneFrame.jsx
try { (() => {
// Phone frame + status bar + bottom tab bar for the Augur kit.
// Plain dark device shell — no brand IP.

function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 22px',
      font: '600 14px/1 var(--font-ui)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, "21:47"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "signal",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "battery-medium",
    style: {
      width: 20,
      height: 20
    }
  })));
}
const TABS = [{
  key: 'select',
  label: 'Combat',
  icon: 'swords'
}, {
  key: 'result',
  label: 'Pronostic',
  icon: 'dices'
}, {
  key: 'assistant',
  label: 'Assistant',
  icon: 'list-checks'
}, {
  key: 'tracker',
  label: 'Partie',
  icon: 'map'
}];
function TabBar({
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      padding: '8px 8px calc(8px + var(--safe-bottom))',
      background: 'rgba(8,10,14,0.82)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--border-default)'
    }
  }, TABS.map(t => {
    const on = t.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      type: "button",
      onClick: () => onChange(t.key),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '6px 0',
        color: on ? 'var(--signal-400)' : 'var(--text-tertiary)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": t.icon,
      style: {
        width: 22,
        height: 22
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${on ? 600 : 500} 10px/1 var(--font-ui)`,
        letterSpacing: '0.02em'
      }
    }, t.label));
  }));
}
function PhoneFrame({
  active,
  onTab,
  children
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--screen-w)',
      height: 844,
      position: 'relative',
      background: 'var(--bg-app)',
      borderRadius: 44,
      overflow: 'hidden',
      border: '10px solid #000',
      boxShadow: 'var(--shadow-3), 0 0 0 1px #2a2f38',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, children), onTab && /*#__PURE__*/React.createElement(TabBar, {
    active: active,
    onChange: onTab
  }));
}
Object.assign(window, {
  PhoneFrame,
  StatusBar,
  TabBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/augur/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/augur/ResultProbabilistic.jsx
try { (() => {
// Screen 2 — Écran résultat probabiliste (HERO SCREEN).
// Output of the Monte-Carlo engine. Hero metric = expected NET VP swing.
// Three presentation variations (Segmented switch): Verdict / Cadran / Duel.
//
// VP-HIERARCHY CHOICES (documented in readme.md):
//  - net VP swing is the single loudest element (fs-hero, signed, colour-coded)
//  - FUIR is the only data point allowed a glow (catastrophe)
//  - a "mauvais échange" banner overrides when win-chance is high but VP gain low

function BadExchangeBanner() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      background: 'var(--out-give-soft)',
      border: '1px solid var(--caution)',
      borderRadius: 'var(--r-md)',
      padding: 'var(--sp-3) var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "triangle-alert",
    style: {
      width: 20,
      height: 20,
      color: 'var(--caution)',
      flex: 'none',
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-sm)/1.2 var(--font-ui)',
      color: 'var(--caution)'
    }
  }, "Mauvais \xE9change probable"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--fs-xs)/1.4 var(--font-ui)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, "Tu gagnes le combat dans la plupart des cas, mais l'unit\xE9 in\xE9branlable ne se brise pas : peu de PV \xE0 la cl\xE9.")));
}
function UnitOutcomeRow({
  label,
  dist,
  side
}) {
  const {
    OutcomeBar
  } = window.AugurNS;
  const fleePct = Math.round((dist.flee || 0) * 100);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-sm)/1 var(--font-ui)',
      color: 'var(--text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: 170
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-xs)/1 var(--font-mono)',
      color: fleePct >= 30 ? 'var(--out-flee)' : 'var(--text-tertiary)'
    }
  }, "FUIR ", fleePct, " %")), /*#__PURE__*/React.createElement(OutcomeBar, {
    dist: dist,
    height: 26
  }));
}

/* ── Variation A — VERDICT ───────────────────────────────────────── */
function VariantVerdict({
  res,
  names
}) {
  const {
    Card,
    VPMeter,
    OutcomeLegend
  } = window.AugurNS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    elevation: 2,
    style: {
      padding: 'var(--sp-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(VPMeter, {
    value: res.expectedVP,
    range: res.range
  }), res.badExchange && /*#__PURE__*/React.createElement(BadExchangeBanner, null)), /*#__PURE__*/React.createElement(Card, {
    elevation: 1,
    style: {
      padding: 'var(--sp-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(UnitOutcomeRow, {
    label: names.me,
    dist: res.me,
    side: "friendly"
  }), /*#__PURE__*/React.createElement(UnitOutcomeRow, {
    label: names.foe,
    dist: res.foe,
    side: "enemy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(OutcomeLegend, {
    columns: 2
  })));
}

/* ── Variation B — CADRAN (diverging gauge + flee dials) ─────────── */
function DivergingVP({
  value,
  range
}) {
  const span = 220; // px half-width domain ~ ±220 VP
  const clamp = v => Math.max(-span, Math.min(span, v));
  const pct = v => 50 + clamp(v) / span * 50;
  const positive = value >= 0;
  const color = positive ? 'var(--positive)' : 'var(--danger)';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      marginBottom: 8
    }
  }, "Gain net esp\xE9r\xE9 \xB7 PV"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 var(--fs-hero)/1 var(--font-display)',
      color,
      letterSpacing: 'var(--ls-tight)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, positive ? '+' : '−', Math.abs(value)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-sm)/1 var(--font-ui)',
      color
    }
  }, positive ? 'en ta faveur' : 'en ta défaveur')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 14,
      borderRadius: 'var(--r-pill)',
      background: 'linear-gradient(90deg, var(--out-flee-soft), var(--surface-3) 50%, var(--out-win-soft))',
      border: '1px solid var(--border-default)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: `${pct(range[0])}%`,
      width: `${pct(range[1]) - pct(range[0])}%`,
      background: positive ? 'var(--out-win-soft)' : 'var(--out-flee-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: -3,
      bottom: -3,
      width: 2,
      background: 'var(--text-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct(value)}%`,
      top: '50%',
      width: 14,
      height: 14,
      transform: 'translate(-50%,-50%)',
      borderRadius: '50%',
      background: color,
      boxShadow: '0 0 10px ' + (positive ? 'rgba(79,176,122,.5)' : 'var(--out-flee-glow)'),
      border: '2px solid var(--bg-app)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '400 var(--fs-xs)/1 var(--font-mono)',
      color: 'var(--text-tertiary)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "d\xE9faite"), /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", null, "victoire")));
}
function FleeDial({
  label,
  value,
  side
}) {
  const pct = Math.round(value * 100);
  const r = 26,
    c = 2 * Math.PI * r;
  const danger = pct >= 30;
  const col = danger ? 'var(--out-flee)' : 'var(--out-draw)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 64,
      height: 64
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: r,
    fill: "none",
    stroke: "var(--surface-3)",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: r,
    fill: "none",
    stroke: col,
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - value),
    style: {
      filter: danger ? 'drop-shadow(0 0 5px var(--out-flee-glow))' : 'none',
      transition: 'stroke-dashoffset var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 var(--fs-h3)/1 var(--font-mono)',
      color: col
    }
  }, pct)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      textAlign: 'center'
    }
  }, "FUIR \xB7 ", label));
}
function VariantCadran({
  res,
  names
}) {
  const {
    Card,
    OutcomeLegend
  } = window.AugurNS;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    elevation: 2,
    style: {
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(DivergingVP, {
    value: res.expectedVP,
    range: res.range
  })), res.badExchange && /*#__PURE__*/React.createElement(BadExchangeBanner, null), /*#__PURE__*/React.createElement(Card, {
    elevation: 1,
    style: {
      padding: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      marginBottom: 12
    }
  }, "Risque de fuite"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FleeDial, {
    label: names.meShort,
    value: res.me.flee,
    side: "friendly"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(FleeDial, {
    label: names.foeShort,
    value: res.foe.flee,
    side: "enemy"
  }))), /*#__PURE__*/React.createElement(Card, {
    elevation: 1,
    style: {
      padding: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(UnitOutcomeRow, {
    label: names.me,
    dist: res.me,
    side: "friendly"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(UnitOutcomeRow, {
    label: names.foe,
    dist: res.foe,
    side: "enemy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement(OutcomeLegend, {
    columns: 2
  })));
}

/* ── Variation C — DUEL (side-by-side columns + tug-of-war) ──────── */
function OutcomeColumn({
  name,
  dist,
  side
}) {
  const {
    OUTCOMES
  } = window.AugurNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-sm)/1.2 var(--font-display)',
      color: side === 'enemy' ? 'var(--out-flee)' : 'var(--signal-400)',
      marginBottom: 8,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, OUTCOMES.map(o => {
    const pct = Math.round((dist[o.key] || 0) * 100);
    const flee = o.key === 'flee';
    return /*#__PURE__*/React.createElement("div", {
      key: o.key,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: o.color,
        flex: 'none',
        boxShadow: flee && pct > 0 ? '0 0 6px var(--out-flee-glow)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 6,
        borderRadius: 3,
        background: 'var(--surface-3)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        height: '100%',
        width: pct + '%',
        background: o.color,
        borderRadius: 3
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        textAlign: 'right',
        font: `${flee ? 600 : 400} var(--fs-xs)/1 var(--font-mono)`,
        color: flee && pct >= 20 ? 'var(--out-flee)' : 'var(--text-tertiary)'
      }
    }, pct));
  })));
}
function VariantDuel({
  res,
  names
}) {
  const {
    Card
  } = window.AugurNS;
  const positive = res.expectedVP >= 0;
  // tug-of-war: position of marker based on VP swing
  const tug = 50 + Math.max(-46, Math.min(46, res.expectedVP / 5));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    elevation: 2,
    style: {
      padding: 'var(--sp-4) var(--sp-5) var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--fs-label)/1 var(--font-ui)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      marginBottom: 10,
      textAlign: 'center'
    }
  }, "Gain net esp\xE9r\xE9 \xB7 PV"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 var(--fs-hero)/1 var(--font-display)',
      color: positive ? 'var(--positive)' : 'var(--danger)',
      letterSpacing: 'var(--ls-tight)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, positive ? '+' : '−', Math.abs(res.expectedVP))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 8,
      borderRadius: 'var(--r-pill)',
      background: 'var(--surface-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: tug + '%',
      background: 'var(--signal-600)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: 100 - tug + '%',
      background: 'var(--out-flee)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      font: '600 var(--fs-xs)/1 var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--signal-400)'
    }
  }, names.meShort), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--out-flee)'
    }
  }, names.foeShort))), res.badExchange && /*#__PURE__*/React.createElement(BadExchangeBanner, null), /*#__PURE__*/React.createElement(Card, {
    elevation: 1,
    style: {
      padding: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(OutcomeColumn, {
    name: names.me,
    dist: res.me,
    side: "friendly"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(OutcomeColumn, {
    name: names.foe,
    dist: res.foe,
    side: "enemy"
  }))));
}
function ResultProbabilistic({
  onResolve
}) {
  const D = window.AUGUR_DATA;
  const {
    Segmented,
    Button
  } = window.AugurNS;
  const [view, setView] = React.useState('verdict');
  const [scenario, setScenario] = React.useState('bad'); // bad | clean — demo toggle
  const res = scenario === 'bad' ? D.result : D.resultClean;
  const names = {
    me: 'Chevaliers du Royaume',
    foe: scenario === 'bad' ? 'Gobelins de la nuit' : 'Chars à sangliers',
    meShort: 'Chevaliers',
    foeShort: scenario === 'bad' ? 'Gobelins' : 'Chars'
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "R\xE9sultat probabiliste",
    title: "Pronostic",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 var(--fs-xs)/1.3 var(--font-mono)',
        color: 'var(--text-tertiary)',
        textAlign: 'right'
      }
    }, "Monte\xA0Carlo", /*#__PURE__*/React.createElement("br", null), "10\xA0000\xA0tirages")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '0 var(--screen-pad) 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    value: view,
    onChange: setView,
    size: "sm",
    options: [{
      value: 'verdict',
      label: 'Verdict'
    }, {
      value: 'cadran',
      label: 'Cadran'
    }, {
      value: 'duel',
      label: 'Duel'
    }]
  }), /*#__PURE__*/React.createElement(Segmented, {
    value: scenario,
    onChange: setScenario,
    size: "sm",
    options: [{
      value: 'bad',
      label: 'vs Gobelins (inébranl.)'
    }, {
      value: 'clean',
      label: 'vs Chars'
    }]
  })), /*#__PURE__*/React.createElement(Body, null, view === 'verdict' && /*#__PURE__*/React.createElement(VariantVerdict, {
    res: res,
    names: names
  }), view === 'cadran' && /*#__PURE__*/React.createElement(VariantCadran, {
    res: res,
    names: names
  }), view === 'duel' && /*#__PURE__*/React.createElement(VariantDuel, {
    res: res,
    names: names
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '12px var(--screen-pad) 16px',
      borderTop: '1px solid var(--border-default)',
      background: 'rgba(12,15,20,0.9)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "rotate-ccw",
      style: {
        width: 20,
        height: 20
      }
    })
  }, "Ajuster"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onResolve,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "list-checks",
      style: {
        width: 20,
        height: 20
      }
    })
  }, "R\xE9soudre le combat")));
}
Object.assign(window, {
  ResultProbabilistic
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/augur/ResultProbabilistic.jsx", error: String((e && e.message) || e) }); }

// ui_kits/augur/data.js
try { (() => {
// Shared illustrative game state for the Augur UI kit.
// Values are illustrative of the Old World data model, not a rules engine.

window.AUGUR_DATA = {
  players: {
    me: {
      name: 'Toi',
      army: 'Royaume de Bretonnie',
      vp: 642
    },
    foe: {
      name: 'Adverse',
      army: 'Peaux-Vertes',
      vp: 488
    }
  },
  // friendly roster
  myUnits: [{
    id: 'u1',
    name: 'Chevaliers du Royaume',
    points: 285,
    profile: {
      cc: 4,
      str: 3,
      tou: 4,
      att: 1,
      save: '2+',
      cd: 8
    },
    fu: {
      current: 9,
      max: 9
    },
    status: 'full',
    isGeneral: true,
    hasStandard: true
  }, {
    id: 'u2',
    name: 'Hommes d\u2019armes',
    points: 120,
    profile: {
      cc: 3,
      str: 3,
      tou: 3,
      att: 1,
      save: '5+',
      cd: 7
    },
    fu: {
      current: 24,
      max: 30
    },
    status: 'full',
    isBSB: true
  }, {
    id: 'u3',
    name: 'Archers paysans',
    points: 85,
    profile: {
      cc: 2,
      str: 3,
      tou: 3,
      att: 1,
      save: '6+',
      cd: 6
    },
    fu: {
      current: 4,
      max: 16
    },
    status: 'weak'
  }, {
    id: 'u4',
    name: 'P\u00e9gase (Damoiselle)',
    points: 165,
    profile: {
      cc: 4,
      str: 4,
      tou: 4,
      att: 2,
      save: '5+',
      cd: 8
    },
    fu: {
      current: 0,
      max: 3
    },
    status: 'destroyed'
  }],
  // enemy roster
  foeUnits: [{
    id: 'e1',
    name: 'Gros\u2019Bras Orques',
    points: 210,
    profile: {
      cc: 3,
      str: 3,
      tou: 4,
      att: 1,
      save: '6+',
      cd: 7
    },
    fu: {
      current: 30,
      max: 30
    },
    status: 'full',
    isUnbreakable: false
  }, {
    id: 'e2',
    name: 'Gobelins de la nuit',
    points: 140,
    profile: {
      cc: 2,
      str: 3,
      tou: 3,
      att: 1,
      save: '6+',
      cd: 5
    },
    fu: {
      current: 33,
      max: 40
    },
    status: 'full',
    isUnbreakable: true
  }, {
    id: 'e3',
    name: 'Chars \u00e0 sangliers',
    points: 160,
    profile: {
      cc: 3,
      str: 5,
      tou: 4,
      att: 1,
      save: '4+',
      cd: 7
    },
    fu: {
      current: 2,
      max: 6
    },
    status: 'weak'
  }, {
    id: 'e4',
    name: 'Troll des cavernes',
    points: 180,
    profile: {
      cc: 3,
      str: 5,
      tou: 4,
      att: 3,
      save: '6+',
      cd: 4
    },
    fu: {
      current: 0,
      max: 3
    },
    status: 'fleeing'
  }],
  // a precomputed Monte-Carlo result for the headline engagement
  // (Chevaliers du Royaume charging Gobelins de la nuit — the "bad exchange" case)
  result: {
    expectedVP: 38,
    range: [-12, 96],
    badExchange: true,
    // high win-chance, low VP gain (Unbreakable horde)
    me: {
      win: 0.71,
      draw: 0.08,
      give: 0.10,
      fallback: 0.07,
      flee: 0.04
    },
    foe: {
      win: 0.04,
      draw: 0.08,
      give: 0.18,
      fallback: 0.16,
      flee: 0.54
    }
  },
  // the "clean" engagement for comparison (Chevaliers vs Chars)
  resultClean: {
    expectedVP: 148,
    range: [92, 196],
    badExchange: false,
    me: {
      win: 0.62,
      draw: 0.09,
      give: 0.12,
      fallback: 0.09,
      flee: 0.08
    },
    foe: {
      win: 0.08,
      draw: 0.09,
      give: 0.14,
      fallback: 0.16,
      flee: 0.53
    }
  },
  objectives: [{
    id: 'o1',
    name: 'Centre du champ',
    holder: 'me'
  }, {
    id: 'o2',
    name: 'Colline est',
    holder: 'foe'
  }, {
    id: 'o3',
    name: 'Pont',
    holder: 'none'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/augur/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.StatPill = __ds_scope.StatPill;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.OUTCOMES = __ds_scope.OUTCOMES;

__ds_ns.OutcomeBar = __ds_scope.OutcomeBar;

__ds_ns.OutcomeLegend = __ds_scope.OutcomeLegend;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.UnitStatCard = __ds_scope.UnitStatCard;

__ds_ns.VPMeter = __ds_scope.VPMeter;

})();
