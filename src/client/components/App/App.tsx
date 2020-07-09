import React from "react";

import { globalStyles } from "./global.styles";
import { styles } from "./App.styles";
import { Chat } from "../Chat/Chat";

export const App = () => {
  console.log("App#render");

  return (
    <div className="App">
      <style jsx>{globalStyles}</style>
      <style jsx>{styles}</style>

      <div className="App-content">
        <Chat />
      </div>
    </div>
  );
};
