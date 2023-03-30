import { NavLink } from "react-router-dom";
import "./BeerItem.css";

function BeerItem({ beer }) {
  if (!beer) return null;
  return (
    <li className="list--item">
      <NavLink to={`/beers/${beer.uid}`} className="list--item--link">
        <span className="material-icons">sports_bar</span> {beer.name}
      </NavLink>
    </li>
  );
}
export default BeerItem;
