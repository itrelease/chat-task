import React, { FunctionComponent } from "react";

import { styles } from "./Button.styles";

type PropsType = {
  color?: "red" | "dark";
  onClick: () => void;
};

export const Button: FunctionComponent<PropsType> = ({
  children,
  color = "red",
  onClick,
}) => {
  console.log("Button#render");

  return (
    <button className="Button" data-color={color} onClick={onClick}>
      <style jsx>{styles}</style>

      {children}
    </button>
  );
};
