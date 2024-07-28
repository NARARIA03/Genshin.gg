import characters from "../store/characters.json";
import { CharactersJson } from "../types/charactersJsonTypes";
import { FightPropMap, CharFightStats } from "../types/fightPropTypes";

const charactersData: CharactersJson = characters;

export const getCharFightStats = (avatarId: string, fightPropMap: FightPropMap): CharFightStats[] => {
  const charElementType: string | undefined = charactersData[avatarId]?.Element;
  const charFightStatsList: CharFightStats[] = [];

  if (charElementType) {
    charFightStatsList.push(getHp(fightPropMap));
    charFightStatsList.push(getAtk(fightPropMap));
    charFightStatsList.push(getDef(fightPropMap));
    charFightStatsList.push(getElementalMastery(fightPropMap));
    charFightStatsList.push(getCritRate(fightPropMap));
    charFightStatsList.push(getCritDmg(fightPropMap));
    charFightStatsList.push(getRechargeRate(fightPropMap));
    charFightStatsList.push(getElementalDmgBonus(avatarId, charElementType, fightPropMap));

    console.log("charElementType: ", charElementType);
    console.log("FightStatsList: ", charFightStatsList);
  }
  return charFightStatsList;
};

const getHp = (fightPropMap: FightPropMap): CharFightStats => {
  let baseHp = Math.round(fightPropMap["1"]);
  let maxHp = Math.round(fightPropMap["2000"]);
  return {
    key: "hp",
    description: "HP",
    value: maxHp,
    appendValue: baseHp,
  };
};

const getAtk = (fightPropMap: FightPropMap): CharFightStats => {
  let baseAtk = Math.round(fightPropMap["4"]);
  let maxAtk = Math.round(fightPropMap["2001"]);
  return {
    key: "atk",
    description: "공격력",
    value: maxAtk,
    appendValue: baseAtk,
  };
};

const getDef = (fightPropMap: FightPropMap): CharFightStats => {
  let baseDef = Math.round(fightPropMap["7"]);
  let maxDef = Math.round(fightPropMap["2002"]);

  return {
    key: "def",
    description: "방어력",
    value: maxDef,
    appendValue: baseDef,
  };
};

const getElementalMastery = (fightPropMap: FightPropMap): CharFightStats => {
  let elementalMastery = Math.round(fightPropMap["28"]);
  return {
    key: "elementalMastery",
    description: "원소 마스터리",
    value: elementalMastery,
  };
};

const getCritRate = (fightPropMap: FightPropMap): CharFightStats => {
  let critRate = Math.round(fightPropMap["20"] * 1000) / 10;
  return {
    key: "critRate",
    description: "치명타 확률",
    value: critRate,
  };
};

const getCritDmg = (fightPropMap: FightPropMap): CharFightStats => {
  let critDmg = Math.round(fightPropMap["22"] * 1000) / 10;
  return {
    key: "critDmg",
    description: "치명타 피해",
    value: critDmg,
  };
};

const getRechargeRate = (fightPropMap: FightPropMap): CharFightStats => {
  let rechargeRate = Math.round(fightPropMap["23"] * 1000) / 10;
  return {
    key: "rechargeRate",
    description: "원소 충전 효율",
    value: rechargeRate,
  };
};

const getElementalDmgBonus = (avatarId: string, charElementType: string, fightPropMap: FightPropMap): CharFightStats => {
  let value = 0;
  let description = "";
  let element = "";

  if (charElementType === "Fire") {
    value = Math.round(fightPropMap["40"] * 1000) / 10;
    description = "불 원소 피해 보너스";
    element = "fire";
  } else if (charElementType === "Electric") {
    value = Math.round(fightPropMap["41"] * 1000) / 10;
    description = "번개 원소 피해 보너스";
    element = "electric";
  } else if (charElementType === "Water") {
    value = Math.round(fightPropMap["42"] * 1000) / 10;
    description = "물 원소 피해 보너스";
    element = "water";
  } else if (charElementType === "Grass") {
    value = Math.round(fightPropMap["43"] * 1000) / 10;
    description = "풀 원소 피해 보너스";
    element = "grass";
  } else if (charElementType === "Wind") {
    value = Math.round(fightPropMap["44"] * 1000) / 10;
    description = "바람 원소 피해 보너스";
    element = "wind";
  } else if (charElementType === "Rock") {
    value = Math.round(fightPropMap["45"] * 1000) / 10;
    description = "바위 원소 피해 보너스";
    element = "rock";
  } else if (charElementType === "Ice" && avatarId !== "10000051") {
    value = Math.round(fightPropMap["46"] * 1000) / 10;
    description = "얼음 원소 피해 보너스";
    element = "ice";
  } else if (avatarId === "10000051") {
    value = Math.round(fightPropMap["30"] * 1000) / 10;
    description = "물리 피해 보너스";
    element = "physical";
  }
  return {
    key: "elementalDmgBonus",
    description: description,
    value: value,
    element: element,
  };
};
