const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

let textData = "";
let drawingData = [];

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  // send current state

  socket.emit("init", { text: textData, drawing: drawingData });

  //   handle text updates

  socket.on("text-update", (text) => {
    textData = text;
    socket.broadcast.emit("text-update", text);
  });

  // handle drawing updates

  socket.on("drawing-update", (draw) => {
    drawingData.push(draw);
    socket.broadcast.emit("drawing-update", draw);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5173;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.listen(5173, () => console.log("Server running on port 5173"));
