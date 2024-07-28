import React from "react";
import { getAvatarGachaImg } from "../utils/handleImgUrl";
import EquipComponent from "./EquipComp";
import { getCharFightStats } from "../utils/handleFightProp";
import FightPropComponent from "./FightPropComp";
import { ReactComponent as FrendshipLvIcon } from "../assets/friendshipLv.svg";

export default function CharacterDetailInfo({ avatarInfo }) {
  const avatarImgUrl = getAvatarGachaImg(avatarInfo?.avatarId);
  const charFightStatsList = getCharFightStats(avatarInfo.avatarId, avatarInfo.fightPropMap);

  console.log("Gacha img url: ", avatarImgUrl);
  return (
    <div className="w-full h-[35rem] relative border border-gray-700 bg-gray-800  rounded-3xl">
      <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-3xl p-8 px-10">
        <img src={avatarImgUrl} className="w-full h-full object-cover opacity-70 py-8 scale-125 rounded-3xl " alt="Avatar image" />
      </div>
      <div className="flex h-full flex-col justify-start items-start  mt-4 absolute top-1 left-[10%]">
        <p className="flex items-center text-md sm:text-lg lg:text-xl xl:text-2xl text-white m-1 p-1 px-2 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl">
          LV {avatarInfo.level} {avatarInfo.name}
        </p>
        <p className="flex items-center text-[0.6rem] sm:text-sm lg:text-md xl:text-lg text-white m-1 p-1 pr-2 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl">
          <FrendshipLvIcon className="w-2 sm:w-3 md:w-4 lg:w-5  m-1 mr-4" fill="#FFF" /> 호감도 {avatarInfo.fetterInfo.expLevel}
        </p>
        <FightPropComponent charFightStatsList={charFightStatsList} />
      </div>
      <EquipComponent avatarInfo={avatarInfo} />
    </div>
  );
}
