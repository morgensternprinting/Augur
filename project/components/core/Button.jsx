import React from 'react';

/**
 * Augur primary action button. Sized for table-side, one-handed use —
 * never below the 44px touch minimum.
 */
export function Button({
  children,
  variant = 'primary',   // 'primary' | 'secondary' | 'ghost' | 'danger'
  size = 'md',           // 'md' | 'lg'
  icon = null,           // optional leading node (e.g. an <svg>)
  block = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);

  const sizes = {
    md: { height: 'var(--touch-comfy)', font: 'var(--fs-body)', pad: '0 var(--sp-5)' },
    lg: { height: 'var(--touch-large)', font: 'var(--fs-h3)',   pad: '0 var(--sp-6)' },
  };

  const variants = {
    primary: {
      background: 'var(--signal-500)',
      color: 'var(--text-on-signal)',
      border: '1px solid transparent',
    },
    secondary: {
      background: 'var(--surface-3)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
    },
    danger: {
      background: 'var(--out-flee-soft)',
      color: 'var(--out-flee)',
      border: '1px solid var(--out-flee)',
    },
  };

  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  return (
    <button
      type="button"
      disabled={disabled}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
