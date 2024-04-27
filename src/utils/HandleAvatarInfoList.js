import { getAvatarName } from "../apis/FetchAvatarName";

/**
 * 각 캐릭터의 상세한 정보와 level, 이름 등의 정보를 합쳐서 최종 반환하는 함수
 * @param {Array} profile Recoil 상태인 profile
 */
export const handleAvatarInfoList = async (profile) => {
  const updatedAvatarList = makeAvatarInfoList(profile);
  const updatedAvatarNameList = await appendAvatarName(updatedAvatarList);
  return updatedAvatarNameList;
};

/**
 * profile을 입력받아서, level 값이 포함된 avatarInfoList를 반환하는 함수
 * @param {Array} profile Recoil 상태인 profile
 */
const makeAvatarInfoList = (profile) => {
  try {
    // 각 캐릭터의 찐 상세정보가 저장된 list
    let avatarList = profile?.avatarInfoList;
    // 캐릭터id와 level만 저장된 list
    let avatarLevelList = profile?.playerInfo?.showAvatarInfoList;

    // 찐 상세정보 리스트를 map으로 반복 돌려서 각 객체마다 level을 포함한, updatedAvatarList라는 이름으로 반환받는다.
    const updatedAvatarList = avatarList.map((e) => {
      // 새 object updatedAvatarObj를 만들고, 기존 object를 복사
      const updatedAvatarObj = { ...e };
      // 각 반복 회차에서 level은 0으로 리셋하고
      let level = 0;
      // map 반복문 안에서 level 정보만 있는 배열을 다시 map으로 반복
      avatarLevelList.forEach((f) => {
        // 만약 avatarId가 같은 걸 찾았다면, 그 캐릭터의 레벨을 level 변수에 저장
        if (f?.avatarId === e?.avatarId) {
          level = f?.level;
        }
      });
      // 안쪽 foreach 반복문이 끝나면, level을 콘솔에 출력
      console.log(`캐릭터 레벨 : ${level}`);
      // 찐 상세정보 리스트에서 복사한 object에 level 속성과 값을 추가
      updatedAvatarObj["level"] = level;
      // map 함수는 배열의 각 요소를 변환하여 새로운 배열을 반환하는 데 주로 사용되므로, return을 해줘야 updatedAvatarList에 저장된다.
      return updatedAvatarObj; // 수정된 객체를 콜백 함수에서 반환
    });
    // updatedAvatarList를 반환
    return updatedAvatarList;
  } catch (e) {
    alert(
      `캐릭터 상세보기가 비공개 상태이거나, 진열장에 전시된 캐릭터가 없습니다. \n인게임에서 확인 부탁드립니다!\n ${e}`
    );
    console.log(e);
  }
};

/**
 * avatarInfoList를 입력받아서, 캐릭터 이름 필드를 추가로 붙여 반환하는 함수
 * @param {Array} avatarInfoList
 */
const appendAvatarName = async (avatarInfoList) => {
  const updatedAvatarNameList = await Promise.all(
    avatarInfoList.map(async (e) => {
      let updatedAvatarNameObj = { ...e };
      let id = updatedAvatarNameObj.avatarId;
      let name = await getAvatarName(id);
      console.log("name: ", name);
      updatedAvatarNameObj["name"] = name;
      return updatedAvatarNameObj;
    })
  );
  return updatedAvatarNameList;
};
