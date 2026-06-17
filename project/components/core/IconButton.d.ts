import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary' | 'ghost' | 'signal';
  size?: 'md' | 'lg';
  'aria-label': string;
  children?: React.ReactNode;
}

/** Square icon-only button. Always supply aria-label. */
export function IconButton(props: IconButtonProps): JSX.Element;
