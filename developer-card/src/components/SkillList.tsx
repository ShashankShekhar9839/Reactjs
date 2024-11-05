import React from "react";
import "../css/skillList.css";

interface SkillsListProps {
  children?: any;
}

const SkillList: React.FC<SkillsListProps> = ({ children }) => {
  return <div className="skill-list">{children}</div>;
};

export default SkillList;
