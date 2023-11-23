import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pen } from "lucide-react";
import { FC, useMemo, useState } from "react";
import { ButtonConfigSlider } from "./button-config-slider";
import {
  sliderDefaultValues,
  useButtonConfigs,
} from "@/context/use-button-configs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSliderConfigs } from "./hooks/use-slider-configs";
import { ColorPicker } from "./color-picker";
import { useCssToTailwindConverter } from "@/hooks/use-css-to-tailwind-converter";
import { ConvertionStandartsType } from "@/hooks/use-css-to-tailwind-converter/types";

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

  const buttonConfigs = useButtonConfigs();

  const [tailwindCode, setTailwindCode] = useState<ConvertionStandartsType>();

  const { sliderConfigs } = useSliderConfigs();
  const { convertCssToTailwind } = useCssToTailwindConverter();

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
    <aside className="w-full h-full overflow-auto space-y-6 flex gap-3 col-span-3 row-span-11 p-4 border-r border-border">
      <form className="space-y-6 w-full">
        {labelInputSection}

        {buttonConfigsSection}

        {colorPickersSection}

        {tailwindCode && (
          <span>
            {Object.keys(tailwindCode).map((key) => (
              <span>{tailwindCode[key as keyof typeof tailwindCode]}</span>
            ))}
          </span>
        )}

        <Separator />

        <Button
          className="w-full"
          type="button"
          onClick={() => {
            setTailwindCode(convertCssToTailwind(buttonConfigs));
          }}
        >
          <Pen className="w-4 h-4" />
          Gerar Código
        </Button>
      </form>
    </aside>
  );
};
