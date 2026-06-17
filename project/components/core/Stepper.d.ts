import * as React from 'react';

export interface StepperProps {
  value: number;
  onChange?: (next: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Uppercase eyebrow label above the control. */
  label?: string | null;
  /** Render value with an explicit +/- sign (for resolution modifiers). */
  signed?: boolean;
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}

/** Keyboard-free numeric stepper — the default table-side input. */
export function Stepper(props: StepperProps): JSX.Element;
