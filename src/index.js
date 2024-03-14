import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { Database } from "./config/db/database.js";
import Route from "./routes/index.js";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

Database.connect();
const app = express();

const server = createServer(app);
const socketIo = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

Route(app);
socketIo.on("connection", (socket) => {
  socket.on("clientCommentPost", function (data) {
    socket.broadcast.emit(data.postId, {data});
    // phát sự kiện  có tên sendDataServer cùng với dữ liệu tin nhắn từ phía server
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected"); // Khi client disconnect thì log ra terminal.
  });
});

const PORT = process.env.PORT || 3000;
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
