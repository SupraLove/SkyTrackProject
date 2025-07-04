import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";

export function Layout() {
  return (
    <div className="relative p-7">
      <Header />
      <Outlet />
    </div>
  );
}
