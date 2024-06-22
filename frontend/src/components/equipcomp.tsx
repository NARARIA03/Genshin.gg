import React, { useEffect, useState } from "react";
import { AvatarInfo } from "../types/avatarinfotypes";
import { useEquipFetch } from "../hooks/useEquipFetch";
import RenderDetailInfo from "./equipdetailinfo";

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
            {weapon && <RenderDetailInfo item={weapon} idx={0} actionIdx={actionIdx} />}
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
                  <RenderDetailInfo item={e} idx={i + 1} actionIdx={actionIdx} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
