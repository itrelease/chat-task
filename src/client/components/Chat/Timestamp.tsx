import React from "react";

import { useSettings } from "../../hooks/useSettings";
import { styles } from "./Timestamp.styles";

type PropsType = {
  timestamp: number;
};

export const Timestamp = React.memo(({ timestamp }: PropsType) => {
  const { settings } = useSettings();
  const time = new Date(timestamp).toLocaleString([], {
    hour12: settings.timeFormat === "12h",
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log("Timestamp#render", { timestamp, settings });

  return (
    <span className="Timestamp">
      <style jsx>{styles}</style>
      {time}
    </span>
  );
});
