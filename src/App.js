import { Suspense } from "react";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Skills from "./components/Skills/Skills";
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
      <Landing />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
