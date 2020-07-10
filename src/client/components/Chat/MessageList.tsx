import React from "react";

import { MessageItem } from "./MessageItem";
import { getColorFromId } from "../../utils/getColorFromId";
import { styles } from "./MessageList.styles";

type PropsType = {
  currentUser: UserType;
  messages: Array<MessageType>;
  users: { [key: string]: UserType };
};

const testM1User: UserType = {
  id: "testM1",
  color: getColorFromId("testM1"),
  online: true,
};

const testMessage: MessageType = {
  id: "testM1",
  userId: "testU1",
  timestamp: Date.now(),
  data: [
    { type: "text", value: "whoa" },
    {
      type: "url",
      value:
        "https://innotechtoday.com/wp-content/uploads/2018/10/satellite-1030779_1280.jpg",
      contentType: "image",
    },
    { type: "url", value: "https://google.com", contentType: "unknown" },
  ],
};

export const MessageList = ({ currentUser, messages, users }: PropsType) => {
  console.log("MessageList#render", { currentUser, messages, users });

  return (
    <div className="MessageList">
      <style jsx>{styles}</style>

      <div className="MessageList-item">
        <MessageItem
          message={testMessage}
          sender={testM1User}
          currentUser={currentUser}
        />
      </div>

      <div className="MessageList-item" data-own={true}>
        <MessageItem
          message={{
            ...testMessage,
            id: "testCU1",
            userId: currentUser.id,
            timestamp: Date.now(),
          }}
          sender={currentUser}
          currentUser={currentUser}
        />
      </div>

      {/*  */}
      {/* <div className="MessageList-item">
        <MessageItem
          message={testMessage}
          sender={testM1User}
          currentUser={currentUser}
        />
      </div>

      <div className="MessageList-item" data-own={true}>
        <MessageItem
          message={{
            ...testMessage,
            id: "testCU1",
            userId: currentUser.id,
            timestamp: Date.now(),
          }}
          sender={currentUser}
          currentUser={currentUser}
        />
      </div>
      <div className="MessageList-item">
        <MessageItem
          message={testMessage}
          sender={testM1User}
          currentUser={currentUser}
        />
      </div>

      <div className="MessageList-item" data-own={true}>
        <MessageItem
          message={{
            ...testMessage,
            id: "testCU1",
            userId: currentUser.id,
            timestamp: Date.now(),
          }}
          sender={currentUser}
          currentUser={currentUser}
        />
      </div>
      <div className="MessageList-item">
        <MessageItem
          message={testMessage}
          sender={testM1User}
          currentUser={currentUser}
        />
      </div>

      <div className="MessageList-item" data-own={true}>
        <MessageItem
          message={{
            ...testMessage,
            id: "testCU1",
            userId: currentUser.id,
            timestamp: Date.now(),
          }}
          sender={currentUser}
          currentUser={currentUser}
        />
      </div>
      <div className="MessageList-item">
        <MessageItem
          message={testMessage}
          sender={testM1User}
          currentUser={currentUser}
        />
      </div>

      <div className="MessageList-item" data-own={true}>
        <MessageItem
          message={{
            ...testMessage,
            id: "testCU1",
            userId: currentUser.id,
            timestamp: Date.now(),
          }}
          sender={currentUser}
          currentUser={currentUser}
        />
      </div>
      <div className="MessageList-item">
        <MessageItem
          message={testMessage}
          sender={testM1User}
          currentUser={currentUser}
        />
      </div>

      <div className="MessageList-item" data-own={true}>
        <MessageItem
          message={{
            ...testMessage,
            id: "testCU1",
            userId: currentUser.id,
            timestamp: Date.now(),
          }}
          sender={currentUser}
          currentUser={currentUser}
        />
      </div>
      <div className="MessageList-item">
        <MessageItem
          message={testMessage}
          sender={testM1User}
          currentUser={currentUser}
        />
      </div>

      <div className="MessageList-item" data-own={true}>
        <MessageItem
          message={{
            ...testMessage,
            id: "testCU1",
            userId: currentUser.id,
            timestamp: Date.now(),
          }}
          sender={currentUser}
          currentUser={currentUser}
        />
      </div>
      <div className="MessageList-item">
        <MessageItem
          message={testMessage}
          sender={testM1User}
          currentUser={currentUser}
        />
      </div>

      <div className="MessageList-item" data-own={true}>
        <MessageItem
          message={{
            ...testMessage,
            id: "testCU1",
            userId: currentUser.id,
            timestamp: Date.now(),
          }}
          sender={currentUser}
          currentUser={currentUser}
        />
      </div>
      <div className="MessageList-item">
        <MessageItem
          message={testMessage}
          sender={testM1User}
          currentUser={currentUser}
        />
      </div>

      <div className="MessageList-item" data-own={true}>
        <MessageItem
          message={{
            ...testMessage,
            id: "testCU1",
            userId: currentUser.id,
            timestamp: Date.now(),
          }}
          sender={currentUser}
          currentUser={currentUser}
        />
      </div> */}
      {/*  */}

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
};
