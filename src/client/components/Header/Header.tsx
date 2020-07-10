import React from "react";

import { useSettings } from "../../hooks/useSettings";
import { styles } from "./Header.styles";

type PropsType = {
  title: string;
  right?: JSX.Element;
};

export const Header = ({ title, right }: PropsType) => {
  const { settings } = useSettings();
  console.log("Header#render", { settings });

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
