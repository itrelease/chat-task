import React from "react";

import { MessageItem } from "./MessageItem";
import { styles } from "./MessageList.styles";

type PropsType = {
  currentUser: CurrentUserType;
  messages: Array<MessageType>;
  users: { [key: string]: UserType };
};

export const MessageList = React.memo(
  ({ currentUser, messages, users }: PropsType) => {
    console.log("MessageList#render", { currentUser, messages, users });

    return (
      <div className="MessageList">
        <style jsx>{styles}</style>

        {messages.map((message) => {
          return (
            <div key={message.id} className="MessageList-item">
              <MessageItem
                message={message}
                sender={users[message.userId]}
                currentUser={currentUser}
              />
            </div>
          );
        })}
      </div>
    );
  }
);
