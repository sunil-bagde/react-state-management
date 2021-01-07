import React from 'react'
import useDarkMode from './useDarkMode'
let AppUseEffect = () => {
    let isDark = useDarkMode();
    return (
        <div style={{
            background: isDark ? "black":"white",
            color: isDark ? "white":"black",
            padding:20,
            textAlign:"center",
            border: `1px solid ${isDark? 'white' :'black'}`

        }}>
            <h3>Ultimate courses React state mgm</h3>
        </div>
    )
}

export default AppUseEffect;