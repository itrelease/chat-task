import React, { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "../Button/Button";
import { IconSendMessage } from "../../icons/IconSendMessage";
import { styles } from "./MessageInput.styles";

type PropsType = {
  currentUser: CurrentUserType;
  ctrlEnter: boolean;
  onSend: (message: string) => void;
};

const ENTER_KEY = 13;

export const MessageInput = React.memo(
  ({ currentUser, ctrlEnter, onSend }: PropsType) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState<string>("");
    const handleMessageChange = useCallback(
      (event) => {
        setMessage(event.currentTarget.value);
      },
      [message]
    );
    const sendMessage = useCallback(() => {
      onSend(message);
      setMessage("");
      inputRef.current.focus();
    }, [message, onSend]);
    const handleSendClick = useCallback(() => {
      sendMessage();
    }, [message, onSend]);
    const handleKeyDown = useCallback(
      (event) => {
        if (event.keyCode !== ENTER_KEY || !message) {
          return;
        } else if (
          ctrlEnter &&
          event.ctrlKey === false &&
          event.metaKey === false
        ) {
          return;
        }

        sendMessage();
      },
      [message, ctrlEnter, onSend]
    );

    return (
      <div className="MessageInput">
        <style jsx>{styles}</style>

        <input
          ref={inputRef}
          className="MessageInput-input"
          type="text"
          value={message}
          placeholder="Type your message..."
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />

        <Button
          type="fill"
          color="red"
          disabled={!message}
          onClick={handleSendClick}
        >
          <IconSendMessage tintColor="#fff" />
        </Button>
      </div>
    );
  }
);
