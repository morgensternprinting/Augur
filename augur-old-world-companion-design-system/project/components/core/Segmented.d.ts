import * as React from 'react';

export interface SegmentedOption { value: string; label: React.ReactNode; }

export interface SegmentedProps {
  options: Array<SegmentedOption | string>;
  value: string;
  onChange?: (value: string) => void;
  size?: 'md' | 'sm';
  style?: React.CSSProperties;
}

/** Mutually-exclusive segmented control for 2–4 choices. */
export function Segmented(props: SegmentedProps): JSX.Element;
