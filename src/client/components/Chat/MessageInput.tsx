import React, { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "../Button/Button";
import { IconSendMessage } from "../../icons/IconSendMessage";
import { styles } from "./MessageInput.styles";

type PropsType = {
  currentUser: CurrentUserType;
};

export const MessageInput = React.memo(({ currentUser }: PropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState();
  const handleMessageChange = useCallback(
    (event) => {
      setMessage(event.currentTarget.value);
    },
    [message]
  );
  console.log("MessageInput#render", { currentUser });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
      />

      <Button type="fill" color="blue" disabled={!message} onClick={() => {}}>
        <IconSendMessage tintColor="#fff" />
      </Button>
    </div>
  );
});
