import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/theme/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-7 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={() => {
          toggleTheme();
        }}
        className="p-2 rounded-full bg-neutral-800 transition-colors flex items-center justify-center hover:bg-neutral-700"
      >
        {theme === "dark" ? <Moon size={22} /> : <Sun size={22} />}
      </button>
    </div>
  );
}
