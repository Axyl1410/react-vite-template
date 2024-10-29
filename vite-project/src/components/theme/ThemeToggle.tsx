import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

/**
 * A toggle button to switch between light and dark theme.
 *
 * The toggle button is a Switch component from `@headlessui/react`.
 * The component is initialized with the theme stored in local storage.
 * The component will save the selected theme in local storage.
 *
 * The component will also add/remove the theme class to/from the root element.
 * The theme class will be used to style the application.
 *
 * The component does not accept any props.
 */
const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      className={cn(
        "relative inline-flex h-5 w-9 items-center rounded-full shadow-sm transition-colors",
        theme === "dark" ? "bg-gray-800" : "bg-gray-200",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-3 w-3 transform rounded-full bg-white transition-transform",
          theme === "dark" ? "translate-x-5" : "translate-x-1",
        )}
      />
    </Switch>
  );
};

export default ThemeToggle;
