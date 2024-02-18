import { useEffect, useState } from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";

const Switcher = () => {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "dark";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const getThemeStorage = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  useEffect(() => {
    getThemeStorage();
    if (theme === "light") {
      document.documentElement.classList.toggle("dark", true);
    } else {
      document.documentElement.classList.toggle("dark", false);
    }
  }, [theme]);

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="text-white bg-slate-700 dark:bg-slate-400 dark:text-slate-800 font-bold text-xl p-2 rounded-full border-2 border-transparent hover:border-violet-500"
      >
        {theme === "light" ? <LuMoonStar /> : <LuSun />}
      </button>
    </div>
  );
};
export default Switcher;
