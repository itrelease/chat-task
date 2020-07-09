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
    const style = {
      backgroundColor: sender.color,
    };

    return (
      <div className="MessageItem" style={style}>
        <style jsx>{styles}</style>

        <div className="MessageItem-content">
          {message.data.map((item) => {
            return <p>{item.value}</p>;
          })}
        </div>
      </div>
    );
  }
);
