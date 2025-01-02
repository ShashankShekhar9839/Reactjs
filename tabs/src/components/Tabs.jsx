import React, { useState } from "react";

const Tabs = ({
  children,
  defaultActive = 0,
  onTabChange = () => {},
  containerClasses = "",
  threshold = 3,
  // showMoreTabs = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);
  const [showMoreTabs, setShowMoreTabs] = useState(false);

  const handleChange = (index) => {
    setActiveIndex(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  const handleMoreTabClick = () => {
    setShowMoreTabs(!showMoreTabs);
  };

  const rendernav = () => {
    const childrenArray = React.Children.toArray(children);
    const visibleTabs = childrenArray.slice(0, threshold); // Tabs to show
    const remainingTabs = childrenArray.slice(threshold); // Tabs to group under "More"

    return (
      <>
        {visibleTabs.map((child, index) => {
          const label = child.props.label || "Default Label";
          return (
            <li
              onClick={() => handleChange(index)}
              tabIndex={index}
              key={child.key || index}
              className={`${index === activeIndex ? "active" : ""}`}
            >
              {label}
            </li>
          );
        })}
        {remainingTabs.length > 0 && (
          <li className="more-tabs" onClick={handleMoreTabClick}>
            {`More`}
            {showMoreTabs && <ul className="dropdown">{renderMoreTabs()}</ul>}
          </li>
        )}
      </>
    );
  };

  const renderMoreTabs = () => {
    const childrenArray = React.Children.toArray(children);
    const validThreshold = threshold || childrenArray.length;

    return childrenArray.slice(validThreshold).map((child, index) => {
      const label = child.props.label || "Default Label";
      return (
        <>
          <li
            onClick={() => handleChange(index + threshold)}
            tabIndex={index}
            key={child.key || index} // Use child.key if available
            className={`${index === activeIndex ? "active" : ""}`}
          >
            {label}
          </li>
        </>
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
