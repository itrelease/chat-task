import React from "react";

import { Button } from "../Button/Button";
import { IconSendMessage } from "../../icons/IconSendMessage";
import { styles } from "./MessageInput.styles";

type PropsType = {
  currentUser: UserType;
};

export const MessageInput = React.memo(({ currentUser }: PropsType) => {
  console.log("MessageInput#render", { currentUser });

  return (
    <div className="MessageInput">
      <style jsx>{styles}</style>

      <input className="MessageInput-input" type="text" />

      <Button onClick={() => {}}>
        <IconSendMessage tintColor="#fff" />
      </Button>
    </div>
  );
});
