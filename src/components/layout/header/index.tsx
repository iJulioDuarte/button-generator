import { FC, useState } from "react";
import { Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { twMerge } from "tailwind-merge";

export const Header: FC = () => {
  const [showText, setShowText] = useState(false);

  return (
    <header className="px-6 py-3 flex items-center justify-between border-b col-span-full row-span-1">
      <h1 className="text-xl font-bold">Button Generator</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          Desenvolvido por Julio Duarte
        </span>
        <Separator orientation="vertical" className="h-6" />

        <a
          href="https://github.com/iJulioDuarte/button-generator"
          target="_blank"
        >
          <Button variant={"outline"}>
            <Github className="h-4 w-4 mr-2" />
            Github
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/ijulio-duarte/" target="_blank">
          <Button
            variant={"secondary"}
            onMouseEnter={() => {
              setShowText(true);
            }}
            onMouseLeave={() => {
              setShowText(false);
            }}
            className={twMerge()}
          >
            <Linkedin className="h-4 w-4 mr-2" />

            {showText && "Linkedin"}
          </Button>
        </a>
      </div>
    </header>
  );
};
