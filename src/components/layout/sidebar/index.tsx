import { FC, useMemo, useState } from "react";
import {
  sliderDefaultValues,
  useButtonConfigs,
} from "@/context/use-button-configs";

import { Button } from "@/components/ui/button";
import { ButtonConfigSlider } from "./button-config-slider";
import { ColorPicker } from "./color-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useSliderConfigs } from "./hooks/use-slider-configs";
import { CodeModal } from "./code-modal";

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

  const [isOpenCodeModal, setIsOpenCodeModal] = useState(false);

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
    <aside className="w-full h-full overflow-auto space-y-6 flex gap-3 col-span-3 row-span-11 p-4 border-r border-border">
      <form className="space-y-6 w-full">
        {labelInputSection}

        {buttonConfigsSection}

        {colorPickersSection}

        <Separator />

        <div className="pb-4">
          <CodeModal
            isOpenCodeModal={isOpenCodeModal}
            setIsOpenCodeModal={setIsOpenCodeModal}
          />
          <Button
            className="w-full"
            type="button"
            onClick={() => setIsOpenCodeModal(true)}
          >
            <Pen className="w-4 h-4" />
            Gerar Código
          </Button>
        </div>
      </form>
    </aside>
  );
};
