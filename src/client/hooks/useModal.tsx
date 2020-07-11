import React, { FunctionComponent, useContext, useState } from "react";

const ModalContext = React.createContext<{
  type: ModalType;
  status: ModalStatusType;
  open: (type: ModalType) => void;
  close: () => void;
}>(null);

const ModalProvider: FunctionComponent = ({ children }) => {
  const [type, setType] = useState<ModalType>(null);
  const [status, setStatus] = useState<ModalStatusType>("closed");
  const close = () => {
    setStatus("closing");

    setTimeout(() => {
      setStatus("closed");
      setType(null);
    }, 0);
  };
  const open = (type: ModalType) => {
    setType(type);
    setStatus("opening");

    setTimeout(() => {
      setStatus("opened");
    }, 0);
  };
  const value = {
    type,
    status,
    open,
    close,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const useModal = () => {
  return useContext(ModalContext);
};

export { ModalContext, ModalProvider, useModal };
