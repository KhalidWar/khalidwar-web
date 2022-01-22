import React from "react";
import flutterDev from "../../assets/flutter-dev2.png";
import skillsData from "../../data/skillsData";
import techBrandLogo from "../../data/TechBrandLogo";

import "./style.css";

function FlutterDev() {
  const [flutterLogo] = techBrandLogo.filter((brand) => {
    return brand.title === "Flutter";
  });

  const [flutterSkill] = skillsData.filter((skill) => {
    return skill.name === "Flutter";
  });

  return (
    <section id="skill" className="flutter-skill">
      <div className="container">
        {/* Description Grid*/}
        <div className="description">
          {/* Description Header */}
          <h2>Mobile App dev</h2>

          {/* Skills list */}
          <ul key={flutterSkill.id}>
            {flutterSkill.items.map((item) => {
              return <li key={item.id}>{item.label}</li>;
            })}
          </ul>
        </div>

        {/* Illustration Grid */}
        <img src={flutterDev} alt="Flutter development" />
      </div>
    </section>
  );
}

export default FlutterDev;
