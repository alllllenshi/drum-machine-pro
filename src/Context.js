import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const ULTIMATE_ARRAY = [...Array(12)].map((ele) =>
    [...Array(6)].map((ele) => Array(20).fill(false))
  );

  const [UltimateClipControl, setUltimateClipControl] =
    useState(ULTIMATE_ARRAY);

  const [patternList, setPatternList] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [started, setStarted] = useState(false);

  return (
    <Context.Provider
      value={{
        patternNum: patternList.findIndex((e) => e === true),
        clipState: UltimateClipControl,
        setClipState: setUltimateClipControl,
        patternList,
        setPatternList,
        started,
        setStarted,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
