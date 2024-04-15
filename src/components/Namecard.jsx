import React from "react";
import { profileState } from "../recoil/Atoms";
import { useRecoilValue } from "recoil";

import { getNameCardPicture, getprofilePicture } from "../utils/HandleImgUrl";

const Namecard = () => {
  const userData = useRecoilValue(profileState);
  const nameCardUrl = getNameCardPicture(userData);
  const profileAvatarUrl = getprofilePicture(userData);

  return (
    <div>
      <div
        className="flex rounded-2xl mt-3 h-56 mx-5 p-5 overflow-x-hidden bg-slate-400 bg-blend-multiply"
        style={{
          backgroundImage: `url(${nameCardUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="rounded-full w-fit h-fit p-0.5 bg-gray-800">
              <img
                src={profileAvatarUrl}
                alt="Profile Image"
                className="size-40"
              />
            </div>
          </div>
          <div className="flex flex-col items-start ml-5">
            <div className="flex justify-between items-end">
              <p className="text-5xl font-semibold mt-2 text-white">
                {userData.playerInfo.nickname}
              </p>
              <p className="text-2xl font-semibold mt-2 ml-3 text-white">
                {userData.playerInfo.signature}
              </p>
            </div>
            <p className="text-xl font-semibold mt-1 text-white">
              모험 등급 {userData?.playerInfo?.level}, 월드 레벨{" "}
              {userData?.playerInfo?.worldLevel}
            </p>

            <div className="flex flex-row items-center">
              <img
                src="https://enka.network/img/abyss.png"
                alt=""
                className="size-14"
              />
              <p className="text-xl font-semibold mt-1 ml-1 text-white">
                나선 비경 {userData?.playerInfo?.towerFloorIndex}-
                {userData?.playerInfo?.towerLevelIndex}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <img
                src="https://enka.network/img/achievements.png"
                alt=""
                className="size-14"
              />
              <p className="text-xl font-semibold mt-1 ml-1 text-white">
                {userData?.playerInfo?.finishAchievementNum}개
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Namecard;
