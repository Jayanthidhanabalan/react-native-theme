import { createContext } from 'react';
import { LIGHT, type themeProperties } from './Theme';

export interface ThemeContextType {
  theme: themeProperties;
  changeTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: LIGHT,
  changeTheme: () => {},
});
