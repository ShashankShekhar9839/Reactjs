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
  const [canvas, setCanvas] = useState(null);
  const [brushColor, setBrushColor] = useState("black");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const [openSavePopup, setOpenSavePopup] = useState(false);
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

  // Load selected drawing
  useEffect(() => {
    if (canvas && selectedDrawing) {
      canvas.clear();
      canvas.loadFromJSON(selectedDrawing.drawing, () => {
        canvas.renderAll();
      });
    }
  }, [selectedDrawing, canvas]);

  // Enable eraser mode
  const toggleEraser = () => {
    if (!canvas) return;

    if (!isEraser) {
      // Activate eraser mode
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.color = "white"; // Simulate erasing
      canvas.freeDrawingBrush.width = brushSize + 10; // Slightly bigger eraser
    } else {
      // Switch back to normal brush mode
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.color = brushColor;
      canvas.freeDrawingBrush.width = brushSize;
    }

    setIsEraser(!isEraser);
  };

  // **NEW: Delete selected object**
  const deleteSelectedObject = () => {
    if (!canvas) return;

    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.remove(activeObject);
      canvas.discardActiveObject();
      canvas.requestRenderAll();
    }
  };

  // **FIXED: Save Drawing**
  const saveDrawing = (drawingName) => {
    if (!canvas) return;

    const drawingJSON = canvas.toJSON();
    setDrawingData((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: drawingName,
        drawing: drawingJSON, // Save as JSON
      },
    ]);

    setOpenSavePopup(false);
  };

  // **FIXED: Download Drawing**
  const downloadDrawing = () => {
    if (canvas) {
      // **Ensure latest render before downloading**
      canvas.renderAll();

      const dataURL = canvas.toDataURL({
        format: "png",
        quality: 1.0,
      });

      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "drawing.png";
      link.click();
    }
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

          <button onClick={toggleEraser}>
            {isEraser ? "Switch to Brush" : "Switch to Eraser"}
          </button>

          <button onClick={deleteSelectedObject}>Delete Object</button>
        </div>
        <canvas ref={canvasRef} />
      </div>

      {/* **Save & Download Buttons** */}
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
