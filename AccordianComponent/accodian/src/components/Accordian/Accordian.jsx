import { useEffect, useRef, useState } from "react";
import "../../scss/accordian.scss";
import PropTypes from "prop-types";

Accordian.PropTypes = {
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
  let { data, ...otherProps } = props;
  let { defaultOpen } = otherProps;

  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const [height, setHeight] = useState(false);
  const [isActive, setIsActive] = useState("0px");
  let bodyRef = useRef(null);

  useEffect(() => {
    let elements = document.querySelectorAll(".head-wrapper");
    let handleDefaultOpen = () => {
      for (let i = 0; i < elements.length; i++) {
        if (defaultOpen <= elements.length && defaultOpen === i + 1) {
          elements[defaultOpen - 1].classList.add("default-open-class");
        }
      }
    };

    handleDefaultOpen();
  }, [defaultOpen]);

  let handleClick = (index) => {
     setIsActive(!isActive);
     setHeight(isActive ? "0px" : `${bodyRef.current.scrollHeight}px`);
  };

  let renderHead = (data) => {
    return data?.map((item, index) => (
      <div
        className="accordian-wrapper"
        key={index}
        onClick={() => handleClick(index)}
      >
        <div>
          {item.title ? <p className="title"> {item.title}</p> : null}
          {item.subtitle ? <p>{item.subtitle}</p> : null}
        </div>

        {item?.content ? (
          <div className="content-container" ref={bodyRef} style={{maxHeight : `${height}`}}>{item.content}</div>
        ) : null}
      </div>
    ));
  };

  return (
    <div className="accordian-wrapper" {...otherProps}>
      <div>{renderHead(data)}</div>
    </div>
  );
}

export default Accordian;
