import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

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
  const [isOpen, setOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("burger-menu-close");

  // isOpen durumunu izleyerek menuClass'ı güncelleme
  useEffect(() => {
    if (isOpen) {
      setMenuClass("burger-menu-open");
    } else {
      setMenuClass("burger-menu-close");
    }
  }, [isOpen]);

  return (
    <div className="nav__tops">
      {/* Normal Menü */}
      <nav className="nav__bar">
        <NavLink to="/">Ana Sayfa</NavLink>
        {navItems.map((item, itemIndex) => (
          <NavLink key={itemIndex} to={`/category/${item}`}>
            {item}
          </NavLink>
        ))}
        <NavLink to="/insertNews">Haber ekle</NavLink>
      </nav>

<div className="hamburger__menu">
<div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      <nav className={menuClass}>
        <NavLink to="/">Ana Sayfa</NavLink>
        {navItems.map((item, itemIndex) => (
          <NavLink   style={{ textDecoration: "none" }}          key={itemIndex} to={`/category/${item}`}>
            <div className="active">
              {item}
            </div>
          </NavLink>
        ))}
      </nav>

</div>
     
      </div>
    );
  }
  