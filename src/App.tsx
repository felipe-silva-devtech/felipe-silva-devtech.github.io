import { useState } from "react";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { Pages } from "./pages/Pages";

import "./App.scss";

export function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="global-container">
      <HeaderNav onPageChange={setCurrentPage} />
      <Pages currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
}
