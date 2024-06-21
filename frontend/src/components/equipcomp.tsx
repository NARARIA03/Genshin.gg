import React, { useState } from "react";
import { AvatarInfo } from "../types/avatarinfotypes";
import { useEquipFetch } from "../hooks/useEquipFetch";

interface Props {
  avatarInfo: AvatarInfo;
}

export default function EquipComponent({ avatarInfo }: Props): React.JSX.Element {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const equipList = avatarInfo.equipList;
  const { weapon, reliquary, isLoading } = useEquipFetch(equipList);
  console.log("weapon: ", weapon);
  console.log("reliquary: ", reliquary);

  return (
    <div className="w-full h-full relative">
      <div className="absolute bottom-10">
        <div className="flex justify-center  items-center">
          <img src={weapon?.icon} alt={weapon?.name} className="lg:w-16 md:w-12 sm:w-10 w-6" />
          {reliquary?.map((e) => {
            return <img src={e.icon} alt={e.name} className="lg:w-16 md:w-12 sm:w-10 w-6" />;
          })}
        </div>
      </div>
    </div>
  );
}
