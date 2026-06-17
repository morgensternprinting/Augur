import * as React from 'react';

export interface StatusDotProps {
  status?: 'full' | 'weak' | 'fleeing' | 'destroyed';
  showLabel?: boolean;
  /** Pulse the dot for a live fleeing alarm. */
  pulse?: boolean;
  style?: React.CSSProperties;
}

/** Coloured status dot + word for a unit's state. Never glyph-only. */
export function StatusDot(props: StatusDotProps): JSX.Element;
