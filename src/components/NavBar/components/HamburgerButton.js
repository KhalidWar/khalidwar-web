import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./HamburgerButton.css";

export default function HamburgerButton(props) {
  const parentAnimation = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    // hover: {
    //   scale: 1.1,
    // },
    // tap: {
    //   scale: 0.8,
    // },
  };

  const childrenAnimation = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: (i) =>
      props.showMenu
        ? {
            x: (i === 1 && 0) || (i === 2 && 100) || (i === 3 && 0),
            y: (i === 1 && 8) || (i === 2 && 0) || (i === 3 && -10),

            skew: (i === 1 && "0", "45deg") || (i === 3 && "0", "45deg"),

            rotate:
              (i === 1 && "45deg") ||
              (i === 2 && "45deg") ||
              (i === 3 && "-45deg"),
            opacity: 1,
          }
        : { x: 0, y: 0, opacity: 1 },
  };

  //   useEffect(() => {}, [props.showMenu]);

  return (
    <AnimatePresence>
      <motion.div
        className="hamburger"
        variants={parentAnimation}
        initial="hidden"
        animate="visible"
        // whileHover="hover"
        // whileTap="tap"
        onClick={() => {
          props.onClick();
        }}
      >
        <motion.span
          style={{
            backgroundColor: props.layerColor,
          }}
          className="layer"
          custom={1}
          variants={childrenAnimation}
        />
        <motion.span
          style={{
            backgroundColor: props.layerColor,
          }}
          className="layer"
          custom={2}
          variants={childrenAnimation}
        />
        <motion.span
          style={{
            backgroundColor: props.layerColor,
          }}
          className="layer"
          custom={3}
          variants={childrenAnimation}
        />
      </motion.div>
    </AnimatePresence>
  );
}
