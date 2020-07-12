import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import socketIOClient from "socket.io-client";

type PropsType = {
  currentUser: CurrentUserType;
};

const ChatContext = React.createContext<ChatType>(null);

const ChatProvider: FunctionComponent<PropsType> = ({
  currentUser,
  children,
}) => {
  const socketInstance = useRef(null);
  const handleUpdateUserName = useCallback(
    (userId: string, userName: string) => {
      if (socketInstance.current) {
        socketInstance.current.emit("userUpdateName", { userId, userName });
      }
    },
    [socketInstance.current]
  );
  const handleSendMessage = useCallback(
    (message: string) => {
      if (socketInstance.current) {
        socketInstance.current.emit("newMessage", {
          userId: currentUser.id,
          message,
        });
      }
    },
    [socketInstance.current, currentUser]
  );
  const [chat, setChat] = useState<ChatType>({
    messages: [],
    users: {},
    updateUserName: handleUpdateUserName,
    sendMessage: handleSendMessage,
  });
  const handleUserConnected = ({
    connectedUser,
    initialUsers,
    initialMessages,
  }: {
    connectedUser: UserType;
    initialUsers: { [key: string]: UserType };
    initialMessages: Array<MessageType>;
  }) => {
    const isSameUser = connectedUser.id === currentUser.id;

    setChat({
      ...chat,
      messages: isSameUser ? initialMessages : chat.messages,
      users: isSameUser
        ? {
            ...chat.users,
            ...initialUsers,
            [connectedUser.id]: connectedUser,
          }
        : {
            ...chat.users,
            [connectedUser.id]: connectedUser,
          },
    });
  };
  const handleUserUpdate = (user: UserType) => {
    setChat({
      ...chat,
      users: {
        ...chat.users,
        [user.id]: user,
      },
    });
  };
  const handleReceiveMessage = ({
    message,
    user,
  }: {
    message: MessageType;
    user: UserType;
  }) => {
    const storedUser = chat.users[user.id];

    setChat({
      ...chat,
      messages: chat.messages.concat(message),
      users: !storedUser
        ? {
            ...chat.users,
            [user.id]: user,
          }
        : chat.users,
    });
  };

  useEffect(() => {
    if (!socketInstance.current) {
      socketInstance.current = socketIOClient.connect("http://localhost:3000");

      socketInstance.current.on("connect", () => {
        socketInstance.current.emit("join", currentUser);
      });
    }

    return () => {
      if (socketInstance.current) {
        socketInstance.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (socketInstance.current) {
      socketInstance.current.on("userConnected", handleUserConnected);
      socketInstance.current.on("userDisconnected", handleUserUpdate);
      socketInstance.current.on("userUpdate", handleUserUpdate);
      socketInstance.current.on("receiveMessage", handleReceiveMessage);
    }

    return () => {
      if (socketInstance.current) {
        socketInstance.current.off("userConnected", handleUserConnected);
        socketInstance.current.off("userDisconnected", handleUserUpdate);
        socketInstance.current.off("userUpdate", handleUserUpdate);
        socketInstance.current.off("receiveMessage", handleReceiveMessage);
      }
    };
  }, [
    socketInstance,
    handleUserUpdate,
    handleReceiveMessage,
    handleUserConnected,
  ]);

  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};

const useChat = () => {
  const chat = useContext(ChatContext);

  return chat;
};

export { ChatContext, ChatProvider, useChat };
