import { Equip, ReliquaryMainstat, ReliquarySubstat } from "../types/avatarinfotypes";

export const getReliquaryMainStat = (equip: Equip): ReliquaryMainstat | undefined => {
  if (equip.flat.reliquaryMainstat) {
    const statName: string = equip.flat.reliquaryMainstat?.mainPropId;
    let reliquaryMainstat: ReliquaryMainstat = {
      mainPropId: getStatName(statName),
      statValue: equip.flat.reliquaryMainstat.statValue,
    };
    return reliquaryMainstat;
  }
};

const getStatName = (statName: string): string => {
  switch (statName) {
    case "FIGHT_PROP_BASE_ATTACK":
      return "기초 공격력";
    case "FIGHT_PROP_HP":
      return "HP";
    case "FIGHT_PROP_ATTACK":
      return "공격력";
    case "FIGHT_PROP_DEFENSE":
      return "방어력";
    case "FIGHT_PROP_HP_PERCENT":
      return "HP%";
    case "FIGHT_PROP_ATTACK_PERCENT":
      return "공격력%";
    case "FIGHT_PROP_DEFENSE_PERCENT":
      return "방어력%";
    case "FIGHT_PROP_CRITICAL":
      return "치명타 확률";
    case "FIGHT_PROP_CRITICAL_HURT":
      return "치명타 피해";
    case "FIGHT_PROP_CHARGE_EFFICIENCY":
      return "원소 충전 효율";
    case "FIGHT_PROP_HEAL_ADD":
      return "치유 보너스";
    case "FIGHT_PROP_ELEMENT_MASTERY":
      return "원소 마스터리";
    case "FIGHT_PROP_PHYSICAL_ADD_HURT":
      return "물리 피해 보너스";
    case "FIGHT_PROP_FIRE_ADD_HURT":
      return "불 원소 피해 보너스";
    case "FIGHT_PROP_ELEC_ADD_HURT":
      return "번개 원소 피해 보너스";
    case "FIGHT_PROP_WATER_ADD_HURT":
      return "물 원소 피해 보너스";
    case "FIGHT_PROP_WIND_ADD_HURT":
      return "바람 원소 피해 보너스";
    case "FIGHT_PROP_ICE_ADD_HURT":
      return "얼음 원소 피해 보너스";
    case "FIGHT_PROP_ROCK_ADD_HURT":
      return "바위 원소 피해 보너스";
    case "FIGHT_PROP_GRASS_ADD_HURT":
      return "풀 원소 피해 보너스";
    default:
      return "";
  }
};
