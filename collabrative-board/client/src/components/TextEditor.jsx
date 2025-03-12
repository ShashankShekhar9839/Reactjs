import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000"); // Change this to your backend URL

const TextEditor = () => {
  const [text, setText] = useState("");

  // Handle text change and send to WebSocket
  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    socket.emit("text-update", newText);
  };

  // Listen for text updates from WebSocket
  useEffect(() => {
    socket.on("text-update", (newText) => {
      setText(newText);
    });

    return () => {
      socket.off("text-update");
    };
  }, []);

  return (
    <textarea
      value={text}
      onChange={handleChange}
      rows="10"
      cols="50"
      placeholder="Start typing..."
    />
  );
};

export default TextEditor;
