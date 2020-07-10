import React from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";

import { CURRENT_USER_ID_KEY, SETTINGS_KEY } from "./constants";
import { App } from "./components/App/App";
import { SettingsProvider } from "./hooks/useSettings";
import { ChatProvider } from "./hooks/useChat";
import { isStorageAvailable } from "./utils/isStorageAvailable";

let currentUserId = null;
let userSettings: SettingsType = {
  timeFormat: "12h",
  ctrlEnter: true,
};

const isLocalStorageAvailable = isStorageAvailable("localStorage");

if (isLocalStorageAvailable) {
  currentUserId = window.localStorage.getItem(CURRENT_USER_ID_KEY);

  const lastStoredSettings = window.localStorage.getItem(SETTINGS_KEY);

  if (lastStoredSettings) {
    userSettings = JSON.parse(lastStoredSettings);
  }
}

if (!currentUserId) {
  currentUserId = `Guest${nanoid()}`;

  if (isLocalStorageAvailable) {
    window.localStorage.setItem(CURRENT_USER_ID_KEY, currentUserId);
  }
}

ReactDOM.render(
  <SettingsProvider settings={userSettings}>
    <ChatProvider currentUserId={currentUserId}>
      <App />
    </ChatProvider>
  </SettingsProvider>,
  document.getElementById("app")
);
