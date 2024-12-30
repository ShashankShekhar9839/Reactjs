import React, { useState } from "react";

const Tabs = ({
  children,
  defaultActive = 0,
  onTabChange = () => {},
  containerClasses = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  const handleChange = (event) => {
    let clickedIndex = event.target.tabIndex;
    setActiveIndex(clickedIndex);
    if (onTabChange) {
      onTabChange(clickedIndex);
    }
  };

  const rendernav = () => {
    return children.map((child, index) => {
      let label = child.props.label;

      return (
        <li
          onClick={handleChange}
          tabIndex={index}
          key={index}
          className={`${index === activeIndex ? "active" : ""}`}
        >
          {label}
        </li>
      );
    });
  };

  const renderTabContent = () => {
    return children[activeIndex];
  };

  return (
    <div className={`tabs-container ${containerClasses}`}>
      <ul className="nav-wrapper">{rendernav()}</ul>
      <div className="content-wrapper">{renderTabContent()}</div>
    </div>
  );
};

export default Tabs;
