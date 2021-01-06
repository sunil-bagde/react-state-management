import React from "react";
import {useTheme} from './themeContext'
let ThemeControl = () => {
    let {theme,setTheme} = useTheme();
 
    return (
        <div>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                    border: 0,
                    background: "transparent",
                    cursor:"pointer",
                    outline: 'none'
                }}
            >
                   <span title = "switch theme">
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
            </button>
        </div>
    );
};

export default ThemeControl;
