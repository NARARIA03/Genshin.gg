import React, { useEffect, useState } from "react";
import { AvatarInfo } from "../types/avatarinfotypes";
import { Reliquary, Weapon } from "../types/equiptypes";
import { useEquipFetch } from "../hooks/useEquipFetch";

interface Props {
  avatarInfo: AvatarInfo;
}

export default function EquipComponent({ avatarInfo }: Props): React.JSX.Element {
  const [actionIdx, setActionIdx] = useState<number | null>(null);

  const handleEnter = (idx: number) => {
    setActionIdx(idx);
  };

  const handleLeave = () => {
    setActionIdx(null);
  };

  const renderDetailInfo = (item: Reliquary | Weapon, idx: number): React.JSX.Element | undefined => {
    if (actionIdx === idx) {
      if (item.itemType === "ITEM_WEAPON") {
        return (
          <div className="absolute w-52 bg-gray-700 p-2 rounded bottom-20 shadow-2xl">
            <div className="flex items-center mb-1">
              <p className="text-sm text-white pr-2">{item.name}</p>
              <p className="text-xs text-white">({item.rankLevel}성 무기)</p>
            </div>
            <p className="text-sm text-white">무기 LV {item.level}</p>
            <p className="text-sm text-white">무기돌파 LV {item.promoteLevel}</p>
          </div>
        );
      } else if (item.itemType === "ITEM_RELIQUARY") {
        return (
          <div className="absolute w-52 bg-gray-700 p-2 rounded bottom-20 shadow-2xl">
            <div className="flex items-center mb-1">
              <p className="text-sm text-white pr-2">{item.name}</p>
              <p className="text-xs text-white">({item.rankLevel}성 성유물)</p>
            </div>
            <p className="text-sm text-white">성유물 LV {item.level}</p>
          </div>
        );
      }
    }
  };

  const equipList = avatarInfo.equipList;
  const { weapon, reliquary } = useEquipFetch(equipList);
  console.log("weapon: ", weapon);
  console.log("reliquary: ", reliquary);

  useEffect(() => {
    console.log("actionIdx: ", actionIdx);
  }, [actionIdx]);

  return (
    <div className="w-full h-full relative">
      <div className="absolute bottom-10">
        <div className="flex">
          <div className="flex justify-center items-center relative" onMouseEnter={() => handleEnter(0)} onMouseLeave={handleLeave}>
            {weapon && <img src={weapon.icon} alt={weapon.name} className="lg:w-16 md:w-12 sm:w-10 w-6" />}
            {weapon && renderDetailInfo(weapon, 0)}
          </div>

          {reliquary &&
            reliquary.map((e, i) => {
              return (
                <div
                  key={i + 1}
                  className="flex justify-center items-center relative"
                  onMouseEnter={() => handleEnter(i + 1)}
                  onMouseLeave={handleLeave}
                >
                  <img src={e.icon} alt={e.name} className="lg:w-16 md:w-12 sm:w-10 w-6" />
                  {renderDetailInfo(e, i + 1)}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
