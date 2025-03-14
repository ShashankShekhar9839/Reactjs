import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { io } from "socket.io-client";
import "../css/canvas.css";
import Button from "./Button";

const socket = io("http://localhost:4000"); // Change to your backend URL

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [brushColor, setBrushColor] = useState("black");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);

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

  // Update brush/eraser settings
  useEffect(() => {
    if (canvas) {
      if (isEraser) {
        canvas.freeDrawingBrush.color = "white"; // Erase effect
        canvas.freeDrawingBrush.width = brushSize + 10; // Eraser is slightly bigger
      } else {
        canvas.freeDrawingBrush.color = brushColor;
        canvas.freeDrawingBrush.width = brushSize;
      }
    }
  }, [brushColor, brushSize, isEraser, canvas]);

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

  // Clear Canvas
  const clearCanvas = () => {
    if (canvas) {
      canvas.clear();
      socket.emit("drawing-update", canvas.toJSON()); // Notify others
    }
  };

  const donwloadDrawing = () => {
    if (canvas) {
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "drawing.png";
      link.click();
    }
  };

  return (
    <div className="canvas-container">
      {/* Brush Controls */}
      <div>
        <label>Brush Color:</label>
        <input
          type="color"
          value={brushColor}
          disabled={isEraser}
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

        {/* Eraser Toggle Button */}
        <button onClick={() => setIsEraser(!isEraser)}>
          {isEraser ? "Switch to Brush" : "Switch to Eraser"}
        </button>

        <button onClick={clearCanvas}>Clear Canvas</button>
      </div>

      {/* Drawing Canvas */}
      <canvas ref={canvasRef} />
      <Button onClick={donwloadDrawing}>DownLoad</Button>
    </div>
  );
};

export default DrawingBoard;
