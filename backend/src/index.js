import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const PORT = process.env.PORT || 5001;

io.on("connection", (socket) => {
  console.log("🔌 New client connected:", socket.id);
});

app.get("/", (req, res) => {
  res.send("Server is live");
});
server.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
