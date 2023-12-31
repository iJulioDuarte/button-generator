import { StandartProperties } from "@/types";

export type ButtonConfigs = Partial<StandartProperties>;

type ButtonConfigToSetFunctions<TData> = {
  [key in keyof TData & string as `set${Capitalize<key>}`]: (
    newValue: NonNullable<TData[key]>
  ) => void;
};

export type States = ButtonConfigs;

export type Actions = ButtonConfigToSetFunctions<ButtonConfigs>;

export type UseButtonConfigsType = States & Actions;
