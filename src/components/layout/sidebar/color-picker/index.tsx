import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useButtonConfigs } from "@/context/use-button-configs";
import { Sketch } from "@uiw/react-color";
import { FC, memo, useCallback, useState } from "react";
import { ColorPickers } from "../types";
import { ColorPickerProps } from "./types";
import "./styles.css";
import { ButtonConfigs } from "@/context/use-button-configs/types";

export const ColorPicker: FC<ColorPickerProps> = memo((props) => {
  const { colorPickerName, title } = props;

  const configKey: keyof ButtonConfigs =
    colorPickerName === "bg-color"
      ? "backgroundColor"
      : colorPickerName === "border-color"
      ? "borderColor"
      : "color";

  const setFunctionConfigKey = ("set" +
    configKey) as keyof typeof buttonConfigs;

  const buttonConfigs = useButtonConfigs();

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
            if (setFunctionConfigKey in buttonConfigs)
              (buttonConfigs[setFunctionConfigKey] as CallableFunction)(
                color.hex
              );
          }}
        />
      </PopoverContent>
    </Popover>
  );
});
