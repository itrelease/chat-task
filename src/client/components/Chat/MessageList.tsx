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
  data: [{ type: "text", value: "whoa" }],
};

export const MessageList = ({ currentUser, messages, users }: PropsType) => {
  console.log("MessageList#render", { currentUser, messages, users });

  return (
    <div className="MessageList">
      <style jsx>{styles}</style>
      <h1>MessageList</h1>
      <p>test 1</p>
      <p>test 2</p>
      <p>test 3</p>
      <p>test 4</p>
      <p>test 5</p>
      <p>test 6</p>
      <p>test 7</p>

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
