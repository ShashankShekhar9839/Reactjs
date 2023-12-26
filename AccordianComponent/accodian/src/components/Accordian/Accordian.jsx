
import { useEffect, useRef, useState } from "react";
import "../../scss/accordian.scss"; // Corrected the spelling to "accordian"
import PropTypes from "prop-types";

Accordian.propTypes = {
  // type of data
  data: PropTypes.array.isRequired,
  // scrollable
  shouldScroll: PropTypes.bool,
  // default open
  defaultOpen: PropTypes.number,
};

Accordian.defaultProps = {
  defaultOpen: null,
};

function Accordian(props) {
  const { data, ...otherProps } = props;
  const { defaultOpen } = otherProps;

  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const [heights, setHeights] = useState(Array(data.length).fill("0px"));

  const bodyRefs = useRef([]);

  useEffect(() => {
    if (defaultOpen !== null && defaultOpen <= data.length) {
      const defaultOpenIndex = defaultOpen - 1;
      setOpenIndex(defaultOpenIndex);
      setHeights((prevHeights) => {
        const updatedHeights = [...prevHeights];
        updatedHeights[defaultOpenIndex] = `${bodyRefs.current[defaultOpenIndex].scrollHeight}px`;
        return updatedHeights;
      });
    }
  }, [defaultOpen, data.length]);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
    setHeights((prevHeights) => {
      const updatedHeights = [...prevHeights];
      updatedHeights[index] = index === openIndex ? "0px" : `${bodyRefs.current[index].scrollHeight}px`;
      return updatedHeights;
    });
  };

  const renderHead = (data) => {
    return data?.map((item, index) => (
      <div
        className={`accordian-wrapper ${index === openIndex ? "active" : ""}`}
        key={index}
        onClick={() => handleClick(index)}
      >
        <div className="head-wrapper">
          {item.title && <p className="title">{item.title}</p>}
          {item.subtitle && <p>{item.subtitle}</p>}
        </div>

        {item?.content && (
          <div className="content-container" ref={(ref) => (bodyRefs.current[index] = ref)} style={{ height: heights[index] }}>
            <p>{item.content}</p>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="component-wrapper" {...otherProps}>
      <div>{renderHead(data)}</div>
    </div>
  );
}

export default Accordian;
