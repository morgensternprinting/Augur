import React from 'react';

/** Base surface container. Elevation by lightening, hairline border, lg radius. */
export function Card({
  children,
  elevation = 1,         // 1 | 2 | 3 → surface step + shadow
  padding = 'var(--sp-4)',
  selected = false,
  glow = false,          // signal glow for the live/selected element
  style = {},
  ...rest
}) {
  const surf = { 1: 'var(--surface-1)', 2: 'var(--surface-2)', 3: 'var(--surface-3)' }[elevation] || 'var(--surface-1)';
  const shadow = { 1: 'var(--shadow-1)', 2: 'var(--shadow-2)', 3: 'var(--shadow-3)' }[elevation] || 'var(--shadow-1)';

  return (
    <div
      style={{
        background: surf,
        borderRadius: 'var(--r-lg)',
        border: `1px solid ${selected ? 'var(--signal-500)' : 'var(--border-subtle)'}`,
        padding,
        boxShadow: glow ? 'var(--glow-signal)' : shadow,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
