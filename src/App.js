import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import "./styles/main.scss";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";

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
        <div id="services">
          <Services />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
