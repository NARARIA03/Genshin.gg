export interface CharactersJson {
  // Index Signature type
  [key: string]: CharactersDetailInfo;
}

interface CharactersDetailInfo {
  Element: string;
  Consts: string[];
  SkillOrder: number[];
  Skills: Skills;
  ProudMap: ProudMap;
  NameTextMapHash: number;
  SideIconName: string;
  QualityType: string;
  WeaponType?: string;
  Costumes?: Costumes;
}

interface Skills {
  [key: string]: string;
}

interface ProudMap {
  [key: string]: number;
}

interface Costumes {
  [key: string]: CostumeDetailinfo;
}

interface CostumeDetailinfo {
  sideIconName: string;
  icon: string;
  art: string;
  avatarId: number;
}
