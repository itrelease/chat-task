import React from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";

import { CURRENT_USER_KEY, SETTINGS_KEY, USER_SETTINGS } from "./constants";
import { App } from "./components/App/App";
import { ModalProvider } from "./hooks/useModal";
import { SettingsProvider } from "./hooks/useSettings";
import { ChatProvider } from "./hooks/useChat";
import { isStorageAvailable } from "./utils/isStorageAvailable";
import { getColorFromId } from "./utils/getColorFromId";

let currentUser: CurrentUserType = null;
let userSettings = USER_SETTINGS;

const isLocalStorageAvailable = isStorageAvailable("localStorage");

if (isLocalStorageAvailable) {
  const lastCurrentUser = window.localStorage.getItem(CURRENT_USER_KEY);
  const lastStoredSettings = window.localStorage.getItem(SETTINGS_KEY);

  if (lastCurrentUser) {
    currentUser = JSON.parse(lastCurrentUser);
  }

  if (lastStoredSettings) {
    userSettings = JSON.parse(lastStoredSettings);
  }
}

if (!currentUser) {
  const userId = nanoid();

  currentUser = {
    id: userId,
    name: `Guest-${userId.slice(0, 5)}`,
    color: getColorFromId(userId),
  };

  if (isLocalStorageAvailable) {
    window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
  }
}

ReactDOM.render(
  <ModalProvider>
    <SettingsProvider currentUser={currentUser} settings={userSettings}>
      <ChatProvider currentUser={currentUser}>
        <App />
      </ChatProvider>
    </SettingsProvider>
  </ModalProvider>,
  document.getElementById("app")
);
