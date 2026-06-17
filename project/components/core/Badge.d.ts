import * as React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'signal' | 'win' | 'caution' | 'flee';
  /** Filled vs soft tint. @default false */
  solid?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Small uppercase status/category label. */
export function Badge(props: BadgeProps): JSX.Element;
