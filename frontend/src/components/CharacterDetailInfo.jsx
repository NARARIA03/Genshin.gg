import React from "react";
import { getAvatarGachaImg } from "../utils/handleImgUrl";
import EquipComponent from "./EquipComp";
import { getCharFightStats } from "../utils/handleFightProp";

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
              <div>
                <path
                  fill="currentColor"
                  d="M3.5 7.654a.978.978 0 0 1 .449-.571c1.51-.85 3.586 2.117 6.544.548 1.927 6.083-8.893 6.247-6.992.023zM7 14c-3.373 0-6.75-2.421-5.134-7.26A18.543 18.543 0 0 1 6.57.213.748.748 0 0 1 7 0a.751.751 0 0 1 .432.212 18.543 18.543 0 0 1 4.705 6.528C13.749 11.579 10.376 14 7 14zm.22-12.19A.639.639 0 0 0 7 1.735a.649.649 0 0 0-.22.075C5.07 3.134 2.7 7.092 2.839 9.21A4.019 4.019 0 0 0 7 12.753a4.019 4.019 0 0 0 4.162-3.538c.139-2.123-2.231-6.081-3.942-7.405Z"
                ></path>
                <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white m-1 p-1 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl">
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
