import { useState } from "react";
import Navbar from "./component/layout/navbar";
import About from "./component/pages/home";
import "./component/layout/navbar.css";
import "./component/pages/home.css";

function App() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

export default App;
