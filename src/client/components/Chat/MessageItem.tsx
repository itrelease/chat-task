import React from "react";

import { styles } from "./MessageItem.styles";

type PropsType = {
  currentUser: UserType;
  sender: UserType;
  message: MessageType;
};

export const MessageItem = React.memo(
  ({ currentUser, sender, message }: PropsType) => {
    console.log("MessageItem#render", { currentUser, sender, message });

    return (
      <div className="MessageItem">
        <style jsx>{styles}</style>
        <h1>MessageItem</h1>
      </div>
    );
  }
);
