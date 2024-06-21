import { Equip } from "../types/avatarinfotypes";
import qs from "qs";
import axios from "axios";
import { Weapon, Reliquary } from "../types/equiptypes";
import { useEffect, useState } from "react";

interface Return {
  weapon: Weapon | null;
  reliquary: Reliquary[] | null;
  isLoading: boolean;
}

export const useEquipFetch = (equipList: Equip[]): Return => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weapon, setWeapon] = useState<Weapon | null>(null);
  const [reliquary, setReliquary] = useState<Reliquary[] | null>(null);

  useEffect(() => {
    const hashMapList = equipList.map((e) => {
      return e.flat.nameTextMapHash;
    });
    const queryString = qs.stringify({ hashMapList: hashMapList }, { indices: false });
    const API_URL = `${process.env.REACT_APP_API_URL}/getequipname?${queryString}`;
    axios
      .get(API_URL)
      .then((res) => {
        const names: string[] = res.data;
        const newEquipList = equipList.map((e, i) => {
          if (e.flat.itemType === "ITEM_RELIQUARY") {
            return {
              itemType: e.flat.itemType,
              name: names[i],
              icon: `https://enka.network/ui/${e.flat.icon}.png`,
              rankLevel: e.flat.rankLevel,
              level: e.reliquary?.level,
            };
          } else {
            return {
              itemType: e.flat.itemType,
              name: names[i],
              icon: `https://enka.network/ui/${e.flat.icon}.png`,
              rankLevel: e.flat.rankLevel,
              level: e.weapon?.level,
              promoteLevel: e.weapon?.promoteLevel,
            };
          }
        });
        console.log(newEquipList);
        const weapon = newEquipList.filter((e) => e.itemType === "ITEM_WEAPON") as Weapon[];
        const reliquary = newEquipList.filter((e) => e.itemType === "ITEM_RELIQUARY") as Reliquary[];
        setWeapon(weapon[0]);
        setReliquary(reliquary);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, [equipList]);
  return { weapon, reliquary, isLoading };
};
