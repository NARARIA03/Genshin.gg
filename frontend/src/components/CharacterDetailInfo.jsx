import React from "react";
import { getAvatarGachaImg } from "../utils/handleImgUrl";
import EquipComponent from "./EquipComp";
import { getCharFightStats } from "../utils/handleFightProp";
import { ReactComponent as DefIcon } from "../assets/def.svg";

export default function CharacterDetailInfo({ avatarInfo }) {
  const avatarImgUrl = getAvatarGachaImg(avatarInfo?.avatarId);
  // test용
  const charFightStatsList = getCharFightStats(avatarInfo.avatarId, avatarInfo.fightPropMap);

  console.log("Gacha img url: ", avatarImgUrl);
  return (
    <div className="w-full h-[35rem] relative border border-gray-700 bg-gray-800  rounded-3xl">
      <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-3xl p-8 px-10">
        <img src={avatarImgUrl} className="w-full h-full object-cover opacity-70 py-8 scale-125 rounded-3xl " alt="Avatar image" />
      </div>
      <div className="flex h-full flex-col justify-start items-start  mt-4 absolute top-1 left-[10%]">
        <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white m-1 p-1 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl">
          LV {avatarInfo.level} {avatarInfo.name}
        </p>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white m-1 p-1 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl">
          호감도 {avatarInfo.fetterInfo.expLevel}
        </p>
        {charFightStatsList.map((data) => {
          if (data.key === "elementalDmgBonus" && data.value === 0) {
            return;
          } else if (data.isPercent) {
            return (
              <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white m-1 p-1 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl">
                {data.description} {data.value.toFixed(1)}%
              </p>
            );
          } else {
            return (
              <div className="flex">
                <p className="flex text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white m-1 p-1 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl">
                  <DefIcon fill="#f2f2f2" width="20px" className="m-1" />
                  {data.description} {data.value}
                </p>
              </div>
            );
          }
        })}
      </div>
      <EquipComponent avatarInfo={avatarInfo} />
    </div>
  );
}
