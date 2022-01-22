import React from "react";
import reactDev from "../../assets/react-dev2.png";
import skillsData from "../../data/skillsData";
import techBrandLogo from "../../data/TechBrandLogo";
import "./style.css";

function ReactDev() {
  const [reactLogo] = techBrandLogo.filter((brand) => {
    return brand.title === "React";
  });

  const [reactSkill] = skillsData.filter((skill) => {
    return skill.name === "React";
  });

  return (
    <section id="skill" className="react-skill">
      <div className="container">
        {/* Description Grid*/}
        <div className="description">
          {/* Description Header */}
          <h2>Web dev</h2>

          {/* Skills list */}
          <ul key={reactSkill.id}>
            {reactSkill.items.map((item) => {
              return <li key={item.id}>{item.label}</li>;
            })}
          </ul>
        </div>

        {/* Illustration Grid */}
        <img src={reactDev} alt="React development" />
      </div>
    </section>
  );
}

export default ReactDev;
