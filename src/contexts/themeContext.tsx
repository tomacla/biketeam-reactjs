import { createContext, FC, useContext, useEffect, useState } from 'react';

export const COLOR_THEME_DARK = 'dark';
export const COLOR_THEME_LIGHT = 'light';

export const ColorThemes = [COLOR_THEME_DARK, COLOR_THEME_LIGHT] as const;
export type ColorTheme = typeof ColorThemes[number];

interface ThemeContextInterface  {
  theme: ColorTheme,
  changeTheme: (theme: ColorTheme) => void,
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

export const ThemeContextProvider : FC = ({children}) => {
  const [theme, setTheme] = useState<ColorTheme>(COLOR_THEME_LIGHT);

  function changeTheme(theme : ColorTheme): void {
    setTheme(theme);
  }

  useEffect(() => {
    if (theme === COLOR_THEME_DARK) {
      document.body.classList.add('dark-content');
    }
    if (theme === COLOR_THEME_LIGHT) {
      document.body.classList.remove('dark-content');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = (): ThemeContextInterface | undefined => useContext(ThemeContext);

