import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="sobre">
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
