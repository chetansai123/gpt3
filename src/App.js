import React from "react";
import {
  Blog,
  Footer,
  Header,
  WhatGPT3,
  Possibility,
  Features,
} from "./containers/index";
import { Brand, Article, CTA, Navbar } from "./components/index";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Article />
      <Footer />
    </div>
  );
};

export default App;
