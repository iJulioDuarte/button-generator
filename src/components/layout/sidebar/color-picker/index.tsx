import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useButtonConfigs } from "@/context/use-button-configs";
import { Sketch } from "@uiw/react-color";
import { FC, useCallback, useState } from "react";
import { ButtonConfigs, ColorPickers } from "../types";
import { ColorPickerProps } from "./types";
import "./styles.css";

export const ColorPicker: FC<ColorPickerProps> = (props) => {
  const { colorPickerName, title } = props;

  const configKey: keyof ButtonConfigs =
    colorPickerName === "bg-color"
      ? "backgroundColor"
      : colorPickerName === "border-color"
      ? "borderColor"
      : "color";

  const { buttonConfigs, setButtonConfigs } = useButtonConfigs();

  const [openColorPickers, setOpenColorPickers] = useState<ColorPickers[]>([]);

  const handleColorPickers = useCallback(
    (colorPicker: ColorPickers) => {
      let newArray: ColorPickers[] = [];
      openColorPickers.includes(colorPicker)
        ? (newArray = openColorPickers.filter((item) => item !== colorPicker))
        : (newArray = [...openColorPickers, colorPicker]);
      setOpenColorPickers(newArray);
    },
    [openColorPickers]
  );

  return (
    <Popover>
      <PopoverTrigger onClick={() => handleColorPickers(colorPickerName)}>
        {title}
      </PopoverTrigger>
      <PopoverContent className="w-full ml-6">
        <Sketch
          disableAlpha
          color={buttonConfigs[configKey]}
          onChange={(color) => {
            setButtonConfigs((v) => ({
              ...v,
              [configKey]: color.hex,
            }));
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
