import characters from "../store/characters.json";
import textMapKR from "../store/textMapKR.json";
/**
 * 아바타 id를 통해 아바타 이름을 반환
 * @param {Int} avatarId
 */
export const getAvatarName = (avatarId) => {
  const nameHash = characters[avatarId].NameTextMapHash;
  const name = textMapKR[nameHash];
  return name;
};
