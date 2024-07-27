import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const uidState = atom({
  key: "uidState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const profileState = atom({
  key: "profileState",
  default: "",
});

export const avatarInfoListState = atom({
  key: "avatarInfoListState",
  default: [],
});
