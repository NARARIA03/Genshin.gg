import characters from "../store/characters.json";
import { CharactersJson } from "../types/charactersJsonTypes";
import { FightPropMap } from "../types/fightPropTypes";

const charactersData: CharactersJson = characters;

export const getCharFightStats = (avatarId: string, fightPropMap: FightPropMap) => {
  const charElementType: string | undefined = charactersData[avatarId]?.Element;
  if (charElementType) {
    for (const [key, value] of Object.entries(fightPropMap)) {
      // Todo: 필요한 charStats만 뽑아내서  코드 필요, charElementType 고려해서
      // hp최대치, 공격력, 방어력, 원소마스터리, 치확% 치피% 원충% X원피%
      handleCharStat(key, value);
    }
  }
  console.log("charElementType: ", charElementType);
};

const handleCharStat = (key: string, value: number): string => {
  // Todo: 해당하는 key에 대한 value를 적절하게 만들어서 문자열로 반환하는 코드 필요
  return "hello";
};
