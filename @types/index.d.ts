type UserType = {
  id: string;
  color: string;
  online: boolean;
};

type MessageDataType =
  | {
      type: "text";
      value: string;
    }
  | {
      type: "image";
      value: string;
      loaded: boolean;
    };

type MessageType = {
  id: string;
  userId: string;
  timestamp: number;
  data: Array<MessageDataType>;
};

type ChatType = {
  currentUser: UserType;
  users: { [key: string]: UserType };
  messages: Array<MessageType>;
};
