import React from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";

import { App } from "./components/App/App";
import { ChatProvider } from "./hooks/useChat";
import { isStorageAvailable } from "./utils/isStorageAvailable";

let currentUserId = null;
const CURRENT_USER_ID_KEY = "currentUserId";
const isLocalStorageAvailable = isStorageAvailable("localStorage");

if (isLocalStorageAvailable) {
  currentUserId = window.localStorage.getItem(CURRENT_USER_ID_KEY);
}

if (!currentUserId) {
  currentUserId = nanoid();

  if (isLocalStorageAvailable) {
    window.localStorage.setItem(CURRENT_USER_ID_KEY, currentUserId);
  }
}

ReactDOM.render(
  <ChatProvider currentUserId={currentUserId}>
    <App />
  </ChatProvider>,
  document.getElementById("app")
);
