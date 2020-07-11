import React, { FunctionComponent } from "react";

import { styles } from "./Button.styles";

type PropsType = {
  type?: "fill" | "stroke" | "transparent";
  color?: "red" | "dark" | "blue";
  onClick: () => void;
};

export const Button: FunctionComponent<PropsType> = ({
  children,
  type = "transparent",
  color = "red",
  onClick,
}) => {
  console.log("Button#render");

  return (
    <button
      className="Button"
      data-type={type}
      data-color={color}
      onClick={onClick}
    >
      <style jsx>{styles}</style>

      {children}
    </button>
  );
};
