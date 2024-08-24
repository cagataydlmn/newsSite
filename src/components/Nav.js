import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="nav__bar">
            <NavLink to="/">
                Anasayfa
            </NavLink>
            <NavLink to="/">
                Gündem
            </NavLink>
            <NavLink to="/">
                Finans
            </NavLink>
            <NavLink to="/">
                Spor
            </NavLink>
            <NavLink to="/">
                Dünya
            </NavLink>
            <NavLink to="/">
                Astroloji
            </NavLink>
            <NavLink to="/">
                Diğer
            </NavLink>
        </nav>
            
        
        )
}