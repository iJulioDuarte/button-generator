import { create } from "zustand";
import { UseButtonConfigsType } from "./types";
import { ButtonConfigs } from "@/components/layout/sidebar/types";

export const sliderDefaultValues: ButtonConfigs = {
  label: "New Button",
  height: 50,
  width: 140,
  borderRadius: 14,
  fontSize: 12,
  fontWeight: 300,
  borderWidth: 1,
  backgroundColor: "#000",
};

export const useButtonConfigs = create<UseButtonConfigsType>((set, get) => ({
  buttonConfigs: sliderDefaultValues,
  setButtonConfigs: (newConfig) =>
    typeof newConfig === "function"
      ? set({ buttonConfigs: newConfig(get().buttonConfigs) })
      : set({ buttonConfigs: newConfig }),
}));
