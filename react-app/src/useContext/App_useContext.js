import React, { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Page from "./Page";

const App_useContext = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
};

export default App_useContext;
