"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "saffron" | "dark" | "blue" | "green";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("saffron");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("laura-theme") as Theme;
    if (savedTheme) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("saffron");
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement;
    // Remove dark class if changing from dark theme
    html.classList.remove("dark");
    // Remove old data-theme
    html.removeAttribute("data-theme");

    if (newTheme === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", newTheme);
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("laura-theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
