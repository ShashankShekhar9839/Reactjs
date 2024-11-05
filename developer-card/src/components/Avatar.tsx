import React from "react";
import "../css/avatar.css";

interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return <img className="avatar" src={imageUrl} />;
};

export default Avatar;
