import React from "react";
import { Reliquary, Weapon } from "../types/equiptypes";
import { ReliquarySubstat, WeaponStat } from "../types/avatarinfotypes";

interface Props {
  item: Reliquary | Weapon;
  actionIdx: number | null;
  idx: number;
}

export default function RenderDetailInfo({ item, actionIdx, idx }: Props): React.JSX.Element | undefined {
  if (actionIdx === idx) {
    if (item.itemType === "ITEM_WEAPON") {
      return (
        <div className="absolute w-52 bg-gray-700 p-2 rounded md:right-0 md:bottom-20 right-14 bottom-2 shadow-2xl">
          <div className="flex items-center mb-1">
            <p className="text-sm text-white pr-2">{item.name}</p>
            <p className="text-xs text-white">({item.rankLevel}성)</p>
          </div>
          <p className="text-xs text-white">무기 LV {item.level}</p>
          <p className="text-xs text-white">돌파 LV {item.promoteLevel}</p>

          <div className="flex flex-col justify-center mt-1">
            {item.weaponStats.map((e: WeaponStat) => {
              return (
                <p className="text-xs text-custom-white">
                  {e.appendPropId}: {e.statValue}
                </p>
              );
            })}
          </div>
        </div>
      );
    } else if (item.itemType === "ITEM_RELIQUARY") {
      return (
        <div className="absolute w-60 bg-gray-700 p-2 rounded md:right-0 md:bottom-20 right-14 bottom-2 shadow-2xl">
          <div className="flex items-center mb-1">
            <p className="text-sm text-white pr-2">{item.name}</p>
            <p className="text-xs text-white">({item.rankLevel}성)</p>
          </div>
          <p className="text-xs text-white">성유물 LV {item.level}</p>
          <p className="text-sm text-white mt-1 font-bold">
            {item.reliquaryMainStat.mainPropId}: {item.reliquaryMainStat.statValue}
          </p>
          <div className="flex flex-col justify-center mt-1">
            {item.reliquarySubStats.map((e: ReliquarySubstat) => {
              return (
                <p className="text-xs text-custom-white">
                  {e.appendPropId}: {e.statValue}
                </p>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
