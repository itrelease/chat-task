import React from "react";

import { Timestamp } from "./Timestamp";
import { styles } from "./MessageItem.styles";

type PropsType = {
  currentUser: CurrentUserType;
  sender: UserType;
  message: MessageType;
};

export const MessageItem = React.memo(
  ({ currentUser, sender, message }: PropsType) => {
    const style = {
      backgroundColor: sender.color,
    };
    const cornerStyle = {
      [currentUser.id === sender.id
        ? "borderLeftColor"
        : "borderRightColor"]: sender.color,
    };
    const status = sender.online ? "online" : "offline";

    return (
      <div className="MessageItem" style={style}>
        <style jsx>{styles}</style>

        <div className="MessageItem-meta MessageItem-meta--info">
          <span className="MessageItem-senderName">{sender.name}</span>

          {sender.id !== currentUser.id && (
            <span
              className="MessageItem-status"
              data-value={status}
              title={status}
            />
          )}
        </div>

        <div className="MessageItem-content">
          {message.data.map((item, index) => {
            return item.type === "url" && item.contentType === "image" ? (
              <img key={index} src={item.value} />
            ) : (
              <span key={index}>{item.value}</span>
            );
          })}
        </div>

        <div className="MessageItem-meta MessageItem-meta--time">
          <Timestamp timestamp={message.timestamp} />
        </div>

        <span
          className="MessageItem-corner"
          data-type={currentUser.id === sender.id ? "right" : "left"}
          style={cornerStyle}
        />
      </div>
    );
  }
);
