import React from "react";
import { getAvatarGachaImg } from "../utils/HandleImgUrl";
import EquipComponent from "./equipcomp";

export default function CharacterDetailInfo({ avatarInfo }) {
  const avatarImgUrl = getAvatarGachaImg(avatarInfo?.avatarId);
  console.log("Gacha img url: ", avatarImgUrl);
  return (
    <div className="w-full h-[35rem] relative border border-gray-700 bg-gray-800  rounded-3xl">
      <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-3xl p-8 px-10">
        <img src={avatarImgUrl} className="w-full h-full object-cover opacity-70 mt-10 scale-125 rounded-3xl " alt="Avatar image" />
      </div>
      <div className="flex h-full flex-col justify-start items-start  mt-4 absolute top-1 left-[10%]">
        <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white m-1 p-1 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl">
          {avatarInfo.name} LV{avatarInfo.level}
        </p>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white m-1 p-1 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl">
          호감도 {avatarInfo.fetterInfo.expLevel}
        </p>
      </div>
      <EquipComponent avatarInfo={avatarInfo} />
    </div>
  );
}
