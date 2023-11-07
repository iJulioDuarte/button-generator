import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Sketch } from "@uiw/react-color";
import { FC } from "react";
import { ColorPickerProps } from "./types";
import "./styles.css";

export const ColorPicker: FC<ColorPickerProps> = (props) => {
  const { color, title, setColorFunction } = props;

  return (
    <Popover>
      <PopoverTrigger>{title}</PopoverTrigger>
      <PopoverContent className="w-full ml-6">
        <Sketch
          disableAlpha
          color={color}
          onChange={(newColor) => setColorFunction(newColor.hex)}
        />
      </PopoverContent>
    </Popover>
  );
};
