import { ReliquaryMainstat } from "./avatarinfotypes";

export interface Weapon {
  itemType: "ITEM_WEAPON";
  name: string;
  level: number;
  promoteLevel: number;
  rankLevel: number;
  icon: string;
}

export interface Reliquary {
  itemType: "ITEM_RELIQUARY";
  name: string;
  icon: string;
  rankLevel: number;
  level: number;
  reliquaryMainStat: ReliquaryMainstat;
}
