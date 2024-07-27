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
      <div
        className="flex rounded-2xl mt-20 h-56 mx-10 p-5 overflow-x-hidden bg-slate-400 bg-blend-multiply"
        style={{
          backgroundImage: `url(${nameCardUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="rounded-full p-0.5 bg-gray-800">
              <img src={profileAvatarUrl} alt="Profile Image" className="size-24 md:size-36 lg:size-40" />
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
              <img src="https://enka.network/img/abyss.png" alt="" className="size-9 md:size-12 lg:size-14" />
              <p className="text-sm md:text-lg lg:text-xl font-semibold mt-1 ml-1 text-white">
                나선 비경 {userData?.playerInfo?.towerFloorIndex}-{userData?.playerInfo?.towerLevelIndex}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img src="https://enka.network/img/achievements.png" alt="" className="size-9 md:size-12 lg:size-14" />
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
