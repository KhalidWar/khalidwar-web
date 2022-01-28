import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const cube = "https://skfb.ly/o8zEX";

  return (
    <section id="footer">
      <div className="container">
        <p>Copyright © {currentYear} Khalid Warsame</p>

        <p
          onClick={() => {
            window.open(cube, "blank");
          }}
        >
          "Cube Cascade" by Tycho Magnetic Anomaly
        </p>
      </div>
    </section>
  );
}

export default Footer;
