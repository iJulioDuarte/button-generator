export type ButtonConfigs = {
  label?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;
  color?: string;
  fontWeight?: number;
  fontSize?: number;
  borderWidth?: number;
  borderColor?: string;
};

type ButtonConfigToSetFunctions<TData> = {
  [key in keyof TData & string as `set${Capitalize<key>}`]: (
    newValue: NonNullable<TData[key]>
  ) => void;
};

export type States = ButtonConfigs;

export type Actions = ButtonConfigToSetFunctions<ButtonConfigs>;

export type UseButtonConfigsType = States & Actions;
