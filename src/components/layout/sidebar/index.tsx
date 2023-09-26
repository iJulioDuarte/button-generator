import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pen } from "lucide-react";
import { FC } from "react";
import { ButtonConfigSlider } from "./button-config-slider";
import { ConfigSliderProps } from "./button-config-slider/types";
import { useButtonConfigs } from "@/context/useButtonConfigs";

export const Sidebar: FC = () => {
  const { buttonConfigs, setButtonConfigs } = useButtonConfigs();

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

  const heightSliderConfig: ConfigSliderProps = {
    label: "Height",
    sliderConfig: {
      min: 0,
      max: 400,
      step: 1,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, height: value[0] }));
      },
    },
    sliderDesc: `${buttonConfigs?.height ?? 0}px`,
  };

  return (
    <aside className="w-80 space-y-6 flex gap-3">
      <form className="space-y-6 w-80">
        <ButtonConfigSlider {...widthSliderConfig} />
        <ButtonConfigSlider {...heightSliderConfig} />

        <Separator />

        <Button className="w-full gap-2" type="button">
          <Pen className="w-4 h-4" />
          Gerar Código
        </Button>
      </form>
      <Separator orientation="vertical" className="h-full" />
    </aside>
  );
};
