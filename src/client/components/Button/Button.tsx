import React, { FunctionComponent } from "react";

import { styles } from "./Button.styles";

type PropsType = {
  type?: "fill" | "stroke" | "transparent";
  color?: "red" | "dark" | "blue";
  disabled?: boolean;
  onClick: () => void;
};

export const Button: FunctionComponent<PropsType> = ({
  children,
  type = "transparent",
  color = "red",
  disabled = false,
  onClick,
}) => {
  console.log("Button#render", children);

  return (
    <button
      className="Button"
      disabled={disabled}
      data-type={type}
      data-color={color}
      onClick={onClick}
    >
      <style jsx>{styles}</style>

      {children}
    </button>
  );
};
