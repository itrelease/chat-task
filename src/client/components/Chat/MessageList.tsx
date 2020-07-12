import React, { useEffect, useRef } from "react";

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
    const ref = useRef<HTMLDivElement>(null);
    const isEmpty = messages.length === 0;

    useEffect(() => {
      if (ref.current) {
        const { scrollHeight, scrollTop, offsetHeight } = ref.current;
        const scrollDiff = scrollTop + offsetHeight - scrollHeight;

        if (Math.abs(scrollDiff) < 200) {
          ref.current.scrollTop = ref.current.scrollHeight;
        }
      }
    }, [ref, messages]);

    return (
      <div ref={ref} className="MessageList" data-empty={isEmpty}>
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
