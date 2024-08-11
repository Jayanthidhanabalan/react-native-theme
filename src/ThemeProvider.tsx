import React, { useState } from 'react';
import { LIGHT, DARK, type themeProperties } from './Theme';
import { ThemeContext } from './ThemeContext';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentMode] = useState<themeProperties>(LIGHT);
  const toggleTheme = (changedTheme: string) => {
    switch (changedTheme) {
      case 'LIGHT':
        setCurrentMode(LIGHT);
        break;
      case 'DARK':
        setCurrentMode(DARK);
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, changeTheme: toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
