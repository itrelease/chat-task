import React, { FunctionComponent, useContext, useState } from "react";

import { SETTINGS_KEY, CURRENT_USER_KEY } from "../constants";
import { isStorageAvailable } from "../utils/isStorageAvailable";

type PropsType = {
  currentUser: CurrentUserType;
  settings: SettingsType;
};

const SettingsContext = React.createContext<{
  currentUser: CurrentUserType;
  settings: SettingsType;
  updateCurrentUser: (newCurrentUser: CurrentUserType) => void;
  updateSettings: (newSettings: SettingsType) => void;
}>(null);

const SettingsProvider: FunctionComponent<PropsType> = ({
  currentUser,
  settings,
  children,
}) => {
  const [_currentUser, setCurrentUser] = useState<CurrentUserType>(currentUser);
  const [currentSettings, setSettings] = useState<SettingsType>(settings);
  const updateCurrentUser = (newCurrentUser: CurrentUserType) => {
    if (isStorageAvailable("localStorage")) {
      window.localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(newCurrentUser)
      );
    }

    setCurrentUser(newCurrentUser);
  };
  const updateSettings = (newSettings: SettingsType) => {
    if (isStorageAvailable("localStorage")) {
      window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
    }

    setSettings(newSettings);
  };

  const value = {
    currentUser: _currentUser,
    settings: currentSettings,
    updateCurrentUser,
    updateSettings,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => {
  return useContext(SettingsContext);
};

export { SettingsContext, SettingsProvider, useSettings };
