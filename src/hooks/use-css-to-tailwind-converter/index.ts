import { useCallback, useMemo } from "react";
import { ConvertionStandartsType } from "./types";
import { ButtonConfigs } from "@/context/use-button-configs/types";

export const useCssToTailwindConverter = () => {
  const convertionStandarts: ConvertionStandartsType = useMemo(
    () => ({
      backgroundColor: "bg-[{value}]",
      borderColor: "border-[{value}]",
      borderRadius: "rounded-[{value}]",
      borderWidth: "border-[{value}]",
      color: "text-[{value}]",
      fontSize: "text-[{value}]",
      fontWeight: "font-[{value}]",
      height: "h-[{value}]",
      label: "{value}",
      width: "w-[{value}]",
    }),
    []
  );

  const convertCssToTailwind = useCallback(
    (values: ButtonConfigs) => {
      const convertionStandartsKeys = Object.keys(convertionStandarts);
      const valueKeys = Object.keys(values);

      const convertedValues = convertionStandarts;

      const EqualKeys = convertionStandartsKeys.filter((key) =>
        valueKeys.includes(key)
      );

      convertionStandartsKeys.forEach((key) => {
        const keyAsKeyof = key as keyof ConvertionStandartsType;

        if (!EqualKeys.includes(key)) {
          delete convertedValues[keyAsKeyof];
          return;
        }

        convertedValues[keyAsKeyof] = convertedValues[keyAsKeyof].replace(
          "{value}",
          (values[keyAsKeyof] ?? 0).toString()
        );
      });

      return convertedValues;
    },
    [convertionStandarts]
  );

  return { convertCssToTailwind };
};
