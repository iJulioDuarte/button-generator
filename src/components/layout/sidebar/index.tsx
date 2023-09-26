import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pen } from "lucide-react";
import { useState } from "react";
import { ButtonConfigs } from "./types";
import { ButtonConfigSlider } from "./button-config-slider";
import { ConfigSliderProps } from "./button-config-slider/types";

export const Sidebar = () => {
  const [buttonConfigs, setButtonConfigs] = useState<ButtonConfigs>();

  const widthSliderConfig: ConfigSliderProps = {
    label: "Width",
    sliderConfig: {
      min: 0,
      max: 400,
      step: 1,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, width: value[0] }));
      },
    },
    sliderDesc: `${buttonConfigs?.width ?? 0}px`,
  };

  return (
    <aside className="w-80 space-y-6">
      <form className="space-y-6">
        <ButtonConfigSlider {...widthSliderConfig} />

        <Separator />

        <Button className="w-full gap-2" type="button">
          <Pen className="w-4 h-4" />
          Gerar Código
        </Button>
      </form>
    </aside>
  );
};
