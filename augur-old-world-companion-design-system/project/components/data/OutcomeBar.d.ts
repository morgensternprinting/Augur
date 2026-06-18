import * as React from 'react';

export interface OutcomeDistribution {
  /** L'emporter */      win: number;
  /** Égalité */         draw: number;
  /** Céder du terrain */give: number;
  /** Reculer en bon ordre */ fallback: number;
  /** FUIR (catastrophe) */   flee: number;
}

export interface OutcomeBarProps {
  /** Outcome fractions (0..1). Auto-normalised. */
  dist: OutcomeDistribution;
  height?: number;
  /** Print % inside segments wide enough to hold it. @default true */
  showInline?: boolean;
  /** Glow + inset ring on the FUIR segment. @default true */
  emphasizeFlee?: boolean;
  style?: React.CSSProperties;
}

/**
 * Stacked probability bar for the 5 Old World break-test outcomes.
 * @startingPoint section="Data" subtitle="Stacked outcome-probability bar" viewport="700x120"
 */
export function OutcomeBar(props: OutcomeBarProps): JSX.Element;

export const OUTCOMES: Array<{ key: keyof OutcomeDistribution; label: string; color: string }>;
