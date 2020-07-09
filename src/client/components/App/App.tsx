import React from "react";

import { globalStyles } from "./global.styles";
import { styles } from "./App.styles";
import { Header } from "../Header/Header";
import { Chat } from "../Chat/Chat";

/*
background-color: rgba(255, 255, 255, .4);
padding: 6px 8px;
font-size: 24px;
border-radius: 50%;
*/

export const App = () => {
  console.log("App#render");

  return (
    <div className="App">
      <style jsx>{globalStyles}</style>
      <style jsx>{styles}</style>

      <div className="App-content">
        <Header title="Chat" />
        {/* <header className="App-header">
          <h1>Chat</h1>

          <span>🛠</span>
        </header> */}

        <Chat />
      </div>
    </div>
  );
};
