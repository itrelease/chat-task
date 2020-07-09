import React from "react";

import { useSettings } from "../../hooks/useSettings";
import { styles } from "./Timestamp.styles";

type PropsType = {
  timestamp: number;
};

export const Timestamp = React.memo(({ timestamp }: PropsType) => {
  const { settings } = useSettings();
  console.log("Timestamp#render", { timestamp, settings });

  return (
    <div className="Timestamp">
      <style jsx>{styles}</style>
      <h1>Timestamp</h1>
    </div>
  );
});
