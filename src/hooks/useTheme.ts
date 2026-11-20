import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";
const STORAGE_KEY = "nm-studio-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0B1020" : "#F6F8FF");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Theme still works for this session.
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((previous) => (previous === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}
