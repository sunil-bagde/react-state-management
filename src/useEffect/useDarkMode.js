import  { useState, useEffect } from "react";
let initialMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

let useDarkMode = () => {
    let [darkMode, setDarkMode] = useState(initialMode);
    let listener = (event) => {
        setDarkMode(event.matches);
    };

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", listener);
        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", listener);
        };
    }, []);
    return darkMode;
};

export default useDarkMode;
