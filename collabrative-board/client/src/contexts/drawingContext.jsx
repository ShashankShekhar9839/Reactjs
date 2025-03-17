import { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DrawingContext = createContext();

export const DrawingProvider = ({ children }) => {
  const [drawingData, setDrawingData] = useLocalStorage("drawings", []);

  return (
    <DrawingContext.Provider value={{ drawingData, setDrawingData }}>
      {children}
    </DrawingContext.Provider>
  );
};

export const useDrawing = () => {
  return useContext(DrawingContext);
};
