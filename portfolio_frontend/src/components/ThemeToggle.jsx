import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 rounded-full ${theme=='light'?'bg-black/5':'bg-white/10'} hover:scale-110 transition-all duration-300`}
    >
      {theme === "dark" ? (
        <Sun className="text-[var(--color-color6)] w-5 h-5" />
      ) : (
        <Moon className="text-[var(--color-color6)] w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;