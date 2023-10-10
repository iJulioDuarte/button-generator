import {
  sliderDefaultValues,
  useButtonConfigs,
} from "@/context/use-button-configs";
import { ConfigSliderProps } from "../../button-config-slider/types";

export const useSliderConfigs = () => {
  const { buttonConfigs, setButtonConfigs } = useButtonConfigs();

  const widthSliderConfig: ConfigSliderProps = {
    label: "Width",
    sliderConfig: {
      min: 1,
      max: 1000,
      step: 1,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, width: value[0] }));
      },
      defaultValue: [sliderDefaultValues.width ?? 0],
    },
    sliderDesc: `${buttonConfigs?.width ?? 0}px`,
  };

  const heightSliderConfig: ConfigSliderProps = {
    label: "Height",
    sliderConfig: {
      min: 1,
      max: 1000,
      step: 1,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, height: value[0] }));
      },
      defaultValue: [sliderDefaultValues.height ?? 0],
    },
    sliderDesc: `${buttonConfigs?.height ?? 0}px`,
  };

  const borderRadiusSliderConfig: ConfigSliderProps = {
    label: "Border Radius",
    sliderConfig: {
      min: 1,
      max: 300,
      step: 1,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, borderRadius: value[0] }));
      },
      defaultValue: [sliderDefaultValues.borderRadius ?? 0],
    },
    sliderDesc: `${buttonConfigs?.borderRadius ?? 0}px`,
  };

  const fontSizeSliderConfig: ConfigSliderProps = {
    label: "Font Size",
    sliderConfig: {
      min: 1,
      max: 100,
      step: 1,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, fontSize: value[0] }));
      },
      defaultValue: [sliderDefaultValues.fontSize ?? 0],
    },
    sliderDesc: `${buttonConfigs?.fontSize ?? 0}px`,
  };

  const fontWeightSliderConfig: ConfigSliderProps = {
    label: "Font Weight",
    sliderConfig: {
      min: 100,
      max: 900,
      step: 100,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, fontWeight: value[0] }));
      },
      defaultValue: [sliderDefaultValues.fontWeight ?? 0],
    },
    sliderDesc: `${buttonConfigs?.fontWeight ?? 0}`,
  };

  const borderWidthSliderConfig: ConfigSliderProps = {
    label: "Border Width",
    sliderConfig: {
      min: 0,
      max: 25,
      step: 1,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, borderWidth: value[0] }));
      },
      defaultValue: [sliderDefaultValues.borderWidth ?? 0],
    },
    sliderDesc: `${buttonConfigs?.borderWidth ?? 0}px`,
  };

  return {
    widthSliderConfig,
    heightSliderConfig,
    borderRadiusSliderConfig,
    fontSizeSliderConfig,
    fontWeightSliderConfig,
    borderWidthSliderConfig,
  };
};
