import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    let [state, setState] = useState({});
    return (
        <ThemeContext.Provider
            value={{
                ...state,
                setTheme: (theme) => setState({ ...state, theme }),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider as default };
