import React, { useCallback, useEffect } from "react";

import { useSettings } from "../../hooks/useSettings";
import { IconClose } from "../../icons/IconClose";
import { Button } from "../Button/Button";
import { styles } from "./SettingsModal.styles";

const ESC_KEY = 27;

export const SettingsModal = () => {
  const { status, settings, close } = useSettings();
  const handleKeydown = useCallback((event) => {
    if (event.keyCode === ESC_KEY) {
      close();
    }
  }, []);
  console.log("SettingsModal#render", { status, settings });

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown, false);

    return () => {
      window.removeEventListener("keydown", handleKeydown, false);
    };
  }, []);

  if (status === "closed") {
    return null;
  }

  return (
    <div className="SettingsModal" data-status={status}>
      <style jsx>{styles}</style>

      <div className="SettingsModal-content">
        <div className="SettingsModal-close">
          <Button color="dark" onClick={close}>
            <IconClose />
          </Button>
        </div>

        <div className="SettingsModal-row">
          <h3 className="SettingsModal-title">Clock display</h3>
          <label className="SettingsModal-label">
            <input
              type="radio"
              name="timeFormat"
              value="12h"
              checked={settings.timeFormat === "12h"}
            />
            <span>12 hours</span>
          </label>

          <label className="SettingsModal-label">
            <input
              type="radio"
              name="timeFormat"
              value="24h"
              checked={settings.timeFormat === "24h"}
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
            />
            <span>On</span>
          </label>

          <label className="SettingsModal-label">
            <input
              type="radio"
              name="ctrlEnter"
              value={0}
              checked={!settings.ctrlEnter}
            />
            <span>Off</span>
          </label>
        </div>

        <div className="SettingsModal-row">
          <button className="SettingsModal-reset" onClick={() => {}}>
            Reset to default
          </button>
        </div>
      </div>
    </div>
  );
};
