import React from 'react';

/** Icon-only button (square touch target). Pass a Lucide <i> or <svg> as children. */
export function IconButton({
  children,
  variant = 'secondary', // 'secondary' | 'ghost' | 'signal'
  size = 'md',           // 'md' (44) | 'lg' (52)
  'aria-label': ariaLabel,
  disabled = false,
  style = {},
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const dim = size === 'lg' ? 'var(--touch-comfy)' : 'var(--touch-min)';
  const variants = {
    secondary: { background: 'var(--surface-3)', color: 'var(--text-primary)', border: '1px solid var(--border-default)' },
    ghost:     { background: 'transparent',      color: 'var(--text-secondary)', border: '1px solid transparent' },
    signal:    { background: 'var(--signal-500)', color: 'var(--text-on-signal)', border: '1px solid transparent' },
  };
  const v = variants[variant] || variants.secondary;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        width: dim, height: dim, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--r-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast)',
        transform: pressed && !disabled ? 'scale(0.94)' : 'scale(1)',
        opacity: disabled ? 0.4 : 1, ...v, ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
