import React from "react";
import { CharFightStats } from "../types/fightPropTypes";
import { iconMapping } from "../utils/iconMap";

interface Props {
  charFightStatsList: CharFightStats[];
}

export default function FightPropComponent({ charFightStatsList = [] }: Props): React.JSX.Element {
  return (
    <>
      {charFightStatsList.map((data, idx) => {
        const Icon = data.element ? iconMapping[data.element] : iconMapping[data.key];
        const isPercentage = ["critRate", "critDmg", "rechargeRate", "elementalDmgBonus"].includes(data.key);

        if (!Icon) {
          return;
        } else {
          return (
            <p
              key={idx}
              className="flex items-center text-[0.6rem] sm:text-sm lg:text-md xl:text-lg text-white m-1 p-1 pr-2 border border-gray-700 bg-gray-800 rounded-xl shadow-2xl"
            >
              <Icon className="w-2 sm:w-3 md:w-4 lg:w-5  m-1 mr-4" fill="#FFF" />
              {data.description} {isPercentage ? data.value.toFixed(1) + "%" : data.value.toLocaleString()}
            </p>
          );
        }
      })}
    </>
  );
}
