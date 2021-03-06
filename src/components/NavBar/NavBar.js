import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import HamburgerButton from "./components/HamburgerButton";
import ScrollIndicator from "./components/ScrollIndicator";
import "./NavBar.css";

function NavBar() {
  /// Sets initial navbar menu state for phones
  const initialNavbarState = !(window.innerWidth < 600);
  const [showMenu, setShowMenu] = useState(initialNavbarState);
  // const [navbarColor, setNavbarColor] = useState({
  //   backgroundColor: "transparent",
  //   textColor: "white",
  // });

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
  };

  const menuItemAnimation = {
    hidden: { x: "3vh", opacity: 0 },
    visible: {
      x: "0vh",
      opacity: 1,
    },
  };

  /// Handles screen resize
  function handleResize() {
    window.innerWidth > 600 ? setShowMenu(true) : setShowMenu(false);
  }

  /// Handles screen scroll
  function handleScroll() {
    const scrollLocation =
      document.body.scrollTop || document.documentElement.scrollTop;
    // scrollLocation < 100
    //   ? setNavbarColor({
    //       backgroundColor: "transparent",
    //       textColor: "white",
    //     })
    //   : setNavbarColor({
    //       backgroundColor: "whitesmoke",
    //       textColor: "black",
    //     });
  }

  function hamburgerOnPress() {
    setShowMenu(!showMenu);
    // const scrollLocation =
      // document.body.scrollTop || document.documentElement.scrollTop;
    // scrollLocation < 100 &&
    //   setNavbarColor({
    //     backgroundColor: !showMenu ? "whitesmoke" : "transparent",
    //     textColor: !showMenu ? "black" : "white",
    //   });
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
    <div className="navbar-container">
      <nav className="navbar">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => {
            scrollTo("#about");
          }}
        >
          KhalidWar
        </div>

        <HamburgerButton showMenu={showMenu} onClick={hamburgerOnPress} />

        <AnimatePresence>
          {/* Actions */}
          {showMenu && (
            <motion.ul
              variants={menuAnimation}
              initial="hidden"
              animate="visible"
            >
              {/* <motion.li
                key={1}
                variants={menuItemAnimation}
                onClick={() => {
                  scrollTo("#about");
                }}
              >
                About
              </motion.li> */}
              <motion.li
                key={2}
                variants={menuItemAnimation}
                onClick={() => {
                  scrollTo("#experience");
                }}
              >
                Experience
              </motion.li>
              <motion.li
                key={3}
                variants={menuItemAnimation}
                onClick={() => {
                  scrollTo("#portfolio");
                }}
              >
                Portfolio
              </motion.li>
              <motion.li
                key={4}
                variants={menuItemAnimation}
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
