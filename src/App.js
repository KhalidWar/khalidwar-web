import { Suspense } from "react";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import "./App.css";
import ModelViewer from "./components/ModelViewer/ModelViewer";

function App() {
  return (
    <div>
      {/* <Suspense fallback={null}>
        <ModelViewer />
      </Suspense> */}
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
