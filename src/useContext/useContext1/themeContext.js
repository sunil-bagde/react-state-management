import React, { createContext, useContext, useState } from "react";
export const themes = {
  light: {
    foreground: "#000000",
    background: "#fff",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
let ThemeContext = createContext( );

let useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
  let [state, setTheme] = useState({ theme: "dark" });
 

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        setTheme: (theme) => setTheme({ ...state, theme }),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export { useTheme, ThemeProvider };
