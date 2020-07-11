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
  const [chat, setChat] = useState<ChatType>({
    messages: [],
    messageIndexById: {},
    users: {},
    updateUserName: handleUpdateUserName,
  });
  const handleUserUpdate = useCallback(
    (user: UserType) => {
      console.log("handleUserUpdate", user);

      setChat({
        ...chat,
        users: {
          ...chat.users,
          [user.id]: user,
        },
      });
    },
    [chat]
  );

  useEffect(() => {
    if (!socketInstance.current) {
      socketInstance.current = socketIOClient.connect("http://localhost:3000");

      socketInstance.current.on("connect", () => {
        socketInstance.current.emit("join", currentUser);
      });

      socketInstance.current.on("userConnected", handleUserUpdate);

      socketInstance.current.on("userDisconnected", handleUserUpdate);

      socketInstance.current.on("userUpdate", handleUserUpdate);

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
