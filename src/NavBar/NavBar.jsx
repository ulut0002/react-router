import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink>Home</NavLink>
      <NavLink>Users</NavLink>
      <NavLink>Beers</NavLink>
      <NavLink>Banks</NavLink>
    </nav>
  );
}
export default NavBar;
