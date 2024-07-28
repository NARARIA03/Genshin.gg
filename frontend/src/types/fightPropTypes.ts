export interface FightPropMap {
  [key: string]: number;
}

export interface CharFightStats {
  key: "hp" | "atk" | "def" | "elementalMastery" | "critRate" | "critDmg" | "rechargeRate" | "elementalDmgBonus";
  description: string;
  value: number;
  appendValue?: number;
  isPercent: boolean;
}
