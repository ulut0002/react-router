import "./BeerDetail.css";
import { useParams, useOutletContext } from "react-router-dom";

function BeerDetail() {
  const { id } = useParams();
  const beer = useOutletContext();

  if (!beer && id) {
    //console.log("here");
  }

  if (beer) {
    return (
      <div>
        <div>id: {id}</div>
        <div>name: {beer.name}</div>
        <div>style: {beer.style}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default BeerDetail;
