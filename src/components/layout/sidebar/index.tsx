import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pen } from "lucide-react";
import { FC } from "react";
import { ButtonConfigSlider } from "./button-config-slider";
import { ConfigSliderProps } from "./button-config-slider/types";
import { useButtonConfigs } from "@/context/useButtonConfigs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  const borderRadiusSliderConfig: ConfigSliderProps = {
    label: "Border Radius",
    sliderConfig: {
      min: 0,
      max: 50,
      step: 1,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, borderRadius: value[0] }));
      },
    },
    sliderDesc: `${buttonConfigs?.borderRadius ?? 0}px`,
  };

  return (
    <aside className="w-80 space-y-6 flex gap-3">
      <form className="space-y-6 w-80">
        <Label>Label</Label>
        <Input
          onChange={(value) => setButtonConfigs({ label: value.target.value })}
        />
        <ButtonConfigSlider {...widthSliderConfig} />
        <ButtonConfigSlider {...heightSliderConfig} />
        <ButtonConfigSlider {...borderRadiusSliderConfig} />

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
