import React from "react";
import { forwardRef } from "react";
import "../App.css";
const Note = (props, ref) => {
  const {content, initialPosition} = props;
  console.log('ref',ref)
  return <div className="note-wrapper" ref={ref} style={{
    position : "absolute",
    top : `${initialPosition?.x}px`,
    left : `${initialPosition?.y}px`,
  }}> 📌 {content}</div>;
};

export default forwardRef(Note);
