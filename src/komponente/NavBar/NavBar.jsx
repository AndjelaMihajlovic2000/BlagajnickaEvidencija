import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className={classes.nav}>
        <ul>
            <li>
                <NavLink
                className={classes.link}
                to = "/pocetna" 
                activeClassName={classes.active}>
                    Pocetna
                </NavLink>
            </li>
            <li>
            <NavLink
                className={classes.link}
                to = "/stanje" 
                activeClassName={classes.active}>
                    Stanje
            </NavLink>
            <NavLink
                className={classes.link}
                to = "/istorija" 
                activeClassName={classes.active}>
                    Istorija Transakcija
            </NavLink>
            <NavLink
                className={classes.link}
                to = "/dodaj" 
                activeClassName={classes.active}>
                    Dodaj stavku
                </NavLink>

            </li>
        </ul>

      
    </nav>
  )
}

export default NavBar
