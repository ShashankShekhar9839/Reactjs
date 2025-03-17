import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { io } from "socket.io-client";
import "../css/canvas.css";
import Button from "./Button";
import { useDrawing } from "../contexts/drawingContext";
import NoteNamePopup from "./NoteNamePopup";

const socket = io("http://localhost:4000");

const DrawingBoard = ({ selectedDrawing }) => {
  const canvasRef = useRef(null);
  const [openSavePopup, setOpenSavePopup] = useState(false);
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

  // Load selected drawing when it changes
  useEffect(() => {
    if (canvas && selectedDrawing) {
      console.log("Loading Drawing:", selectedDrawing);
      canvas.clear();
      canvas.loadFromJSON(
        selectedDrawing.drawing,
        () => {
          canvas.renderAll();
        },
        function (o, object) {
          object.set("selectable", true);
        }
      );
    }
  }, [selectedDrawing, canvas]);

  const clearCanvas = () => {
    if (canvas) {
      canvas.clear();
      socket.emit("drawing-update", canvas.toJSON()); // Notify others
    }
  };

  const downloadDrawing = () => {
    if (canvas) {
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "drawing.png";
      link.click();
    }
  };

  const saveDrawing = (drawingName) => {
    if (!canvas) return;
    setOpenSavePopup(true);

    const drawingJSON = canvas.toJSON();
    setDrawingData((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: drawingName,
        drawing: drawingJSON,
      },
    ]);
  };

  return (
    <div className="canvas-main">
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
        <Button onClick={downloadDrawing} color="secondary" size="small">
          Download
        </Button>
        <Button
          color="secondary"
          size="small"
          onClick={() => setOpenSavePopup(true)}
        >
          Save To Browser
        </Button>
      </div>
      {openSavePopup && (
        <NoteNamePopup
          onSaveClick={saveDrawing}
          onClose={() => setOpenSavePopup(false)}
        />
      )}
    </div>
  );
};

export default DrawingBoard;
