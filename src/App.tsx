import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { Pages } from "./pages/Pages";

import "./App.scss";

export function App() {
  return (
    <div className="global-container">
      <HeaderNav />
      <Pages />
    </div>
  );
}
