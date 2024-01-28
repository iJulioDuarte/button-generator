import { FC } from "react";
import { Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LinkButtonProps } from "./types";
export const Header: FC = () => {
  const LinkButtons = (buttons: LinkButtonProps[]) =>
    buttons.map((button) => {
      const { icon, link, name } = button;

      return (
        <a href={link} target="_blank">
          <Button variant={"outline"}>
            {icon}
            {name}
          </Button>
        </a>
      );
    });

  const defaultIconsClassname = "h-4 w-4 mr-2";

  return (
    <header className="px-6 py-3 flex items-center justify-between border-b col-span-full row-span-1">
      <h1 className="text-xl font-bold">Button Generator</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          Desenvolvido por Julio Duarte
        </span>
        <Separator orientation="vertical" className="h-6" />

        {LinkButtons([
          {
            icon: <Github className={defaultIconsClassname} />,
            link: "https://github.com/iJulioDuarte/button-generator",
            name: "Github",
          },
          {
            icon: <Linkedin className={defaultIconsClassname} />,
            link: "https://www.linkedin.com/in/ijulio-duarte/",
            name: "LinkedIn",
          },
        ])}
      </div>
    </header>
  );
};
