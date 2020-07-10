import React from "react";

import { Button } from "./Button";
import { IconSettings } from "../../icons/IconSettings";

export const SettingsButton = () => {
  console.log("SettingsButton#render");
  const handleClick = () => {
    console.log("settings click");
  };

  return (
    <Button onClick={handleClick}>
      <IconSettings tintColor="#fff" />
    </Button>
  );
};
