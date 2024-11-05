import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import Intro from "./Intro";
import Skill from "./Skill";
import SkillList from "./SkillList";

interface ProfileProps {
  name?: string;
  intro?: string;
  skills?: Array<string>;
  image?: string;
}

const DeveloperProfile: React.FC<ProfileProps> = () => {
  return (
    <Card>
      <Avatar imageUrl="https://img.freepik.com/free-photo/cyber-security-expert-working-with-technology-neon-lights_23-2151645607.jpg?semt=ais_hybrid" />
      <Intro
        name="Shashank Shekhar"
        description="Front-End Developer with a total experience of around two years. Seeking for opportunities where i can utilize my skills and contribute to the team"
      />
      <SkillList>
        <Skill skill="HTML" />
        <Skill skill="CSS" bgColor="red" />
        <Skill skill="JAVASCRIPT" bgColor="yellow" />
        <Skill skill="TYPESCRIPT" bgColor="green" />
        <Skill skill="REACTJS" bgColor="cyan" />
        <Skill skill="TAILWIND" bgColor="pink" />
        <Skill skill="WEBPACK" bgColor="orange" />
      </SkillList>
    </Card>
  );
};

export default DeveloperProfile;
