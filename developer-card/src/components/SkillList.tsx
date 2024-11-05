import React from "react";
import "../css/skillList.css";

const SkillList: React.FC = ({ children }) => {
  return <div className="skill-list">{children}</div>;
};

export default SkillList;
