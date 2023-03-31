import BeerItem from "./BeerItem";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import NotFound from "../404/NotFound";

function BeerList({ url, beerState }) {
  const { id } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [beerStateVar, setBeerState] = beerState;

  // When the component is loaded, re-use the existing state
  // If there is no data, then fetch
  useEffect(() => {
    if (
      beerStateVar &&
      Array.isArray(beerStateVar) &&
      beerStateVar.length > 0
    ) {
      setIsLoading(false);
      setBeerState(beerStateVar);
    } else {
      loadBeerList();
    }
  }, []);

  // 3 states: 1) Loading    2) Error    3) List
  if (isLoading) {
    return <Loader isLoading={true}></Loader>;
  } else if (isError) {
    return (
      <NotFound message="Failed to fetch beer list. Try again later"></NotFound>
    );
  } else {
    let beerMatch = null;

    return (
      <div className="result-container">
        <div className="button--container">
          <button
            className="button refresh"
            onClick={() => {
              loadBeerList();
            }}
          >
            Refresh Beer List
          </button>
        </div>
        <ul className="list--container">
          {beerStateVar.map((beer) => {
            // no need to make an extra loop above..
            if (!beerMatch && beer.uid === id) {
              beerMatch = beer;
            }
            return <BeerItem key={beer.uid} beer={beer} />;
          })}
        </ul>
        <div className="detail--container detail--container--beer">
          <Outlet context={beerMatch} />
        </div>
      </div>
    );
  }

  function loadBeerList() {
    setIsLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Beer list fetch error");
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (data && Array.isArray(data) && data.length > 0) {
          setBeerState([...data]);
        } else {
          setBeerState([]);
        }
      })
      .catch((err) => {
        console.warn(err);
        setIsLoading(false);
        setIsError(true);
      });
  }
}

export default BeerList;
