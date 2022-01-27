import React, { useState } from "react";
import { twitterLink, linkedInLink, githubLink } from "../../data/SocialLinks";
import { LinkedInIcon, GithubIcon, TwitterIcon } from "./components/SocialIcon";
import { motion, AnimatePresence } from "framer-motion";
import techBrandLogo from "../../data/TechBrandLogo";
import ProfilePic from "../../assets/profile-pic.jpg";

import "./About.css";

function About() {
  const [tip, setTip] = useState("");

  const brandAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0,
      },
    },
  };

  const brandItemAnimation = {
    hidden: { x: "3vh", opacity: 0 },
    visible: (i) => ({
      x: "0vh",
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
    hover: {
      scale: 1.3,
    },
    tap: {
      scale: 1,
    },
  };

  function openUrl(url) {
    window.open(url, "_blank");
  }

  return (
    <section id="about">
      <div className="container">
        {/* Intro */}
        <div className="intro-grid">
          <h1>Khalid Warsame</h1>
          <div className="subheader">
            <h3>Software developer.</h3>
            <p>I build mobile apps and websites.</p>
          </div>

          {/* Social Icons */}
          <div className="social-icons-container">
            <LinkedInIcon
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              className="social-icons"
              onClick={() => {
                openUrl(linkedInLink);
              }}
            />
            <TwitterIcon
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              className="social-icons"
              onClick={() => {
                openUrl(twitterLink);
              }}
            />
            <GithubIcon
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              className="social-icons"
              onClick={() => {
                openUrl(githubLink);
              }}
            />
          </div>

          {/* Tech used */}
          <motion.div
            className="tech-logo-container"
            variants={brandAnimation}
            initial="hidden"
            animate="visible"
          >
            <h3>Experienced in</h3>
            {techBrandLogo.map((brand, index) => {
              return (
                <motion.svg
                  key={index}
                  custom={index}
                  variants={brandItemAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  className="tech-logo"
                  role={brand.role}
                  viewBox={brand.viewBox}
                  xmlns={brand.xmlns}
                  onClick={() => {
                    openUrl(brand.link);
                  }}
                  onHoverStart={() => {
                    setTip(brand.intro);
                  }}
                  onHoverEnd={() => {
                    setTip("");
                  }}
                >
                  <path d={brand.path} />
                </motion.svg>
              );
            })}
          </motion.div>

          {/* Tip */}
          <div>
            <AnimatePresence>
              {tip && (
                <motion.p
                  className="tip"
                  initial={{
                    x: "5vh",
                  }}
                  animate={{
                    x: "0",
                  }}
                >
                  {tip}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Profile Picture */}
        <img src={ProfilePic} alt="profile-pic" />
      </div>
    </section>
  );
}

export default About;
