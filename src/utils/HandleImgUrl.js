import namecards from "../store/namecards.json";
import playericons from "../store/playericons.json";

/**
 * userData에 존재하는 nameCardId 값을 통해 nameCard 이미지 파일이 있는 링크를 반환한다.
 */
export const getNameCardUrl = (userData) => {
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
