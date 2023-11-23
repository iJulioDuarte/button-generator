import { StandartProperties } from "@/types";

export type ConvertionStandartsType = {
  [key in keyof StandartProperties]: string;
};
