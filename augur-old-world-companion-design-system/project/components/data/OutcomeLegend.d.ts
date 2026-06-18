import * as React from 'react';
import type { OutcomeDistribution } from './OutcomeBar';

export interface OutcomeLegendProps {
  /** Pass the distribution to print each outcome's %. */
  dist?: Partial<OutcomeDistribution> | null;
  columns?: 1 | 2;
  highlightFlee?: boolean;
  style?: React.CSSProperties;
}

/** Colour-keyed legend for the 5 outcomes, optionally with percentages. */
export function OutcomeLegend(props: OutcomeLegendProps): JSX.Element;
