import { Sidebar } from "./components/layout/sidebar";
import { Content } from "./components/layout/content";
import { Header } from "./components/layout/header";

export const App = () => {
  return (
    <div className="max-h-screen grid-rows-12 grid-cols-12 grid-flow-row grid overflow-hidden relative">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};
