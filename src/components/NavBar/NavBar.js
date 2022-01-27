import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import HamburgerButton from "./components/HamburgerButton";
import ScrollIndicator from "./components/ScrollIndicator";
import "./NavBar.css";

function NavBar() {
  /// Sets initial navbar menu state for phones
  const initialNavbarState = !(window.innerWidth < 600);
  const [showMenu, setShowMenu] = useState(initialNavbarState);
  const [navbarColor, setNavbarColor] = useState({
    backgroundColor: "transparent",
    textColor: "white",
  });

  const menuAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const menuItemAnimation = {
    hidden: { x: "3vh", opacity: 0 },
    visible: {
      x: "0vh",
      opacity: 1,
    },
    exit: {
      x: "-3vh",
      opacity: 0,
    },
  };

  function handleResize() {
    window.innerWidth > 600 ? setShowMenu(true) : setShowMenu(false);
  }

  function handleScroll() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    scrolled < 100
      ? setNavbarColor({
          backgroundColor: "transparent",
          textColor: "white",
        })
      : setNavbarColor({
          backgroundColor: "whitesmoke",
          textColor: "black",
        });
    console.log(scrolled);
  }

  function scrollTo(selectorId) {
    const anchor = document.querySelector(selectorId);
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    if (window.innerWidth < 600 && showMenu) setShowMenu(false);
  }

  useEffect(() => {
    /// Handles conflict between resizing changes and an already set state.
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => [
      window.removeEventListener("resize", handleResize),
      window.removeEventListener("scroll", handleScroll),
    ];
  }, []);

  return (
    <div
      className="navbar-container"
      style={{
        backgroundColor: navbarColor.backgroundColor,
        color: navbarColor.textColor,
      }}
    >
      <nav className="navbar">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => {
            scrollTo("#model");
          }}
        >
          KhalidWar
        </div>

        <HamburgerButton
          layerColor={navbarColor.textColor}
          showMenu={showMenu}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />

        <AnimatePresence>
          {/* Actions */}
          {showMenu && (
            <motion.ul
              variants={menuAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.li
                key={1}
                variants={menuItemAnimation}
                whileHover={{
                  scale: 1.1,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => {
                  scrollTo("#about");
                }}
              >
                About
              </motion.li>
              <motion.li
                key={1}
                variants={menuItemAnimation}
                whileHover={{
                  scale: 1.1,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => {
                  scrollTo("#experience");
                }}
              >
                Experience
              </motion.li>
              <motion.li
                key={2}
                variants={menuItemAnimation}
                whileHover={{
                  scale: 1.1,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => {
                  scrollTo("#portfolio");
                }}
              >
                Portfolio
              </motion.li>
              <motion.li
                key={3}
                variants={menuItemAnimation}
                whileHover={{
                  scale: 1.1,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => {
                  scrollTo("#contact");
                }}
              >
                Contact
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
      <ScrollIndicator />
    </div>
  );
}

export default NavBar;
