type ModalType = "settings";

type ModalStatusType = "closed" | "closing" | "opening" | "opened";

type SettingsType = {
  timeFormat: "12h" | "24h";
  ctrlEnter: boolean;
};

type CurrentUserType = {
  id: string;
  name: string;
  color: string;
};

type UserType = CurrentUserType & {
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
