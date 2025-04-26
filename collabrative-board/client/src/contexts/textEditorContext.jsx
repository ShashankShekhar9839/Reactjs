import { createContext, useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000", { autoConnect: false });

const TextEditorContext = createContext();

export const TextEditorProvider = ({ children }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.connect();

    socket.on("text-update", (newText) => {
      setText(newText);
    });

    return () => {
      socket.off("text-update");
      socket.disconnect();
    };
  }, []);

  const updateText = (newText) => {
    setText(newText);
    socket.emit("text-update", newText);
  };

  return (
    <TextEditorContext.Provider value={{ text, updateText, setText }}>
      {children}
    </TextEditorContext.Provider>
  );
};

export const useTextEditor = () => {
  return useContext(TextEditorContext);
};
