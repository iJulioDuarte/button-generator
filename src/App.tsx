import { Sidebar } from "./components/layout/sidebar";
import { Content } from "./components/layout/content";
import { Header } from "./components/layout/header";

export const App = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6 flex gap-6">
        <Sidebar />
        <Content />
      </main>
    </div>
  );
};
