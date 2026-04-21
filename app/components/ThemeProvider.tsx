"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  /* Default light = matches :root in globals.css before hydration */
  const [theme, setTheme] = useState<Theme>("light");

  useIsomorphicLayoutEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

