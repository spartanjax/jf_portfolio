import { useEffect, useState } from "react";
import SunIcon from "../../assets/icons/sun.png";   // light mode PNG
import MoonIcon from "../../assets/icons/moon.png"; // dark mode PNG
import "./ThemeToggle.mod.scss";

const ThemeToggle = () => {
  // ✅ initialize directly from localStorage (no flicker / reset)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply + save theme whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    console.log("Theme switched to:", theme);
  }, [theme]);

  return (
    <button
      className={`theme-toggle ${theme}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span className="thumb">
        <img
          src={theme === "light" ? SunIcon : MoonIcon}
          alt={theme === "light" ? "Light mode" : "Dark mode"}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
