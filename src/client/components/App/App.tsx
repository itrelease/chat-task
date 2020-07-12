import React from "react";

import { Header } from "@components/Header/Header";
import { Chat } from "@components/Chat/Chat";
import { SettingsButton } from "@components/Button/SettingsButton";
import { Modal } from "@components/Modal/Modal";

import { globalStyles } from "./global.styles";
import { styles } from "./App.styles";

export const App = () => {
  return (
    <div className="App">
      <style jsx>{globalStyles}</style>
      <style jsx>{styles}</style>

      <div className="App-content">
        <Header title="Chat" right={<SettingsButton />} />

        <Chat />
      </div>

      <Modal />
    </div>
  );
};
