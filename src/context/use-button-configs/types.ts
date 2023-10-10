import { ButtonConfigs } from "@/components/layout/sidebar/types";
import { SetStateAction } from "react";

export type States = {
  buttonConfigs: ButtonConfigs;
};

export type Actions = {
  setButtonConfigs(newConfigs: SetStateAction<ButtonConfigs>): void;
};

export type UseButtonConfigsType = States & Actions;
