import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { io } from "socket.io-client";
import "../css/canvas.css";
import Button from "./Button";
import { useDrawing } from "../contexts/drawingContext";
import NoteNamePopup from "./NoteNamePopup";
import { Download, Save } from "lucide-react";

const socket = io("https://collabrative-server-2.onrender.com/");

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
    newCanvas.setWidth(window.innerWidth - 50);
    newCanvas.setHeight(window.innerHeight - 120);
    newCanvas.isDrawingMode = true;
    newCanvas.freeDrawingBrush.width = brushSize;
    newCanvas.freeDrawingBrush.color = brushColor;
    setCanvas(newCanvas);

    // Send drawing data on change
    const sendDrawingData = () => {
      const drawingData = newCanvas.toJSON();
      socket.emit("drawing-update", drawingData); // Emit updated drawing to the server
    };

    newCanvas.on("path:created", sendDrawingData);
    newCanvas.on("object:modified", sendDrawingData);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (canvas) {
      if (isEraser) {
        canvas.freeDrawingBrush.color = "white";
        canvas.freeDrawingBrush.width = brushSize + 10;
      } else {
        canvas.freeDrawingBrush.color = brushColor;
        canvas.freeDrawingBrush.width = brushSize;
      }
    }
  }, [brushColor, brushSize, isEraser, canvas]);

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

  // **Save Drawing**
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

  // **Download Drawing**
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

  // Listen for drawing updates from other users
  useEffect(() => {
    socket.on("drawing-update", (newDrawingData) => {
      if (canvas) {
        canvas.loadFromJSON(newDrawingData, canvas.renderAll.bind(canvas));
      }
    });

    return () => {
      socket.off("drawing-update");
    };
  }, [canvas]);

  // Initial drawing sync
  useEffect(() => {
    socket.on("init-drawing", (initialDrawingData) => {
      if (canvas) {
        canvas.clear();
        initialDrawingData.forEach((drawing) => {
          canvas.loadFromJSON(drawing, () => {
            canvas.renderAll();
          });
        });
      }
    });

    return () => {
      socket.off("init-drawing");
    };
  }, [canvas]);

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
        </div>
        <canvas ref={canvasRef} />
      </div>

      {/* Save & Download Buttons */}
      <div className="canvas-save-btn-wrapper">
        <Button onClick={downloadDrawing} color="secondary" size="large">
          <Download />
        </Button>
        <Button
          color="secondary"
          size="large"
          onClick={() => setOpenSavePopup(true)}
        >
          <Save />
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
