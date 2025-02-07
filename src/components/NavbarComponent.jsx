import { useState } from "react";
import { NavLink } from "react-router-dom";

//components
import ToggleDarkModeComponent from "./ToggleDarkModeComponent";

//icons
import { SiElectron } from "react-icons/si";

function NavbarComponent({ darkMode, setDarkMode }) {
  const [menuItems, setMenuItems] = useState([
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/products",
      label: "Products",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ]);

  return (
    <header className="container mx-auto bg-cyan-200 text-slate-900 dark:bg-cyan-900 dark:text-slate-200">
      <nav className="w-[95%] mx-auto flex items-center justify-between h-[80px]">
        <h1 className="text-2xl flex items-center gap-[10px]">
          <SiElectron size={45} />
          Electron Shop
        </h1>
        <ToggleDarkModeComponent
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <ul className="flex items-center gap-[20px]">
          {menuItems.map((el, i) => {
            return (
              <li
                key={i}
                className="hover:border-b-2 border-b-red-600 transition-all duration-100"
              >
                <NavLink to={el.path}>{el.label}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default NavbarComponent;
