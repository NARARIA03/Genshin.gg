import characters from "../store/characters.json";
import axios from "axios";
/**
 * 아바타 id를 통해 아바타 이름을 반환
 * @param {string[]} avatarIdArray
 */
export const getAvatarName = async (avatarIdArray) => {
  const nameHashArray = avatarIdArray.map((e) => {
    let nameHash = characters[e].NameTextMapHash.toString();
    return nameHash;
  });
  console.log("nameHashArray: ", nameHashArray);
  // const API_URL =
  //   "https://port-0-genshin-gg-backend-128y2k2llvjel4ui.sel5.cloudtype.app/getavatarname";
  const API_URL = "http://127.0.0.1:8000/getavatarname";
  const res = await axios.post(API_URL, { nameHashAry: nameHashArray });
  console.log("getAvatarName 함수 결과: ", res.data);
  return res.data;
};
