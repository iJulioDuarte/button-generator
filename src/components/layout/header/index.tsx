import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";
import { FC } from "react";

export const Header: FC = () => (
  <header className="px-6 py-3 flex items-center justify-between border-b">
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
    </div>
  </header>
);
