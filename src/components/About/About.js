import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import techBrandLogo from "../../data/TechBrandLogo";
import ProfilePic from "../../assets/profile-pic.jpeg";
import socialLinks from "../../data/SocialLinks";

import socialIconsList from "./components/SocialIcon";

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

  return (
    <section id="about">
      <div className="container">
        {/* Intro */}
        <div className="intro-grid">
          <h1>Khalid Warsame</h1>
          <div className="subheader">
            <h3>Software developer.</h3>
            <p>I build high quality mobile apps.</p>
          </div>

          {/* Social Icons */}
          <motion.div className="social-icons-container">
            {socialIconsList.map((icon, index) => {
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
                  role={icon.role}
                  viewBox={icon.viewBox}
                  xmlns={icon.xmlns}
                  onClick={() => {
                    window.open(socialLinks[index], "noreferrer noopener");
                  }}
                >
                  <path d={icon.path} />
                </motion.svg>
              );
            })}
          </motion.div>

          {/* Tech used */}
          <div className="tech-logo-container">
            <h3>Experienced in</h3>
            {techBrandLogo.map((brand, index) => {
              return (
                <motion.svg
                  key={index}
                  custom={index}
                  variants={brandItemAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className="tech-logo"
                  role={brand.role}
                  viewBox={brand.viewBox}
                  xmlns={brand.xmlns}
                  onClick={() => {
                    window.open(brand.link, "noreferrer noopener");
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
          </div>

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
