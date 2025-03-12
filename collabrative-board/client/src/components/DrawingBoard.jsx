import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000"); // Change this to your backend URL

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [brushColor, setBrushColor] = useState("black");
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current);
    newCanvas.setWidth(800);
    newCanvas.setHeight(500);
    newCanvas.isDrawingMode = true;
    newCanvas.freeDrawingBrush.width = brushSize;
    newCanvas.freeDrawingBrush.color = brushColor;
    setCanvas(newCanvas);

    // Send drawing data on change
    const sendDrawingData = () => {
      const drawingData = newCanvas.toJSON();
      socket.emit("drawing-update", drawingData);
    };

    newCanvas.on("path:created", sendDrawingData);
    newCanvas.on("object:modified", sendDrawingData);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  // Update brush settings
  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.color = brushColor;
      canvas.freeDrawingBrush.width = brushSize;
    }
  }, [brushColor, brushSize, canvas]);

  // Receive drawing updates from WebSocket
  useEffect(() => {
    socket.on("drawing-update", (drawingData) => {
      if (canvas) {
        canvas.loadFromJSON(drawingData, canvas.renderAll.bind(canvas));
      }
    });

    return () => {
      socket.off("drawing-update");
    };
  }, [canvas]);

  // Erase function
  const clearCanvas = () => {
    if (canvas) {
      canvas.clear();
      socket.emit("drawing-update", canvas.toJSON()); // Notify others
    }
  };

  return (
    <div>
      {/* Brush Controls */}
      <div>
        <label>Brush Color:</label>
        <input
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />

        <label>Brush Size:</label>
        <input
          type="range"
          min="1"
          max="50"
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
        />

        <button onClick={clearCanvas}>Clear Canvas</button>
      </div>

      {/* Drawing Canvas */}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DrawingBoard;
