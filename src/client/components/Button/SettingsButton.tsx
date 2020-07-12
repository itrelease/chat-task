import React from "react";

import { useModal } from "@hooks/useModal";
import { IconSettings } from "@icons/IconSettings";

import { Button } from "./Button";

export const SettingsButton = () => {
  const { open } = useModal();
  const handleClick = () => {
    open("settings");
  };

  return (
    <Button onClick={handleClick}>
      <IconSettings tintColor="#fff" />
    </Button>
  );
};
