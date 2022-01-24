import React from "react";
import Card from "@mui/material/Card";
import AppleRating from "./components/AppStoreRatings/AppleRatings";
import AppStoreButton from "./components/AppStoreButton/AppStoreButton";
import GoogleRating from "./components/AppStoreRatings/GoogleRating";
import {
  FlutterLogo,
  DartLogo,
  GithubLogo,
} from "../../SharedComponents/BrandLogo";
import "./Projects.css";
import ProjectCard from "./components/ProjectCard/ProjectCard";

import flutterDev from "../../assets/flutter-dev2.png";
import reactDev from "../../assets/react-dev2.png";

function Projects() {
  const anonAddyGithubUrl = "https://github.com/khalidwar/anonaddy";
  const khalidWarGithubUrl = "https://github.com/khalidwar/khalidwar-web";
  const appStoreUrl =
    "https://apps.apple.com/us/app/addymanager/id1547461270#?platform=iphone";
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.khalidwar.anonaddy";

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
              <li>Animated using Framer Motion library.</li>
              <li>CI/CD developed and deployed.</li>
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

export default Projects;
