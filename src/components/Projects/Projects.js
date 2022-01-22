import React from "react";
import AppleRating from "./components/AppStoreRatings/AppleRatings";
import AppStoreButton from "./components/AppStoreButton/AppStoreButton";
import GoogleRating from "./components/AppStoreRatings/GoogleRating";
import {
  FlutterLogo,
  DartLogo,
  GithubLogo,
} from "../../SharedComponents/BrandLogo";
import "./Projects.css";

function Projects() {
  const anonAddyUrl = "https://anonaddy.com";
  const githubUrl = "https://github.com/khalidwar/anonaddy";
  const appStoreUrl =
    "https://apps.apple.com/us/app/addymanager/id1547461270#?platform=iphone";
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.khalidwar.anonaddy";

  function openUrl(url) {
    window.open(url, "_blank");
  }

  return (
    <div id="portfolio-grid" className="projects">
      <div className="project-description">
        <div className="description">
          {/* Title */}
          <div className="title">
            <h2>AddyManager</h2>
          </div>

          {/* Subtitle */}
          <div className="subtitle">
            <p>
              A free and open-source Mobile app for
              <span onClick={() => openUrl(anonAddyUrl)}> AnonAddy.com</span>.
            </p>
            <p>
              AddyManager brings AnonAddy's full experience to mobile with a
              beautifully designed user interface and intuitive user experience.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <h3>Stats</h3>
          <AppleRating /> App Store
          <GoogleRating /> Play Store
          <p>1000+ Users</p>
          <p>22 Github Stars</p>
        </div>

        {/* Technologies Used */}
        <div className="built-with">
          <h3>Built with</h3>
          <div>
            <FlutterLogo className="brand-logo" />
            <DartLogo className="brand-logo" />
            <GithubLogo
              className="brand-logo"
              onClick={() => {
                openUrl("https://github.com/KhalidWar/anonaddy");
              }}
            />
          </div>
        </div>

        {/* Download Links */}
        <div>
          <AppStoreButton
            className="app-store-button"
            src="https://raw.githubusercontent.com/KhalidWar/anonaddy/master/assets/screenshots/play_store_badge.png"
            alt="Get it on Google Play"
            onClick={() => openUrl(playStoreUrl)}
          />

          <AppStoreButton
            className="app-store-button"
            src="https://raw.githubusercontent.com/KhalidWar/anonaddy/master/assets/screenshots/app_store_badge.png"
            alt="Download it on the app store"
            onClick={() => openUrl(appStoreUrl)}
          />
        </div>
      </div>

      <div className="project-image">
        <img
          src="https://raw.githubusercontent.com/KhalidWar/anonaddy/master/assets/screenshots/aliases.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Projects;
