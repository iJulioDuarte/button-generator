export type ConfigSliderProps = {
  label: string;
  sliderConfig: {
    min: number;
    max: number;
    step: number;
    onValueChange?(value: number[]): void;
  };
  sliderDesc?: string;
};
