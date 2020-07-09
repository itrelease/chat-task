import React from "react";

import { styles } from "./MessageInput.styles";

type PropsType = {
  currentUser: UserType;
};

export const MessageInput = React.memo(({ currentUser }: PropsType) => {
  console.log("MessageInput#render", { currentUser });

  return (
    <div className="MessageInput">
      <style jsx>{styles}</style>
      <h1>MessageInput</h1>
    </div>
  );
});
