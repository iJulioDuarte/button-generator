import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pen } from "lucide-react";
import { FC } from "react";
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
  const { setButtonConfigs } = useButtonConfigs();

  const {
    borderRadiusSliderConfig,
    borderWidthSliderConfig,
    fontSizeSliderConfig,
    fontWeightSliderConfig,
    heightSliderConfig,
    widthSliderConfig,
  } = useSliderConfigs();

  return (
    <aside className="w-80 space-y-6 flex gap-3">
      <form className="space-y-6 w-80">
        <section className="space-y-3">
          <div>
            <Label>Label</Label>
            <Input
              onChange={(value) =>
                setButtonConfigs((v) => ({ ...v, label: value.target.value }))
              }
              defaultValue={sliderDefaultValues.label}
            />
          </div>
        </section>
        <section id="button-configs" className="space-y-3">
          <ButtonConfigSlider {...widthSliderConfig} />
          <ButtonConfigSlider {...heightSliderConfig} />
          <ButtonConfigSlider {...borderRadiusSliderConfig} />
          <ButtonConfigSlider {...fontSizeSliderConfig} />
          <ButtonConfigSlider {...fontWeightSliderConfig} />
          <ButtonConfigSlider {...borderWidthSliderConfig} />
        </section>

        <section id="color-pickers" className="flex flex-col gap-2 space-y-3">
          <ColorPicker colorPickerName="bg-color" title="Background Color" />
          <ColorPicker colorPickerName="border-color" title="Border Color" />
          <ColorPicker colorPickerName="text-color" title="Text Color" />
        </section>

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
