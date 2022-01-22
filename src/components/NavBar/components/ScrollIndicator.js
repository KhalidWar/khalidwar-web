import React, { useState, useEffect } from "react";

function ScrollIndicator() {
  const [scroll, setScroll] = useState(0);

  function calculateScroll() {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    /// Calculate scroll position
    const scrollPercentage = (scrolled / height) * 100;
    setScroll(scrollPercentage);
  }

  useEffect(() => {
    window.addEventListener("scroll", calculateScroll);
    return () => window.removeEventListener("scroll", calculateScroll);
  }, []);

  return (
    <div
      className="progress-bar"
      style={{
        background: "transparent",
        width: "100%",
      }}
    >
      <div
        style={{ height: "2px", background: "#00cc83", width: `${scroll}%` }}
      />
    </div>
  );
}

export default ScrollIndicator;
