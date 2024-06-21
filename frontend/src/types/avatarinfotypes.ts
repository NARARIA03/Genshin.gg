export interface AvatarInfo {
  avatarId: number;
  talentIdList: number[]; // 운명의 자리 목록
  propMap: {}; // 캐릭터 속성 맵
  fightPropMap: {}; // 캐릭터 전투 능력치에 대한 맵
  skillDepotId: number; // 캐릭터 스킬셋 ID, 이걸로 캐릭터 스킬 셋 찾기 가능
  inherentProudSkillList: number[]; // 해금 특성 목록
  skillLevelMap: {}; // 스킬 레벨 맵, id: level 구조
  equipList: Equip[]; // 장착 무기, 성유물 리스트
  fetterInfo: FetterInfo; // 캐릭터 호감도 레벨
}

export interface FetterInfo {
  expLevel: number;
}

export interface Equip {
  itemId: number;
  weapon?: Weapon;
  reliquary?: Reliquary;
  flat: Flat;
  name?: string;
}

export interface Weapon {
  level: number; // 무기 레벨
  promoteLevel: number; // 무기 돌파 레벨
  affixMap: {}; // 무기 제련 레벨
}

export interface Reliquary {
  level: number;
  mainPropId: number;
  appendPropIdList: number[];
}

export interface Flat {
  nameTextMapHash: string; // 장비 이름 확인용
  rankLevel: number; // 장비 등급 (n성)
  icon: string;
  itemType: string; // 무기인지 성유물인지 구분
  equipType?: string; // 성유물 부위
  setNameTextMapHash?: string; // 성유물 세트 이름 확인용
  reliquaryMainstat?: reliquaryMainstat; // 성유물 주스텟
  reliquarySubstats?: reliquarySubstat[]; // 성유물 부스텟들
  weaponStats?: weaponStat[];
}

// 성유물 주스텟 값
export interface reliquaryMainstat {
  mainPropId: string;
  statValue: number;
}

// 성유물 부스텟 값
export interface reliquarySubstat {
  appendPropId: string;
  statValue: number;
}

// 무기 스텟 값
export interface weaponStat {
  appendPropId: string;
  statValue: number;
}
