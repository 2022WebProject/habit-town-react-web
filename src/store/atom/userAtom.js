import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userTokenAtom = atom({
  key: "userToken",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const userAtom = atom({
  key: "userAtom",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
