import * as React from 'react';

export interface StatPillProps {
  /** Uppercase stat key, e.g. "CC", "F", "E". */
  label: string;
  value: React.ReactNode;
  /** Tint the value cyan to flag a modified stat. */
  emphasis?: boolean;
  style?: React.CSSProperties;
}

/** Compact mono key/value block for one unit-profile stat. */
export function StatPill(props: StatPillProps): JSX.Element;
