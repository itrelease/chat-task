import React, { useCallback, useEffect } from "react";

import { useModal } from "@hooks/useModal";
import { IconClose } from "@icons/IconClose";
import { Button } from "@components/Button/Button";

import { SettingsModal } from "./SettingsModal";
import { styles } from "./Modal.styles";

const ESC_KEY = 27;

export const Modal = () => {
  const { type, status, close } = useModal();
  const handleKeydown = useCallback((event) => {
    if (event.keyCode === ESC_KEY) {
      close();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown, false);

    return () => {
      window.removeEventListener("keydown", handleKeydown, false);
    };
  }, []);

  if (status === "closed") {
    return null;
  }

  let content = null;

  switch (type) {
    case "settings": {
      content = <SettingsModal />;
      break;
    }

    default: {
      throw new Error(`Unknown modal type: ${type}`);
    }
  }

  return (
    <div className="Modal" data-status={status}>
      <style jsx>{styles}</style>

      <div className="Modal-content">
        <div className="Modal-close">
          <Button color="dark" onClick={close}>
            <IconClose />
          </Button>
        </div>

        {content}
      </div>
    </div>
  );
};
