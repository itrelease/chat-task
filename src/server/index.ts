import express, { Request, Response } from "express";
import socket from "socket.io";
import { nanoid } from "nanoid";
import isURL from "is-url";

const app = express();
const PORT = 3000;
const imageExtensionsWhitelist = ["jpg", "jpeg", "png", "gif", "webp"];

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

const io = socket(server);
const users = new Map<string, UserType>();
const messages: Array<MessageType> = [];

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

    const initialMessages = messages.slice(-5);
    const initialUsers = initialMessages.reduce((acc, message) => {
      acc[message.userId] = users.get(message.userId);
      return acc;
    }, {});

    io.emit("userConnected", {
      connectedUser: socket.user,
      initialUsers,
      initialMessages,
    });
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
    const separators = message.match(/(\s+)/g) || [];
    const messageItems = message.split(/\s+/g);
    const data: Array<MessageDataType> = messageItems.reduce(
      (acc, item, index) => {
        if (isURL(item)) {
          const extension = item.split(".").slice(-1)[0];
          const contentType =
            imageExtensionsWhitelist.indexOf(extension) > -1
              ? "image"
              : "unknown";

          acc.push({
            type: "url",
            value:
              contentType === "image" ? item : item + (separators[index] || ""),
            contentType,
          });
        } else {
          acc.push({
            type: "text",
            value: item + (separators[index] || ""),
          });
        }

        return acc;
      },
      []
    );

    const prepatedMessage: MessageType = {
      id: nanoid(),
      userId,
      timestamp: Date.now(),
      data,
    };

    messages.push(prepatedMessage);

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
