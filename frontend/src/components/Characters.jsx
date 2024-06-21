import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileState } from "../recoil/Atoms";
import { avatarInfoListState } from "../recoil/Atoms";
import { handleAvatarInfoList } from "../utils/HandleAvatarInfoList";
import { getAvatarPicture } from "../utils/HandleImgUrl";
import CharacterDetailInfo from "./CharacterDetailInfo";

export default function Characters() {
  const profile = useRecoilValue(profileState);
  const [avatarInfoList, setAvatarInfoList] = useRecoilState(avatarInfoListState);
  const [selectedAvatarInfo, setSelectedAvatarInfo] = useState(null);
  const [selectedButtonIdx, setSelectedButtonIdx] = useState(null);

  useEffect(() => {
    const fetchFunc = async () => {
      // 원래 avatarInfoList에는 level 정보가 없어서, handleAvatarInfoList 함수를 사용해 level 정보를 포함해준다
      const _avatarInfoList = await handleAvatarInfoList(profile);
      // 그리고 level 정보가 포함된 데이터를 Recoil 상태에 업데이트해준다
      setAvatarInfoList(_avatarInfoList);
      // 선택한 아바타의 기본값은 0번째 아바타로 설정
      if (!selectedAvatarInfo && _avatarInfoList.length > 0) {
        setSelectedAvatarInfo(_avatarInfoList[0]);
        setSelectedButtonIdx(0);
      }
    };
    fetchFunc();
  }, []);

  useEffect(() => {
    console.log("avatarInfoList 업데이트: ", avatarInfoList);
  }, [avatarInfoList]);

  /**
   * 사용자가 클릭한 아바타에 대한 상세정보로 업데이트
   */
  const handleAvatarClick = (avatarInfo, btnIdx) => {
    console.log("클릭한 캐릭터:", avatarInfo.name);
    console.log("클릭한 캐릭터의 정보: ", avatarInfo);
    setSelectedAvatarInfo(avatarInfo);
    setSelectedButtonIdx(btnIdx);
  };

  const listItems = avatarInfoList.map((e, idx) => {
    const avatarImgUrl = getAvatarPicture(e.avatarId);
    const buttonClass = idx === selectedButtonIdx ? "bg-gray-500" : "";
    console.log(e);
    return (
      <li key={idx}>
        <button
          className={`w-20 lg:w-24 hover:bg-gray-500 rounded-xl m-5 ${buttonClass}`}
          onClick={() => {
            if (e.name !== selectedAvatarInfo.name) {
              handleAvatarClick(e, idx);
            }
          }}
        >
          <img src={avatarImgUrl} alt="avatar Img" />
          <div className="text-center text-white">
            <p className="text-sm md:text-base lg:text-lg">{e.name}</p>
            <p className="text-xs md:text-sm lg:text-base">LV {e.level}</p>
          </div>
        </button>
      </li>
    );
  });

  return (
    <div className="px-10 bg-gray-800">
      {/* PC용 UI */}
      <div className="hidden md:flex justify-between">
        <div className="w-fit mt-12 border-solid">{selectedAvatarInfo && <CharacterDetailInfo avatarInfo={selectedAvatarInfo} />}</div>
        <div className="mt-12 h-96 box-border mx-2 overflow-y-scroll overflow-x-hidden scrollbar-hide">
          <ul>{listItems}</ul>
        </div>
      </div>
      {/* 모바일용 UI */}
      <div className="md:hidden py-12">
        <p className="text-2xl font-semibold mt-2 text-white">캐릭터 목록</p>
        <div className="flex justify-center overflow-x-scroll overflow-y-hidden scrollbar-hide">
          <ul className="flex items-start w-full h-fit">{listItems}</ul>
        </div>
        <div className="h-60 border-solid">{selectedAvatarInfo && <CharacterDetailInfo avatarInfo={selectedAvatarInfo} />}</div>
      </div>
    </div>
  );
}
