import React from "react";
import { profileState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

import { getNameCardPicture, getprofilePicture } from "../utils/handleImgUrl";

export default function Namecard() {
  const userData = useRecoilValue(profileState);
  const nameCardUrl = getNameCardPicture(userData);
  const profileAvatarUrl = getprofilePicture(userData);

  return (
    <div>
      <div className="relative flex max-h-56 overflow-hidden rounded-2xl mt-20 mx-10 items-center drop-shadow-custom-black">
        <img src={nameCardUrl} alt="진열장 이미지" className="opacity-60 w-full object-cover min-h-56" />
        <div className="absolute top-5 left-5 flex items-center">
          <div className="flex flex-col items-center">
            <div className="rounded-full p-0.5 bg-gray-800 shadow-md shadow-gray-950">
              <img src={profileAvatarUrl} alt="Profile Image" className="size-24 md:size-36 lg:size-40 drop-shadow-custom-black" />
            </div>
          </div>
          <div className="flex flex-col items-start ml-5">
            <div className="flex justify-between items-end">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold mt-2 text-white">{userData.playerInfo.nickname}</p>
              <p className="text-base md:text-lg lg:text-xl font-semibold mt-2 ml-3 text-white">{userData.playerInfo.signature}</p>
            </div>
            {/* 모바일 모험등급 / 월드레벨 */}
            <div className="md:hidden block">
              <p className="text-base font-semibold mt-1 text-white">모험 등급 {userData?.playerInfo?.level}</p>
              <p className="text-base font-semibold mt-1 text-white">월드 레벨 {userData?.playerInfo?.worldLevel}</p>
            </div>
            {/* PC 모험등급 / 월드레벨 */}
            <p className="hidden md:block text-base md:text-lg lg:text-xl font-semibold mt-1 text-white">
              모험 등급 {userData?.playerInfo?.level}, 월드 레벨 {userData?.playerInfo?.worldLevel}
            </p>

            <div className="flex flex-row items-center">
              <img
                src="https://enka.network/img/abyss.png"
                alt="나선 비경 이미지"
                className="size-9 md:size-12 lg:size-14 drop-shadow-custom-black"
              />
              <p className="text-sm md:text-lg lg:text-xl font-semibold mt-1 ml-1 text-white">
                나선 비경 {userData?.playerInfo?.towerFloorIndex}-{userData?.playerInfo?.towerLevelIndex}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img
                src="https://enka.network/img/achievements.png"
                alt="업적 이미지"
                className="size-9 md:size-12 lg:size-14 drop-shadow-custom-black"
              />
              <p className="text-sm md:text-lg lg:text-xl font-semibold mt-1 ml-1 text-white">
                {userData?.playerInfo?.finishAchievementNum}개
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
