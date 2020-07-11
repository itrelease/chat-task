import React from "react";

import { useModal } from "../../hooks/useModal";
import { Button } from "./Button";
import { IconSettings } from "../../icons/IconSettings";

export const SettingsButton = () => {
  const { open } = useModal();
  console.log("SettingsButton#render");
  const handleClick = () => {
    open("settings");
  };

  return (
    <Button onClick={handleClick}>
      <IconSettings tintColor="#fff" />
    </Button>
  );
};
