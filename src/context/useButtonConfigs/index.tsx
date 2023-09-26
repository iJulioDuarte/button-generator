import { create } from "zustand";
import { UseButtonConfigsType } from "./types";

export const useButtonConfigs = create<UseButtonConfigsType>((set, get) => ({
  buttonConfigs: {},
  setButtonConfigs: (newConfig) =>
    typeof newConfig === "function"
      ? set({ buttonConfigs: newConfig(get().buttonConfigs) })
      : set({ buttonConfigs: newConfig }),
}));
