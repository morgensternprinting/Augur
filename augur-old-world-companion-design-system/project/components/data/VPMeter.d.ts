import * as React from 'react';

export interface VPMeterProps {
  /** Signed net VP swing — positive = in the player's favour. */
  value: number;
  /** Optional confidence interval [low, high]. */
  range?: [number, number] | null;
  size?: 'hero' | 'compact';
  style?: React.CSSProperties;
}

/**
 * The hero metric: expected net Victory-Point swing, signed + colour-coded
 * + direction word. Loudest element on the result screen.
 * @startingPoint section="Data" subtitle="Hero VP-swing metric" viewport="700x200"
 */
export function VPMeter(props: VPMeterProps): JSX.Element;
