import "./BeerDetail.css";

import { useParams, useOutletContext } from "react-router-dom";

function BeerDetail() {
  const { id } = useParams();
  const beer = useOutletContext();

  if (!beer && id) {
  }

  if (beer) {
    const { brand, name, style, ibu, alcohol } = beer;
    return (
      <div className="item--detail--container">
        <h3 className="item--header">{name}</h3>
        <p className="item--content">
          <span className="caption">Brand:</span> {brand}
        </p>
        <p className="item--content">
          <span className="caption">Style:</span> {style}
        </p>
        <p className="item--content">
          <span className="caption">IBU:</span> {ibu}
        </p>
        <p className="item--content">
          <span className="caption">Alcohol:</span> {alcohol}
        </p>
        <img src="../../../public/beer.png" className="bg-image"></img>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default BeerDetail;
