import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileState } from "../recoil/Atoms";
import { avatarInfoListState } from "../recoil/Atoms";
import { handleAvatarInfoList } from "../utils/HandleAvatarInfoList";
import { getAvatarPicture } from "../utils/HandleImgUrl";
import { getAvatarName } from "../utils/HandleAvatarDatas";

export default function Characters() {
  const profile = useRecoilValue(profileState);
  const [avatarInfoList, setAvatarInfoList] =
    useRecoilState(avatarInfoListState);

  useEffect(() => {
    // 원래 avatarInfoList에는 level 정보가 없어서, handleAvatarInfoList 함수를 사용해 level 정보를 포함해준다
    const _avatarInfoList = handleAvatarInfoList(profile);
    // 그리고 level 정보가 포함된 데이터를 Recoil 상태에 업데이트해준다
    setAvatarInfoList(_avatarInfoList);
  }, []);

  // 테스트 코드
  avatarInfoList.forEach((e) => {
    console.log(e.level);
  });

  const listItems = avatarInfoList.map((e) => {
    const avatarImgUrl = getAvatarPicture(e.avatarId);
    const avatarName = getAvatarName(e.avatarId);
    return (
      <li>
        <button className=" hover:bg-gray-500 rounded-3xl my-2">
          <img src={avatarImgUrl} alt="avatar Img" />
          <div className="text-center text-white text-l font-semibold">
            <p>{avatarName}</p>
            <p>LV {e.level}</p>
          </div>
        </button>
      </li>
    );
  });

  return (
    <div className="flex justify-center bg-gray-800">
      <ul>{listItems}</ul>
    </div>
  );
}
