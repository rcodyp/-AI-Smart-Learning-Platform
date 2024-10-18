import React, { useEffect } from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Mouse from "./components/home/mouse/mouse";
import SmoothScroll from "./components/animation/smoothScroll";
const App = () => {
  return (
    <div>
      <SmoothScroll />
      <Mouse />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
