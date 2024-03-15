import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const uidState = atom({
  key: "uidState",
  default: "",
  effects_UNSTABLE: [persistAtom], // 새로고침을 해도 정상 작동하도록 persistAtom으로 적용했다 (asyncstorage와 유사한 개념?)
});

export const profileState = atom({
  key: "profileState",
  default: "",
  effects_UNSTABLE: [persistAtom], // 새로고침을 해도 정상 작동하도록 persistAtom으로 적용했다 (asyncstorage와 유사한 개념?)
});
