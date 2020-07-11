import express, { Request, Response } from "express";
import socket from "socket.io";
import { nanoid } from "nanoid";

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
  socket.on("join", function (user: CurrentUserType) {
    socket.user = {
      ...user,
      online: true,
    };
    users.set(user.id, socket.user);
    io.emit("userConnected", socket.user);
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
    io.emit("userUpdate", socket.user);
  });

  socket.on("newMessage", function ({
    userId,
    message,
  }: {
    userId: string;
    message: string;
  }) {
    const prepatedMessage: MessageType = {
      id: nanoid(),
      userId,
      timestamp: Date.now(),
      data: [
        {
          type: "text",
          value: message,
        },
      ],
    };

    io.emit("receiveMessage", {
      message: prepatedMessage,
      user: users.get(userId),
    });
  });

  socket.on("disconnect", () => {
    users.delete(socket.user.id);

    const disconnectedUser = {
      ...socket.user,
      online: false,
    };

    io.emit("userDisconnected", disconnectedUser);
  });
});
