import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileState } from "../recoil/Atoms";
import { avatarInfoListState } from "../recoil/Atoms";
import { handleAvatarInfoList } from "../utils/HandleAvatarInfoList";

const Characters = () => {
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
    return (
      <li>
        <p>{e.avatarId}</p>
        <p>{e.level}</p>
      </li>
    );
  });

  return (
    <div className="h-full flex justify-center bg-gray-700">
      <ul>{listItems}</ul>
    </div>
  );
};

export default Characters;
