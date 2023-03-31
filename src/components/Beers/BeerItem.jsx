import { NavLink } from "react-router-dom";
import "./BeerItem.css";

function BeerItem({ beer }) {
  if (!beer) return null;
  return (
    <li className="list--item">
      <NavLink
        to={`/beers/${beer.uid}`}
        className="list--item--link item--beer"
      >
        <span className="material-icons">sports_bar</span>
        <span className="list--item--description">{beer.name}</span>
      </NavLink>
    </li>
  );
}
export default BeerItem;
