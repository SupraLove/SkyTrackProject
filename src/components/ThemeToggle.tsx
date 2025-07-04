import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/theme/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => {
          toggleTheme();
        }}
        className="p-2 rounded-full bg-neutral-800 transition-colors flex items-center justify-center hover:bg-neutral-700"
      >
        {theme === "dark" ? <Moon size={25} /> : <Sun size={25} />}
      </button>
    </div>
  );
}
