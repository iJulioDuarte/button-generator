import { Content } from "./components/layout/content";
import { Header } from "./components/layout/header";
import { Sidebar } from "./components/layout/sidebar";

export const App = () => {
  return (
    <div className="max-h-[100lvh] grid-rows-12 grid-cols-12 grid-flow-row grid overflow-hidden relative">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};
