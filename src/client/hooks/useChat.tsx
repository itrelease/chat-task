import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import socketIOClient from "socket.io-client";

import { getColorFromId } from "../utils/getColorFromId";

type PropsType = {
  currentUserId: string;
};

const ChatContext = React.createContext<ChatType>(null);

const ChatProvider: FunctionComponent<PropsType> = ({
  currentUserId,
  children,
}) => {
  const socketInstance = useRef(null);
  const [chat, setChat] = useState<ChatType>({
    currentUser: {
      id: currentUserId,
      online: true,
      color: getColorFromId(currentUserId),
    },
    messages: [],
    users: {},
  });
  const handleUserConnected = useCallback(
    (userId: string) => {
      console.log("handleUserConnected", userId);
      const user = chat.users[userId];

      setChat({
        ...chat,
        users: {
          ...chat.users,
          [userId]: user
            ? {
                ...user,
                online: true,
              }
            : {
                id: userId,
                online: true,
                color: getColorFromId(userId),
              },
        },
      });
    },
    [chat]
  );
  const handleUserDisconnect = useCallback(
    (userId: string) => {
      console.log("handleUserDisconnect", userId);
      const user = chat.users[userId];

      setChat({
        ...chat,
        users: {
          ...chat.users,
          [userId]: user
            ? {
                ...user,
                online: false,
              }
            : {
                id: userId,
                online: false,
                color: getColorFromId(userId),
              },
        },
      });
    },
    [chat]
  );

  useEffect(() => {
    if (!socketInstance.current) {
      socketInstance.current = socketIOClient.connect("http://localhost:3000");

      socketInstance.current.on("connect", () => {
        socketInstance.current.emit("join", currentUserId);
      });

      socketInstance.current.on("user connected", handleUserConnected);

      socketInstance.current.on("user disconnected", handleUserDisconnect);

      // socketInstance.current.on("new message", (data) => {
      //   console.log("new message", data);
      // });
    }

    return () => {
      if (socketInstance.current) {
        socketInstance.current.close();
        socketInstance.current = null;
      }
    };
  }, []);

  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};

const useChat = () => {
  const chat = useContext(ChatContext);

  return chat;
};

export { ChatContext, ChatProvider, useChat };
