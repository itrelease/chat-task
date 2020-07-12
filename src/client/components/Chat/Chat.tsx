import React from "react";

import { useChat } from "@hooks/useChat";
import { useSettings } from "@hooks/useSettings";

import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { styles } from "./Chat.styles";

export const Chat = () => {
  const { messages, users, sendMessage } = useChat();
  const { currentUser, settings } = useSettings();

  return (
    <div className="Chat">
      <style jsx>{styles}</style>

      <div className="Chat-content">
        <div className="Chat-messageList">
          <MessageList
            currentUser={currentUser}
            messages={messages}
            users={users}
          />
        </div>
      </div>

      <MessageInput
        currentUser={currentUser}
        ctrlEnter={settings.ctrlEnter}
        onSend={sendMessage}
      />
    </div>
  );
};
