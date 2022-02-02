import React from "react";
import ReactDev from "./ReactDev";
import FlutterDev from "./FlutterDev";

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h1>Experience</h1>
      </div>
      <FlutterDev />
      <ReactDev />
    </section>
  );
}

export default Experience;
