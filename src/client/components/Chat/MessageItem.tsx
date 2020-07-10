import React from "react";

import { Timestamp } from "./Timestamp";
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
    const arrowClassName =
      currentUser.id === sender.id
        ? "MessageItem-arrow MessageItem-arrow--right"
        : "MessageItem-arrow MessageItem-arrow--left";
    const arrowStyle: {
      borderRightColor?: string;
      borderLeftColor?: string;
    } = {};

    if (currentUser.id === sender.id) {
      arrowStyle.borderLeftColor = sender.color;
    } else {
      arrowStyle.borderRightColor = sender.color;
    }

    return (
      <div className="MessageItem" style={style}>
        <style jsx>{styles}</style>

        <div className="MessageItem-meta">
          <span>#{currentUser.id}</span>
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

        <span className={arrowClassName} style={arrowStyle} />
      </div>
    );
  }
);
