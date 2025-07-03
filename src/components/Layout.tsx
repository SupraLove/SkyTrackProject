import { Outlet } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Layout() {
  return (
    <div className="relative p-7">
      <ThemeToggle />
      <Outlet />
    </div>
  );
}
