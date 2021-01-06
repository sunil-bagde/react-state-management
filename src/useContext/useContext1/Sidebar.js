import React from "react";
import ThemeControl from "./ThemeControl";

let Sidebar = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: 20,
                padding: 0,
                margin: 0,
                background: "#fff",
                borderBottom: "solid 2px #ffc0cb7a",
            }}
        ><p></p>
            <ThemeControl />
        </div>
    );
};

export default Sidebar;
