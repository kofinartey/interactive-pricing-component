import React, { createContext, useState } from "react";

export const TimeContext = createContext();

export function TimeProvider(props) {
  const [isAnnual, setAnnual] = useState("false");
  return (
    <TimeProvider value={{ isAnnual, setAnnual }}>
      {props.children}
    </TimeProvider>
  );
}
