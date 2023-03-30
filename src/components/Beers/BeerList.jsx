import BeerItem from "./BeerItem";
import "./BeerList.css";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

function BeerList({ url, beerState }) {
  const { id } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [beerStateVar, setBeerState] = beerState;

  function selectBeer() {}

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
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Beer list fetch has failed :(</div>;
  } else {
    let beerMatch = null;

    return (
      <div className="result-container">
        <div className="button--container">
          <button
            onClick={() => {
              loadBeerList();
            }}
          >
            Refresh
          </button>
        </div>
        <ul className="list--container">
          {beerStateVar.map((beer) => {
            if (!beerMatch && beer.uid === id) {
              beerMatch = beer;
            }
            return <BeerItem key={beer.uid} beer={beer} />;
          })}
        </ul>
        <div className="detail--container">
          <Outlet context={beerMatch} />
        </div>
      </div>
    );
  }

  function loadBeerList() {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Beer list fetch error");
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          setBeerState([...data]);
        } else {
          setBeerState([]);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
      });
  }
}

export default BeerList;
