import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [navItems] = useState([
    "Gündem",
    "Finans",
    "Spor",
    "Hayat",
    "Dünya",
    "Ekonomi",
    "Astroloji",
    "Diğer",
  ]);
  return (
    <div className="nav__tops">

    <nav className="nav__bar">
        <NavLink to="/">Ana Sayfa</NavLink>
        {navItems.map((item, itemIndex) => (
          <NavLink to={`/category/${item}`}>{item}</NavLink>
        ))}
    </nav>
    </div>

  );
}
