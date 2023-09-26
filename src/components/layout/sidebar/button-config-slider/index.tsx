import { FC } from "react";
import { ConfigSliderProps } from "./types";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const ButtonConfigSlider: FC<ConfigSliderProps> = (props) => {
  const { label, sliderConfig, sliderDesc } = props;

  return (
    <div className="flex flex-col w-full gap-1 justify-end">
      <div id="width-slider" className="space-y-2">
        <Label>{label}</Label>
        <Slider {...sliderConfig} />
      </div>
      {sliderDesc && <span className="w-full text-right">{sliderDesc}</span>}
    </div>
  );
};
