import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="../">Home</NavLink>
      <NavLink to="../../beers/">Beers</NavLink>
      <NavLink to="../../banks/">Banks</NavLink>
    </nav>
  );
}
export default NavBar;
