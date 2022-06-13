import { atom } from "recoil";

export const userTokenAtom = atom({
  key: "userToken",
  default: null,
});

export const userAtom = atom({
  key: "userAtom",
  default: null,
});
