import React, { useEffect, useState } from "react";
import { AvatarInfo } from "../types/avatarinfotypes";
import { useEquipFetch } from "../hooks/useEquipFetch";
import RenderDetailInfo from "./equipdetailinfo";

interface Props {
  avatarInfo: AvatarInfo;
}

export default function EquipComponent({ avatarInfo }: Props): React.JSX.Element {
  const [actionIdx, setActionIdx] = useState<number | null>(null);

  const handleEnter = (idx: number): void => {
    setActionIdx(idx);
  };

  const handleLeave = (): void => {
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
    <div className="w-full">
      <div className="absolute top-4 right-[10%] md:top-[30rem]">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center items-center relative" onMouseEnter={() => handleEnter(0)} onMouseLeave={handleLeave}>
            {weapon && (
              <img
                src={weapon.icon}
                alt={weapon.name}
                className="md:w-14 w-10 my-1 border-2 border-gray-600 bg-gray-800 rounded-full shadow-2xl"
              />
            )}
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
                  <img
                    src={e.icon}
                    alt={e.name}
                    className="md:w-14 w-10 my-1 border-2 border-gray-600 bg-gray-800 rounded-full shadow-2xl"
                  />
                  <RenderDetailInfo item={e} idx={i + 1} actionIdx={actionIdx} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
