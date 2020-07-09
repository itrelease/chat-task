import React from "react";

import { useChat } from "../../hooks/useChat";
import { styles } from "./Chat.styles";

export const Chat = () => {
  const chat = useChat();

  console.log("Chat#render", { chat });

  return (
    <div className="Chat">
      <style jsx>{styles}</style>
      <h1>Chat</h1>

      {/* <MessageList currentUser={{}} messages={[]} users={[]} /> */}
      {/* <MessageInput currentUser={{}} /> */}
    </div>
  );
};
