import characters from "../store/characters.json";
import axios from "axios";
import qs from "qs";

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

  const queryString = qs.stringify({ nameHashAry: nameHashArray }, { indices: false });
  const API_URL = `${process.env.REACT_APP_API_URL}/getavatarname?${queryString}`;

  const res = await axios.get(API_URL);
  console.log("getAvatarName 함수 결과: ", res.data);
  return res.data;
};
