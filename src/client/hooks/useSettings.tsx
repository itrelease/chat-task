import React, { FunctionComponent, useContext, useState } from "react";

import { SETTINGS_KEY } from "../constants";
import { isStorageAvailable } from "../utils/isStorageAvailable";

type PropsType = {
  settings: SettingsType;
};

const SettingsContext = React.createContext<{
  status: SettingsStatusType;
  settings: SettingsType;
  open: () => void;
  close: () => void;
  updateSettings: (newSettings: SettingsType) => void;
}>(null);

const SettingsProvider: FunctionComponent<PropsType> = ({
  settings,
  children,
}) => {
  const [status, setStatus] = useState<SettingsStatusType>("closed");
  const [currentSettings, setSettings] = useState<SettingsType>(settings);
  const updateSettings = (newSettings: SettingsType) => {
    if (isStorageAvailable("localStorage")) {
      window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
    }

    setSettings(newSettings);
  };
  const close = () => {
    setStatus("closing");

    setTimeout(() => {
      setStatus("closed");
    }, 0);
  };
  const open = () => {
    setStatus("opening");

    setTimeout(() => {
      setStatus("opened");
    }, 0);
  };
  const value = {
    status,
    settings: currentSettings,
    updateSettings,
    open,
    close,
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
