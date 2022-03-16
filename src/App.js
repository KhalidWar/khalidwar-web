import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Projects/Portfolio";
import Contact from "./components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
