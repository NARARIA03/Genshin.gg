import React from "react";
import { getAvatarGachaImg } from "../utils/HandleImgUrl";
import EquipComponent from "./equipcomp";

export default function CharacterDetailInfo({ avatarInfo }) {
  const avatarImgUrl = getAvatarGachaImg(avatarInfo?.avatarId);
  console.log("Gacha img url: ", avatarImgUrl);
  return (
    <div className="h-full flex bg-cover">
      <div className="flex-1 flex justify-center items-center overflow-hidden rounded-xl">
        <img src={avatarImgUrl} className="object-cover h-full opacity-80 mt-10 scale-150" alt="Avatar" />
      </div>
      <div className="flex flex-1 flex-col justify-center items-start ml-12">
        <p className="text-sm md:text-base lg:text-lg text-white m-3">{avatarInfo.name}</p>
        <p className="text-sm md:text-base lg:text-lg text-white m-3">LV{avatarInfo.level}</p>
        <p className="text-sm md:text-base lg:text-lg text-white m-3">호감도 {avatarInfo.fetterInfo.expLevel}</p>
        <p className="text-sm md:text-base lg:text-lg text-white m-3">스킬셋 ID {avatarInfo.skillDepotId}</p>
        <p className="text-sm md:text-base lg:text-lg text-white m-3">해금된 특성 목록 {avatarInfo.inherentProudSkillList}</p>
      </div>
      <EquipComponent avatarInfo={avatarInfo} />
    </div>
  );
}
