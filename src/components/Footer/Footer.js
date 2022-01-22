import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer">
      <div className="container">
        <p>Copyright © {currentYear} Khalid Warsame</p>
      </div>
    </section>
  );
}

export default Footer;
