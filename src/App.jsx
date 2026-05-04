import { useState } from "react";
import Navbar from "./component/layout/navbar";
import Home from "./component/pages/home";
import About from "./component/pages/about";

import "./component/layout/navbar.css";
import "./component/pages/home.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
