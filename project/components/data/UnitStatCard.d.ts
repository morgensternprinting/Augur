import * as React from 'react';

export interface UnitProfile {
  /** Combat Skill (CC), Strength (F), Toughness (E), Attacks (A) */
  cc?: number; str?: number; tou?: number; att?: number;
  /** Armour save, e.g. "4+" */ save?: string;
  /** Commandement (Cd) */      cd?: number;
}

export interface Unit {
  name: string;
  points: number;
  profile?: UnitProfile;
  /** Force d'Unité — current vs max; 25% threshold is derived. */
  fu?: { current: number; max: number };
  status?: 'full' | 'weak' | 'fleeing' | 'destroyed';
  isGeneral?: boolean;
  /** Battle Standard Bearer (Porteur de Grande Bannière). */
  isBSB?: boolean;
  hasStandard?: boolean;
}

export interface UnitStatCardProps {
  unit: Unit;
  /** Accent rail colour: friendly = signal, enemy = flee-red. */
  side?: 'friendly' | 'enemy';
  selected?: boolean;
  onClick?: (() => void) | null;
  /** Hide stat pills + status label for a tight list row. */
  compact?: boolean;
  style?: React.CSSProperties;
}

/**
 * Roster unit profile card — stats, role badges, Force d'Unité bar w/ 25% tick.
 * @startingPoint section="Data" subtitle="Unit profile card with FU bar" viewport="700x320"
 */
export function UnitStatCard(props: UnitStatCardProps): JSX.Element;
