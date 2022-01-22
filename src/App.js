import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
