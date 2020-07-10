import React from "react";

import { useSettings } from "../../hooks/useSettings";
import { Button } from "./Button";
import { IconSettings } from "../../icons/IconSettings";

export const SettingsButton = () => {
  const { open } = useSettings();
  console.log("SettingsButton#render");
  const handleClick = () => {
    open();
  };

  return (
    <Button onClick={handleClick}>
      <IconSettings tintColor="#fff" />
    </Button>
  );
};
