import express, { Request, Response } from "express";
import socket from "socket.io";

const app = express();
const PORT = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

const io = socket(server);
const users = new Set<string>();

type CustomSocketType = socket.Socket & {
  userId: string;
};

io.on("connection", function (socket: CustomSocketType) {
  console.log("Made socket connection");

  socket.on("join", function (userId: string) {
    socket.userId = userId;
    users.add(userId);
    socket.broadcast.emit("user connected", userId);
  });

  socket.on("disconnect", () => {
    users.delete(socket.userId);
    socket.broadcast.emit("user disconnected", socket.userId);
  });
});
