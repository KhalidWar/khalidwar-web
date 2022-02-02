import React from "react";
import flutterDev from "../../assets/flutter-dev2.png";
import skillsData from "../../data/skillsData";
import "./style.css";

function FlutterDev() {
  const [flutterSkill] = skillsData.filter((skill) => {
    return skill.name === "Flutter";
  });

  return (
    <div className="container">
      {/* Description Grid*/}
      <div className="description">
        {/* Description Header */}
        <h3>{flutterSkill.title}</h3>

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
  );
}

export default FlutterDev;
