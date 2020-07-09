import React from "react";

import { styles } from "./MessageList.styles";

type PropsType = {
  currentUser: UserType;
  messages: Array<MessageType>;
  users: Array<UserType>;
};

export const MessageList = ({ currentUser, messages, users }: PropsType) => {
  console.log("MessageList#render", { currentUser, messages, users });

  return (
    <div className="MessageList">
      <style jsx>{styles}</style>
      <h1>MessageList</h1>

      {/* {messages.map(message => {
        return <MessageItem key={message.id} message={message} sender={users[message.userId]} currentUser={currentUser} />
      })} */}
    </div>
  );
};
