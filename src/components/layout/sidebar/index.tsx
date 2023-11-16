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
  const {
    setLabel,
    color,
    setColor,
    backgroundColor,
    setBackgroundColor,
    borderColor,
    setBorderColor,
  } = useButtonConfigs();

  const { sliderConfigs } = useSliderConfigs();

  const buttonConfigsSection = useMemo(
    () => (
      <section id="sliders" className="space-y-3">
        {sliderConfigs.map((config) => (
          <ButtonConfigSlider {...config} />
        ))}
      </section>
    ),
    [sliderConfigs]
  );

  const colorPickersSection = useMemo(
    () => (
      <section id="color-pickers" className="flex flex-col gap-2 space-y-3">
        <ColorPicker
          color={backgroundColor ?? ""}
          setColorFunction={setBackgroundColor}
          title="Background Color"
        />
        <ColorPicker
          color={borderColor ?? ""}
          setColorFunction={setBorderColor}
          title="Border Color"
        />
        <ColorPicker
          color={color ?? ""}
          setColorFunction={setColor}
          title="Text Color"
        />
      </section>
    ),
    [
      backgroundColor,
      borderColor,
      color,
      setBackgroundColor,
      setBorderColor,
      setColor,
    ]
  );

  const labelInputSection = useMemo(
    () => (
      <section className="space-y-3">
        <div>
          <Label>Label</Label>
          <Input
            onChange={(value) => setLabel(value.target.value)}
            defaultValue={sliderDefaultValues.label}
          />
        </div>
      </section>
    ),
    [setLabel]
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
