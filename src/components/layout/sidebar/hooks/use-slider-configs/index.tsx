import {
  sliderDefaultValues,
  useButtonConfigs,
} from "@/context/use-button-configs";
import { ConfigSliderProps } from "../../button-config-slider/types";
import { useMemo } from "react";

export const useSliderConfigs = () => {
  const {
    setborderRadius,
    setborderWidth,
    setfontSize,
    setfontWeight,
    setheight,
    setwidth,
    borderRadius,
    borderWidth,
    fontSize,
    fontWeight,
    height,
    width,
  } = useButtonConfigs();

  const widthSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Width",
      sliderConfig: {
        min: 1,
        max: 1000,
        step: 1,
        onValueChange: (value) => {
          setwidth(value[0]);
        },
        defaultValue: [sliderDefaultValues.width ?? 0],
      },
      sliderDesc: `${width ?? 0}px`,
    }),
    [setwidth, width]
  );

  const heightSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Height",
      sliderConfig: {
        min: 1,
        max: 1000,
        step: 1,
        onValueChange: (value) => {
          setheight(value[0]);
        },
        defaultValue: [sliderDefaultValues.height ?? 0],
      },
      sliderDesc: `${height ?? 0}px`,
    }),
    [height, setheight]
  );

  const borderRadiusSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Border Radius",
      sliderConfig: {
        min: 1,
        max: 300,
        step: 1,
        onValueChange: (value) => {
          setborderRadius(value[0]);
        },
        defaultValue: [sliderDefaultValues.borderRadius ?? 0],
      },
      sliderDesc: `${borderRadius ?? 0}px`,
    }),
    [borderRadius, setborderRadius]
  );

  const fontSizeSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Font Size",
      sliderConfig: {
        min: 1,
        max: 100,
        step: 1,
        onValueChange: (value) => {
          setfontSize(value[0]);
        },
        defaultValue: [sliderDefaultValues.fontSize ?? 0],
      },
      sliderDesc: `${fontSize ?? 0}px`,
    }),
    [fontSize, setfontSize]
  );

  const fontWeightSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Font Weight",
      sliderConfig: {
        min: 100,
        max: 900,
        step: 100,
        onValueChange: (value) => {
          setfontWeight(value[0]);
        },
        defaultValue: [sliderDefaultValues.fontWeight ?? 0],
      },
      sliderDesc: `${fontWeight ?? 0}`,
    }),
    [fontWeight, setfontWeight]
  );

  const borderWidthSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Border Width",
      sliderConfig: {
        min: 0,
        max: 25,
        step: 1,
        onValueChange: (value) => {
          setborderWidth(value[0]);
        },
        defaultValue: [sliderDefaultValues.borderWidth ?? 0],
      },
      sliderDesc: `${borderWidth ?? 0}px`,
    }),
    [borderWidth, setborderWidth]
  );

  return {
    widthSliderConfig,
    heightSliderConfig,
    borderRadiusSliderConfig,
    fontSizeSliderConfig,
    fontWeightSliderConfig,
    borderWidthSliderConfig,
  };
};
