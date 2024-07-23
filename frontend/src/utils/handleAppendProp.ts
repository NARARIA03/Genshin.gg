import { Equip, ReliquaryMainstat, ReliquarySubstat, WeaponStat } from "../types/avatarInfoTypes";

export const getReliquaryMainStat = (equip: Equip): ReliquaryMainstat | undefined => {
  if (equip.flat.reliquaryMainstat) {
    const key: string = equip.flat.reliquaryMainstat.mainPropId;
    const value: string = equip.flat.reliquaryMainstat.statValue.toString();
    let [newKey, newValue] = handleEquipStat(key, value);
    return { mainPropId: newKey, statValue: newValue };
  }
};

export const getReliquarySubStats = (equip: Equip): ReliquarySubstat[] | undefined => {
  if (equip.flat.reliquarySubstats) {
    const newReliquarySubStats = equip.flat.reliquarySubstats.map((e: ReliquarySubstat) => {
      const key: string = e.appendPropId;
      const value: string = e.statValue;
      let [newKey, newValue] = handleEquipStat(key, value);
      return { appendPropId: newKey, statValue: newValue };
    });
    return newReliquarySubStats;
  }
};

export const getWeaponStats = (equip: Equip): WeaponStat[] | undefined => {
  if (equip.flat.weaponStats) {
    const newWeaponStats = equip.flat.weaponStats.map((e: WeaponStat) => {
      const key: string = e.appendPropId;
      const value: string = e.statValue;
      let [newKey, newValue] = handleEquipStat(key, value);
      return { appendPropId: newKey, statValue: newValue };
    });
    return newWeaponStats;
  }
};

const handleEquipStat = (key: string, value: string): string[] => {
  let statName: string;
  let statValue: string;

  switch (key) {
    case "FIGHT_PROP_BASE_ATTACK":
      statName = "기초 공격력";
      statValue = "+" + value;
      break;
    case "FIGHT_PROP_HP":
      statName = "HP";
      statValue = "+" + value;
      break;
    case "FIGHT_PROP_ATTACK":
      statName = "공격력";
      statValue = "+" + value;
      break;
    case "FIGHT_PROP_DEFENSE":
      statName = "방어력";
      statValue = "+" + value;
      break;
    case "FIGHT_PROP_HP_PERCENT":
      statName = "HP%";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_ATTACK_PERCENT":
      statName = "공격력%";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_DEFENSE_PERCENT":
      statName = "방어력%";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_CRITICAL":
      statName = "치명타 확률";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_CRITICAL_HURT":
      statName = "치명타 피해";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_CHARGE_EFFICIENCY":
      statName = "원소 충전 효율";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_HEAL_ADD":
      statName = "치유 보너스";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_ELEMENT_MASTERY":
      statName = "원소 마스터리";
      statValue = "+" + value;
      break;
    case "FIGHT_PROP_PHYSICAL_ADD_HURT":
      statName = "물리 피해 보너스";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_FIRE_ADD_HURT":
      statName = "불 원소 피해 보너스";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_ELEC_ADD_HURT":
      statName = "번개 원소 피해 보너스";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_WATER_ADD_HURT":
      statName = "물 원소 피해 보너스";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_WIND_ADD_HURT":
      statName = "바람 원소 피해 보너스";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_ICE_ADD_HURT":
      statName = "얼음 원소 피해 보너스";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_ROCK_ADD_HURT":
      statName = "바위 원소 피해 보너스";
      statValue = "+" + value + "%";
      break;
    case "FIGHT_PROP_GRASS_ADD_HURT":
      statName = "풀 원소 피해 보너스";
      statValue = "+" + value + "%";
      break;
    default:
      statName = "";
      statValue = "";
      break;
  }
  return [statName, statValue];
};
