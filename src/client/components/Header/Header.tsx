import React from "react";

import { useSettings } from "../../hooks/useSettings";
import { styles } from "./Header.styles";

type PropsType = {
  title: string;
};

export const Header = ({ title }: PropsType) => {
  const { settings } = useSettings();
  console.log("Header#render", { settings });

  return (
    <header className="Header">
      <style jsx>{styles}</style>

      <h1 className="Header-title">{title}</h1>
    </header>
  );
};
