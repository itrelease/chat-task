import React from "react";

import { globalStyles } from "./global.styles";
import { styles } from "./App.styles";
import { Header } from "../Header/Header";
import { Chat } from "../Chat/Chat";
import { SettingsButton } from "../Button/SettingsButton";

export const App = () => {
  console.log("App#render");

  return (
    <div className="App">
      <style jsx>{globalStyles}</style>
      <style jsx>{styles}</style>

      <div className="App-content">
        <Header title="Chat" right={<SettingsButton />} />

        <Chat />
      </div>
    </div>
  );
};
