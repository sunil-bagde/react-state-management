
import React from 'react';
import { useTheme } from './appContext';

  const ThemeControl = () => {
  let { theme, setTheme } = useTheme();


  return (
    <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle the theme!
    </div>
  );
};
export default ThemeControl
