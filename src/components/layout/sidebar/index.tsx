import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pen } from "lucide-react";
import { FC, useMemo } from "react";
import { ButtonConfigSlider } from "./button-config-slider";
import {
  sliderDefaultValues,
  useButtonConfigs,
} from "@/context/use-button-configs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSliderConfigs } from "./hooks/use-slider-configs";
import { ColorPicker } from "./color-picker";

export const Sidebar: FC = () => {
  const { setlabel } = useButtonConfigs();

  const {
    borderRadiusSliderConfig,
    borderWidthSliderConfig,
    fontSizeSliderConfig,
    fontWeightSliderConfig,
    heightSliderConfig,
    widthSliderConfig,
  } = useSliderConfigs();

  const buttonConfigsSection = useMemo(
    () => (
      <section id="button-configs" className="space-y-3">
        <ButtonConfigSlider {...widthSliderConfig} />
        <ButtonConfigSlider {...heightSliderConfig} />
        <ButtonConfigSlider {...borderRadiusSliderConfig} />
        <ButtonConfigSlider {...fontSizeSliderConfig} />
        <ButtonConfigSlider {...fontWeightSliderConfig} />
        <ButtonConfigSlider {...borderWidthSliderConfig} />
      </section>
    ),
    [
      borderRadiusSliderConfig,
      borderWidthSliderConfig,
      fontSizeSliderConfig,
      fontWeightSliderConfig,
      heightSliderConfig,
      widthSliderConfig,
    ]
  );

  const colorPickersSection = useMemo(
    () => (
      <section id="color-pickers" className="flex flex-col gap-2 space-y-3">
        <ColorPicker colorPickerName="bg-color" title="Background Color" />
        <ColorPicker colorPickerName="border-color" title="Border Color" />
        <ColorPicker colorPickerName="text-color" title="Text Color" />
      </section>
    ),
    []
  );

  const labelInputSection = useMemo(
    () => (
      <section className="space-y-3">
        <div>
          <Label>Label</Label>
          <Input
            onChange={(value) => setlabel(value.target.value)}
            defaultValue={sliderDefaultValues.label}
          />
        </div>
      </section>
    ),
    [setlabel]
  );

  return (
    <aside className="w-80 space-y-6 flex gap-3">
      <form className="space-y-6 w-80">
        {labelInputSection}

        {buttonConfigsSection}

        {colorPickersSection}

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
