import React from "react";
import { useTheme, themes } from "./themeContext";
 
let Content = () => {
    let { theme  } = useTheme();  
    const { background, foreground } = themes[theme];

    return (
        <div
            style={{
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                color: foreground,
                background: background,
            }}
        >
            <h2>Content</h2>
        </div>
    );
};

export default Content;
