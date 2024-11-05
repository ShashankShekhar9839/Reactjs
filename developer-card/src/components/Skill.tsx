import React from "react";
import "../css/skill.css";

interface SkillProps {
  skill?: string;
  bgColor?: string;
}

const forbiddenColors = ["white", "#ffffff", "rgb(255, 255, 255)"];

const Skill: React.FC<SkillProps> = ({ skill, bgColor = "blue" }) => {
  const backgroundColor = forbiddenColors.includes(bgColor.toLowerCase())
    ? "blue"
    : bgColor;
  return (
    <span
      className="skill-wrapper"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {skill}
    </span>
  );
};

export default Skill;
