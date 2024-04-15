import { atom } from "recoil";

export const uidState = atom({
  key: "uidState",
  default: "",
});

export const profileState = atom({
  key: "profileState",
  default: "",
});

export const avatarInfoListState = atom({
  key: "avatarInfoListState",
  default: [],
});
