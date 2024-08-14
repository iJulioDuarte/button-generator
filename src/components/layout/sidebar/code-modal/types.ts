import { StandartProperties } from "@/types";

export type ValidConfigs = {
  [key in keyof StandartProperties]: number | string;
};
