import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize theme
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const shouldBeDark = storedTheme ? storedTheme === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    setMounted(true);
    
    // Apply initial theme
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <button className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full bg-gray-800 text-white opacity-50">
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full
                 bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900
                 border border-gray-300 dark:border-gray-600
                 transition-all duration-300 hover:opacity-90
                 shadow-lg hover:shadow-xl active:scale-95"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}