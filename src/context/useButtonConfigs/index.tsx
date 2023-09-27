import { create } from "zustand";
import { UseButtonConfigsType } from "./types";
import { ButtonConfigs } from "@/components/layout/sidebar/types";

export const sliderDefaultValues: ButtonConfigs = {
  label: "New Button",
  height: 30,
  width: 50,
  borderRadius: 10,
  fontSize: 12,
};

export const useButtonConfigs = create<UseButtonConfigsType>((set, get) => ({
  buttonConfigs: sliderDefaultValues,
  setButtonConfigs: (newConfig) =>
    typeof newConfig === "function"
      ? set({ buttonConfigs: newConfig(get().buttonConfigs) })
      : set({ buttonConfigs: newConfig }),
}));
