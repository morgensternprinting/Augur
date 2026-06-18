import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface step + shadow depth. @default 1 */
  elevation?: 1 | 2 | 3;
  padding?: string;
  /** Signal-cyan border for selected state. */
  selected?: boolean;
  /** Signal glow — reserve for the live/selected element. */
  glow?: boolean;
  children?: React.ReactNode;
}

/** Base surface container — flat, hairline border, lg radius. */
export function Card(props: CardProps): JSX.Element;
