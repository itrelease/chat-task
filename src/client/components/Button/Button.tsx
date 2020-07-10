import React, { FunctionComponent } from "react";

import { styles } from "./Button.styles";

type PropsType = {
  onClick: () => void;
};

export const Button: FunctionComponent<PropsType> = ({ children, onClick }) => {
  console.log("Button#render");

  return (
    <button className="Button" onClick={onClick}>
      <style jsx>{styles}</style>

      {children}
    </button>
  );
};
