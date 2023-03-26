import React from "react";
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter } from "react-router-dom";

import Pages from "./pages/Pages";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
