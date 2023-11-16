import {
  sliderDefaultValues,
  useButtonConfigs,
} from "@/context/use-button-configs";
import { ConfigSliderProps } from "../../button-config-slider/types";
import { useMemo } from "react";

export const useSliderConfigs = () => {
  const {
    setBorderRadius,
    setBorderWidth,
    setFontSize,
    setFontWeight,
    setHeight,
    setWidth,
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
          setWidth(value[0]);
        },
        defaultValue: [sliderDefaultValues.width ?? 0],
      },
      sliderDesc: `${width ?? 0}px`,
    }),
    [setWidth, width]
  );

  const heightSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Height",
      sliderConfig: {
        min: 1,
        max: 1000,
        step: 1,
        onValueChange: (value) => {
          setHeight(value[0]);
        },
        defaultValue: [sliderDefaultValues.height ?? 0],
      },
      sliderDesc: `${height ?? 0}px`,
    }),
    [height, setHeight]
  );

  const borderRadiusSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Border Radius",
      sliderConfig: {
        min: 1,
        max: 300,
        step: 1,
        onValueChange: (value) => {
          setBorderRadius(value[0]);
        },
        defaultValue: [sliderDefaultValues.borderRadius ?? 0],
      },
      sliderDesc: `${borderRadius ?? 0}px`,
    }),
    [borderRadius, setBorderRadius]
  );

  const fontSizeSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Font Size",
      sliderConfig: {
        min: 1,
        max: 100,
        step: 1,
        onValueChange: (value) => {
          setFontSize(value[0]);
        },
        defaultValue: [sliderDefaultValues.fontSize ?? 0],
      },
      sliderDesc: `${fontSize ?? 0}px`,
    }),
    [fontSize, setFontSize]
  );

  const fontWeightSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Font Weight",
      sliderConfig: {
        min: 100,
        max: 900,
        step: 100,
        onValueChange: (value) => {
          setFontWeight(value[0]);
        },
        defaultValue: [sliderDefaultValues.fontWeight ?? 0],
      },
      sliderDesc: `${fontWeight ?? 0}`,
    }),
    [fontWeight, setFontWeight]
  );

  const borderWidthSliderConfig: ConfigSliderProps = useMemo(
    () => ({
      label: "Border Width",
      sliderConfig: {
        min: 0,
        max: 25,
        step: 1,
        onValueChange: (value) => {
          setBorderWidth(value[0]);
        },
        defaultValue: [sliderDefaultValues.borderWidth ?? 0],
      },
      sliderDesc: `${borderWidth ?? 0}px`,
    }),
    [borderWidth, setBorderWidth]
  );

  const sliderConfigs = useMemo(
    () => [
      widthSliderConfig,
      heightSliderConfig,
      borderRadiusSliderConfig,
      fontSizeSliderConfig,
      fontWeightSliderConfig,
      borderWidthSliderConfig,
    ],
    [
      borderRadiusSliderConfig,
      borderWidthSliderConfig,
      fontSizeSliderConfig,
      fontWeightSliderConfig,
      heightSliderConfig,
      widthSliderConfig,
    ]
  );
  return {
    sliderConfigs,
  };
};
