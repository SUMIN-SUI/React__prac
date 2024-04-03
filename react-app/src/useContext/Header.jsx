import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const style = {
    backgroundColor: isDark ? "black " : "white",
    color: isDark ? "white" : "black",
  };

  return (
    <div style={style}>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
