import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Sidebar } from "./components/layout/sidebar";

export const App = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ia</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜 no NLW da Rocketseat
          </span>
          <Separator orientation="vertical" className="h-6" />

          <Button variant={"outline"}>
            <Github className="h-4 w-4 mr-2" />
            Github
          </Button>
        </div>
      </header>

      <main className="flex-1 p-6 flex gap-6">
        <Sidebar />
        <div className="flex flex-col flex-1 gap-4">
          <p className="text-sm text-muted-foreground">
            Lembre-se: Você pode utilizar a variável{" "}
            <code className="text-violet-600">{"{transcription}"}</code> no seu
            prompt para adicionar o conteúdo da transcrição do vídeo
            selecionado.
          </p>
        </div>
      </main>
    </div>
  );
};
