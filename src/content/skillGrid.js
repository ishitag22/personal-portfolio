import React from "react";
import skills from "../assets/skills/skills"; // Ensure correct import path

const Skills = () => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-box">
          <img src={require(`../assets/skills/${skill}`)} alt={skill} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
