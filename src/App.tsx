import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Sidebar } from "./components/layout/sidebar";
import { useButtonConfigs } from "./context/useButtonConfigs";

export const App = () => {
  const { buttonConfigs } = useButtonConfigs();

  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Button Generator</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido por Julio Duarte
          </span>
          <Separator orientation="vertical" className="h-6" />

          <a href="https://github.com/iJulioDuarte" target="_blank">
            <Button variant={"outline"}>
              <Github className="h-4 w-4 mr-2" />
              Github
            </Button>
          </a>
        </div>
      </header>
      <main className="flex-1 p-6 flex gap-6">
        <Sidebar />

        <div className="flex flex-col flex-1 gap-4">
          <button
            style={{
              height: buttonConfigs.height,
              width: buttonConfigs.width,
              background: "black",
              borderRadius: buttonConfigs.borderRadius,
            }}
          >
            {buttonConfigs.label}
          </button>
        </div>
      </main>
    </div>
  );
};
