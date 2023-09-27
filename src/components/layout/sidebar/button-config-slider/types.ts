import { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";

type SliderProps = Omit<
  RadixSliderProps & React.RefAttributes<HTMLSpanElement>,
  "ref"
>;

export type ConfigSliderProps = {
  label: string;
  sliderConfig: SliderProps;
  sliderDesc?: string;
};
