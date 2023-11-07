import { useButtonConfigs } from "@/context/use-button-configs";
import { FC } from "react";

export const Content: FC = () => {
  const buttonConfigs = useButtonConfigs();

  return (
    <section className="flex flex-col flex-1 gap-4 items-center justify-center">
      <button style={{ ...buttonConfigs }}>{buttonConfigs.label}</button>
    </section>
  );
};
