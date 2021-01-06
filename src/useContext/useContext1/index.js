import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import {ThemeProvider} from './themeContext'

let AppUseContext1 = () => {
    return (
     <ThemeProvider>   
        <div>
            <Sidebar></Sidebar>
            <Content></Content>
        </div>
        </ThemeProvider>
    );
};

export default AppUseContext1;
