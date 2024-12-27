import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="tracking-widset">
        Fast React Pizza Co.
      </Link>
    </header>
  );
};

export default Header;
