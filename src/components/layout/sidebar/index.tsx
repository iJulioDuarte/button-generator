import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pen } from "lucide-react";
import { FC } from "react";
import { ButtonConfigSlider } from "./button-config-slider";
import { ConfigSliderProps } from "./button-config-slider/types";
import {
  sliderDefaultValues,
  useButtonConfigs,
} from "@/context/useButtonConfigs";
import { SketchPicker } from "react-color";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Sidebar: FC = () => {
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
      max: 50,
      step: 1,
      onValueChange: (value) => {
        setButtonConfigs((v) => ({ ...v, fontSize: value[0] }));
      },
      defaultValue: [sliderDefaultValues.fontSize ?? 0],
    },
    sliderDesc: `${buttonConfigs?.fontSize ?? 0}px`,
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

  return (
    <aside className="w-80 space-y-6 flex gap-3">
      <form className="space-y-6 w-80">
        <Label>Label</Label>
        <Input
          onChange={(value) =>
            setButtonConfigs((v) => ({ ...v, label: value.target.value }))
          }
          defaultValue={sliderDefaultValues.label}
        />
        <ButtonConfigSlider {...widthSliderConfig} />
        <ButtonConfigSlider {...heightSliderConfig} />
        <ButtonConfigSlider {...borderRadiusSliderConfig} />
        <ButtonConfigSlider {...fontSizeSliderConfig} />
        <ButtonConfigSlider {...borderWidthSliderConfig} />

        <Popover>
          <PopoverTrigger>Background Color</PopoverTrigger>
          <PopoverContent>
            <SketchPicker
              color={sliderDefaultValues.backgroundColor}
              onChange={(value) =>
                setButtonConfigs((v) => ({ ...v, backgroundColor: value.hex }))
              }
              onChangeComplete={(value) =>
                setButtonConfigs((v) => ({ ...v, backgroundColor: value.hex }))
              }
              onSwatchHover={(value) =>
                setButtonConfigs((v) => ({ ...v, backgroundColor: value.hex }))
              }
              disableAlpha
            />
          </PopoverContent>
        </Popover>

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
