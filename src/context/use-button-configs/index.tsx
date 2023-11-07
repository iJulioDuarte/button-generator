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
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setBorderColor: (borderColor) => set({ borderColor }),
  setBorderRadius: (borderRadius) => set({ borderRadius }),
  setBorderWidth: (borderWidth) => set({ borderWidth }),
  setColor: (color) => set({ color }),
  setFontSize: (fontSize) => set({ fontSize }),
  setFontWeight: (fontWeight) => set({ fontWeight }),
  setHeight: (height) => set({ height }),
  setLabel: (label) => set({ label }),
  setWidth: (width) => set({ width }),
}));
