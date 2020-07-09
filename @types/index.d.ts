type SettingsType = {
  timeFormat: "12h" | "24h";
  ctrlEnter: boolean;
};

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
      type: "url";
      value: string;
      contentType: "image" | "unknown";
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
  messageIndexById: { [key: string]: number };
  messages: Array<MessageType>;
};
