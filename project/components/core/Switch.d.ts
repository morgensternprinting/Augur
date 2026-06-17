import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Optional inline label; renders a full-width labelled row. */
  label?: string | null;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Boolean toggle for game flags (Inébranlable, charge, étendard…). */
export function Switch(props: SwitchProps): JSX.Element;
