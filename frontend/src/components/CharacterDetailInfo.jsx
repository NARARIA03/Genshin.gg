import React from "react";
import { getAvatarGachaImg } from "../utils/HandleImgUrl";

export default function CharacterDetailInfo({ avatarInfo }) {
  const avatarImgUrl = getAvatarGachaImg(avatarInfo?.avatarId);
  console.log(avatarImgUrl);
  return (
    <div className="h-full flex bg-cover">
      <div className="flex-1 flex justify-center items-center">
        <img
          src={avatarImgUrl}
          className="object-cover h-full opacity-80"
          alt="Avatar"
        />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <p className="text-sm md:text-base lg:text-lg text-white m-3">
          {avatarInfo.name}
        </p>
        <p className="text-sm md:text-base lg:text-lg text-white">
          LV{avatarInfo.level}
        </p>
      </div>
    </div>
  );
}
