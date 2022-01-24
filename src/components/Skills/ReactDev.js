import React from "react";
import reactDev from "../../assets/react-dev2.png";
import skillsData from "../../data/skillsData";
import "./style.css";

function ReactDev() {
  const [reactSkill] = skillsData.filter((skill) => {
    return skill.name === "React";
  });

  return (
    <section id="skill" className="react-skill">
      <div className="container">
        {/* Description Grid*/}
        <div className="description">
          {/* Description Header */}
          <h2>{reactSkill.title}</h2>

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
