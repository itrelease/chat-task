import React, { useCallback, useState } from "react";

import { USER_SETTINGS } from "@root/constants";
import { useSettings } from "@hooks/useSettings";
import { useChat } from "@hooks/useChat";
import { Button } from "@components/Button/Button";
import { IconSendMessage } from "@icons/IconSendMessage";

import { styles } from "./SettingsModal.styles";

const OnOffMap = {
  1: true,
  0: false,
};

export const SettingsModal = () => {
  const {
    currentUser,
    settings,
    updateCurrentUser,
    updateSettings,
  } = useSettings();
  const { updateUserName } = useChat();
  const [newUserName, setNewUserName] = useState(currentUser.name);
  const handleUserNameChange = (event) => {
    setNewUserName(event.currentTarget.value);
  };
  const handleSettingsChange = (event) => {
    const value =
      typeof OnOffMap[event.currentTarget.value] !== "undefined"
        ? OnOffMap[event.currentTarget.value]
        : event.currentTarget.value;

    updateSettings({
      ...settings,
      [event.currentTarget.name]: value,
    });
  };
  const saveUserName = useCallback(() => {
    if (newUserName && newUserName !== currentUser.name) {
      updateCurrentUser({
        ...currentUser,
        name: newUserName,
      });

      updateUserName(currentUser.id, newUserName);
    }
  }, [currentUser, newUserName]);
  const restoreUserSettings = useCallback(() => {
    updateSettings(USER_SETTINGS);
  }, [updateSettings]);

  return (
    <div className="SettingsModal">
      <style jsx>{styles}</style>

      <div className="SettingsModal-row SettingsModal-row--userName">
        <h3 className="SettingsModal-title">User Name</h3>

        <div className="SettingsModal-group">
          <input
            type="text"
            value={newUserName}
            onChange={handleUserNameChange}
          />
          <Button
            type="fill"
            color="blue"
            disabled={!newUserName}
            onClick={saveUserName}
          >
            <IconSendMessage tintColor="#fff" />
          </Button>
        </div>
      </div>

      <hr className="SettingsModal-separator" />

      <div className="SettingsModal-row">
        <h3 className="SettingsModal-title">Clock display</h3>
        <label className="SettingsModal-label">
          <input
            type="radio"
            name="timeFormat"
            value="12h"
            checked={settings.timeFormat === "12h"}
            onChange={handleSettingsChange}
          />
          <span>12 hours</span>
        </label>

        <label className="SettingsModal-label">
          <input
            type="radio"
            name="timeFormat"
            value="24h"
            checked={settings.timeFormat === "24h"}
            onChange={handleSettingsChange}
          />
          <span>24 hours</span>
        </label>
      </div>

      <div className="SettingsModal-row">
        <h3 className="SettingsModal-title">
          Send message on Ctrl/Cmd + Enter
        </h3>

        <label className="SettingsModal-label">
          <input
            type="radio"
            name="ctrlEnter"
            value={1}
            checked={settings.ctrlEnter}
            onChange={handleSettingsChange}
          />
          <span>On</span>
        </label>

        <label className="SettingsModal-label">
          <input
            type="radio"
            name="ctrlEnter"
            value={0}
            checked={!settings.ctrlEnter}
            onChange={handleSettingsChange}
          />
          <span>Off</span>
        </label>
      </div>

      <div className="SettingsModal-row">
        <button className="SettingsModal-reset" onClick={restoreUserSettings}>
          Reset to default
        </button>
      </div>
    </div>
  );
};
