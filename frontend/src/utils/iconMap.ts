import React from "react";
import { ReactComponent as HpIcon } from "../assets/hp.svg";
import { ReactComponent as AtkIcon } from "../assets/atk.svg";
import { ReactComponent as DefIcon } from "../assets/def.svg";
import { ReactComponent as ElementalMasteryIcon } from "../assets/elementMastery.svg";
import { ReactComponent as CritRateIcon } from "../assets/critRate.svg";
import { ReactComponent as CritDmgIcon } from "../assets/critDmg.svg";
import { ReactComponent as RechargeRateIcon } from "../assets/rechargeRate.svg";
import { ReactComponent as IceIcon } from "../assets/ice.svg";
import { ReactComponent as FireIcon } from "../assets/fire.svg";
import { ReactComponent as WindIcon } from "../assets/wind.svg";
import { ReactComponent as WaterIcon } from "../assets/water.svg";
import { ReactComponent as ElectricIcon } from "../assets/electric.svg";
import { ReactComponent as RockIcon } from "../assets/rock.svg";
import { ReactComponent as GrassIcon } from "../assets/grass.svg";
import { ReactComponent as PhysicalIcon } from "../assets/physical.svg";

export const iconMapping: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  hp: HpIcon,
  atk: AtkIcon,
  def: DefIcon,
  elementalMastery: ElementalMasteryIcon,
  critRate: CritRateIcon,
  critDmg: CritDmgIcon,
  rechargeRate: RechargeRateIcon,
  ice: IceIcon,
  fire: FireIcon,
  wind: WindIcon,
  water: WaterIcon,
  electric: ElectricIcon,
  rock: RockIcon,
  grass: GrassIcon,
  physical: PhysicalIcon,
};
