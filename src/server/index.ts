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
const users = new Map<string, UserType>();

type CustomSocketType = socket.Socket & {
  user: UserType;
};

io.on("connection", function (socket: CustomSocketType) {
  console.log("Made socket connection");

  socket.on("join", function (user: UserType) {
    socket.user = user;
    users.set(user.id, user);
    socket.broadcast.emit("userConnected", user);
  });

  socket.on("userUpdateName", function ({
    userId,
    userName,
  }: {
    userId: string;
    userName: string;
  }) {
    socket.user = {
      ...socket.user,
      name: userName,
    };

    users.set(userId, socket.user);
    console.log("%%%%%%%%% USER UPDATE NAME", socket.user);
    io.emit("userUpdate", socket.user);
  });

  socket.on("disconnect", () => {
    users.delete(socket.user.id);

    const disconnectedUser = {
      ...socket.user,
      online: false,
    };

    socket.broadcast.emit("userDisconnected", disconnectedUser);
  });
});
