import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext({ theme: 'light' });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = useCallback((newTheme) => {
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
