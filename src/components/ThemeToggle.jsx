import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

export const ThemeToggle = ({ showScrollTop }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') ?? 'dark';
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'cursor-pointer fixed right-6 z-[60] p-3 rounded-full shadow-lg backdrop-blur',
        'transition-all duration-300 border border-border flex',

        // ✔ Position logic sama seperti sebelumnya
        !showScrollTop && 'bottom-10',
        showScrollTop && 'bottom-24',

        // 🌗 ✔ Background menyesuaikan theme
        isDarkMode
          ? 'bg-card/90 hover:bg-card' // dark mode
          : 'bg-zinc-800 hover:bg-zinc-700 text-white' // light mode → gelap
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-100" />
      )}
    </button>
  );
};
