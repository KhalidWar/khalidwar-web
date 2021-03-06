import React from "react";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import flutterDev from "../../assets/flutter-dev.png";
import reactDev from "../../assets/react-dev.png";

import "./Portfolio.css";

function Portfolio() {
  const anonAddyGithubUrl = "https://github.com/khalidwar/anonaddy";
  const khalidWarGithubUrl = "https://github.com/khalidwar/khalidwar-web";

  function openUrl(url) {
    window.open(url, "_blank");
  }

  return (
    <section id="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <ProjectCard
          title="AddyManager"
          subtitle="A free and open-source Mobile app for AnonAddy.com"
          headerImage={flutterDev}
          headerImageAlt="AddyManager App Card"
          listItems={
            <ul style={{ lineHeight: "2rem" }}>
              <li>5,000+ downloads across app stores.</li>
              <li>Highly rated and recommended by our users.</li>
              <li>Beautiful and intuitive UI.</li>
              <li>
                Advanced functionalities such as offline access and user data
                encryption.
              </li>
              <li>CI/CD developed and deployed.</li>
            </ul>
          }
          buttonOnClick={() => {
            openUrl(anonAddyGithubUrl);
          }}
        ></ProjectCard>
        <ProjectCard
          title="Khalidwar.com"
          subtitle="Yes, this website is one of my projects."
          headerImage={reactDev}
          headerImageAlt="Website logo"
          listItems={
            <ul style={{ lineHeight: "2rem" }}>
              <li>Built with HTML, CSS, Javascript, and React library.</li>
              <li>Responsive UI for all screens.</li>
              <li>Use of several react hooks to manage state.</li>
              <li>Integrated 3D models using ThreeJS library.</li>
              <li>Animated using Framer Motion library.</li>
              <br />
            </ul>
          }
          buttonOnClick={() => {
            openUrl(khalidWarGithubUrl);
          }}
        />
      </div>
    </section>
  );
}

export default Portfolio;
