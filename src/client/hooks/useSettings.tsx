import React, { FunctionComponent, useContext, useState } from "react";

import { SETTINGS_KEY } from "../constants";
import { isStorageAvailable } from "../utils/isStorageAvailable";

type PropsType = {
  settings: SettingsType;
};

const SettingsContext = React.createContext<{
  settings: SettingsType;
  updateSettings: (newSettings: SettingsType) => void;
}>(null);

const SettingsProvider: FunctionComponent<PropsType> = ({
  settings,
  children,
}) => {
  const [currentSettings, setSettings] = useState<SettingsType>(settings);
  const updateSettings = (newSettings: SettingsType) => {
    if (isStorageAvailable("localStorage")) {
      window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
    }

    setSettings(newSettings);
  };
  const value = {
    settings: currentSettings,
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
