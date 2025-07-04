import { match } from "path-to-regexp";
import { ThemeToggle } from "../ThemeToggle";
import { HEADER_MENU_DATA } from "./header-menu.data";
import { HeaderMenuItem } from "./HeaderMenuItem";
import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";

export function Header() {
  const location = useLocation();
  return (
    // lg:w-full lg:relative lg:top-0 lg:mb-7
    <div className="absolute top-15 left-1/2 -translate-x-1/2 flex items-center justify-between w-1/2 rounded-full shadow bg-neutral-800 p-2 pr-6 ">
      <div className="flex items-center gap-4">
        <img
          src="./airlogoheader.svg"
          alt="airlogoheader"
          width={60}
          height={60}
        />
        <nav>
          <ul className="flex items-center gap-4">
            {HEADER_MENU_DATA.map((itemMenu) => (
              <HeaderMenuItem
                item={itemMenu}
                key={itemMenu.href}
                isActive={!!match(itemMenu.href)(location.pathname)}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4 ">
        <Link
          to="./favorites"
          className="p-2 rounded-full bg-neutral-800 transition-colors flex items-center justify-center hover:bg-neutral-700"
        >
          <Heart size={25} />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
