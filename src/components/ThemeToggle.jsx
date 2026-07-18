import { useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const THEME_KEY = 'taskflow_theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage(THEME_KEY, 'light');

  // Apply the theme to <html> whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Dark mode' : 'Light mode'}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}