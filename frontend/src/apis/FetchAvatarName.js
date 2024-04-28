import characters from "../store/characters.json";
import axios from "axios";
/**
 * 아바타 id를 통해 아바타 이름을 반환
 * @param {string} avatarId
 */
export const getAvatarName = async (avatarId) => {
  const nameHash = characters[avatarId].NameTextMapHash;
  const API_URL = "http://127.0.0.1:8000/getavatarname/" + nameHash;
  const res = await axios.get(API_URL);
  return res.data;
};
