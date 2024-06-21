import React from "react";
import { AvatarInfo } from "../types/avatarinfotypes";
import { useEquipFetch } from "../hooks/useEquipFetch";

interface Props {
  avatarInfo: AvatarInfo;
}

export default function EquipComponent({ avatarInfo }: Props): React.JSX.Element {
  const equipList = avatarInfo.equipList;
  // console.log("선택한 캐릭터 장비 리스트:", equipList);
  const { weapon, reliquary, isLoading } = useEquipFetch(equipList);
  console.log("weapon: ", weapon);
  console.log("reliquary: ", reliquary);

  return <div>hello</div>;
}
