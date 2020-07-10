import React from "react";

import { styles } from "./Header.styles";

type PropsType = {
  title: string;
  right?: JSX.Element;
};

export const Header = ({ title, right }: PropsType) => {
  return (
    <header className="Header">
      <style jsx>{styles}</style>

      <h1 className="Header-title">{title}</h1>

      {typeof right !== "undefined" && (
        <div className="Header-action Header-action--right">{right}</div>
      )}
    </header>
  );
};
