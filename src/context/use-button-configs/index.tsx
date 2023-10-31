import { create } from "zustand";
import { ButtonConfigs, UseButtonConfigsType } from "./types";

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

export const useButtonConfigs = create<UseButtonConfigsType>((set) => ({
  ...sliderDefaultValues,
  setbackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setborderColor: (borderColor) => set({ borderColor }),
  setborderRadius: (borderRadius) => set({ borderRadius }),
  setborderWidth: (borderWidth) => set({ borderWidth }),
  setcolor: (color) => set({ color }),
  setfontSize: (fontSize) => set({ fontSize }),
  setfontWeight: (fontWeight) => set({ fontWeight }),
  setheight: (height) => set({ height }),
  setlabel: (label) => set({ label }),
  setwidth: (width) => set({ width }),
}));
