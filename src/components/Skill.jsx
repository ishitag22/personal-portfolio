import PropTypes from "prop-types";

const Skill = (props) => {
  return (
    <div className="skill">
      <img src={`../assets/skills/${props.skill}`} alt="" className="skill-img" />
    </div>
  );
};
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};
export default Skill;


// import React from "react";
// import skills from "../content/skills"; // Import skills.js
// import "../content/SkillGrid.css"; // Import the CSS for styling

// const Skill = () => {
//   return (
//     <div className="skills-container">
//       {skills.map((skill, index) => (
//         <div key={index} className="skill-box">
//           <img src={require(`../assets/skills/${skill}`)} alt={skill} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Skill;
