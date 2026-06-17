import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Touch size. @default 'md' */
  size?: 'md' | 'lg';
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Stretch to container width. @default false */
  block?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary action button for Augur — large touch targets, dark-first.
 * @startingPoint section="Core" subtitle="Buttons — primary, secondary, ghost, danger" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
