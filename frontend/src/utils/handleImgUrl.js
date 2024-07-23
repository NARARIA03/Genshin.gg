import namecards from "../store/namecards.json";
import playericons from "../store/playericons.json";
import characters from "../store/characters.json";

/**
 * userData에 존재하는 nameCardId 값을 통해 nameCard 이미지 파일이 있는 링크를 반환한다.
 */
export const getNameCardPicture = (userData) => {
  const nameCardId = userData?.playerInfo?.nameCardId;
  const nameCard = namecards[nameCardId]?.icon;
  const url = "https://enka.network/ui/" + nameCard + ".png";
  return url;
};

/**
 * userData에 존재하는 profilePicture 값을 통해 profilePicture 이미지 파일이 있는 링크를 반환한다.
 */
export const getprofilePicture = (userData) => {
  const profileId = userData?.playerInfo?.profilePicture?.id;
  const profile = playericons[profileId]?.iconPath;
  const url = "https://enka.network/ui/" + profile + ".png";
  return url;
};

export const getAvatarPicture = (avatarId) => {
  const sideIconName = characters[avatarId].SideIconName;
  const url = "https://enka.network/ui/" + sideIconName + ".png";
  // console.log(sideIconName);
  return url;
};

/**
 * @description avatarId를 입력하면, 캐릭터 전신 이미지 주소를 반환하는 함수
 * @param {string} avatarId
 */
export const getAvatarGachaImg = (avatarId) => {
  const sideIconName = characters[avatarId]?.SideIconName;
  const avatarName = sideIconName.substring("UI_AvatarIcon_Side_".length);
  const url =
    "https://enka.network/ui/UI_Gacha_AvatarImg_" + avatarName + ".png";
  console.log("Gacha 이미지 주소 획득 완료");
  return url;
};
