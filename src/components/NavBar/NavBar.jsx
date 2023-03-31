import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="nav--container">
        <NavLink to="../" className="button">
          Home
        </NavLink>
        <NavLink to="../../beers/" className="button">
          Beers
        </NavLink>
        <NavLink to="../../banks/" className="button">
          Banks
        </NavLink>
      </div>
    </nav>
  );
}
export default NavBar;
