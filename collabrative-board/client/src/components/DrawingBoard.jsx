import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { io } from "socket.io-client";
import "../css/canvas.css";
import Button from "./Button";
import { useDrawing } from "../contexts/drawingContext";

const socket = io("http://localhost:4000"); // Change to your backend URL

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [brushColor, setBrushColor] = useState("black");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const { drawingData, setDrawingData } = useDrawing();

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current);
    newCanvas.setWidth(1024);
    newCanvas.setHeight(window.innerHeight - 120);
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

  const saveDrawing = () => {
    if (!canvas) return;

    const drawingJSON = canvas.toJSON();
    setDrawingData((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "My Drawing",
        drawing: drawingJSON, // Save as JSON
      },
    ]);
  };

  const loadDrawing = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const drawingData = localStorage.getItem("drawing");

    if (drawingData) {
      const img = new Image();
      img.src = drawingData;
      img.onload = () => ctx.drawImage(img, 0, 0);
    }
  };

  return (
    <div className="canvas-main">
      {/* Brush Controls */}
      <div className="canvas-container">
        <div className="canvas-controls">
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
          <button onClick={() => setIsEraser(!isEraser)}>
            {isEraser ? "Switch to Brush" : "Switch to Eraser"}
          </button>

          <button onClick={clearCanvas}>Clear Canvas</button>
        </div>
        <canvas ref={canvasRef} />
      </div>
      <div className="canvas-save-btn-wrapper">
        <h3>Save Everything!</h3>
        <Button onClick={donwloadDrawing} color="secondary" size="small">
          DownLoad
        </Button>
        <Button color="secondary" size="small" onClick={saveDrawing}>
          Save To Browser
        </Button>
      </div>
    </div>
  );
};

export default DrawingBoard;
