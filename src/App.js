import React, { useState } from 'react';
import { ChildOne } from './ChildOne';

// export const ThemeContext = createContext();

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    // <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <ChildOne darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    // </ThemeContext.Provider>
  );
}
