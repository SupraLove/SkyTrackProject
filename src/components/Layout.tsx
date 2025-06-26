import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="relative p-7">
      <Outlet />
    </div>
  );
}
