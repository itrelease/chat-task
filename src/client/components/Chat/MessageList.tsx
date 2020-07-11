import React from "react";

import { MessageItem } from "./MessageItem";
import { EmptyState } from "./EmptyState";
import { styles } from "./MessageList.styles";

type PropsType = {
  currentUser: CurrentUserType;
  messages: Array<MessageType>;
  users: { [key: string]: UserType };
};

export const MessageList = React.memo(
  ({ currentUser, messages, users }: PropsType) => {
    console.log("MessageList#render", { currentUser, messages, users });
    const isEmpty = messages.length === 0;

    return (
      <div className="MessageList" data-empty={isEmpty}>
        <style jsx>{styles}</style>

        {isEmpty && (
          <div className="MessageList-emptyState">
            <EmptyState />
          </div>
        )}

        {!isEmpty &&
          messages.map((message) => {
            const sender = users[message.userId];

            return (
              <div
                key={message.id}
                className="MessageList-item"
                data-own={sender.id === currentUser.id}
              >
                <MessageItem
                  message={message}
                  sender={sender}
                  currentUser={currentUser}
                />
              </div>
            );
          })}
      </div>
    );
  }
);
