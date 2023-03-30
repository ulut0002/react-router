import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { setConfiguration } from "react-grid-system";

import "./App.css";

import Home from "./Home";
import NavBar from "./components/NavBar/NavBar";
import BeerList from "./components/Beers/BeerList";
import BeerItem from "./components/Beers/BeerItem";
import BankList from "./components/Banks/BankList";
import BankItem from "./components/Banks/BankItem";
import NotFound from "./components/404/NotFound";
import BeerDetail from "./components/Beers/BeerDetail";
import Header from "./components/Header/Header";

function App() {
  setConfiguration({ maxScreenClass: "xl" });
  const [count, setCount] = useState(0);
  const [beerState, setBeerState] = useState([]);
  const [bankState, setBankState] = useState([]);

  const urlBeer = "https://random-data-api.com/api/v2/beers?size=10";
  const urlBank = "https://random-data-api.com/api/v2/banks?size=10";

  return (
    <div className="app">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/beers/*"
          element={
            <BeerList url={urlBeer} beerState={[beerState, setBeerState]} />
          }
        >
          <Route path=":id" element={<BeerDetail />}></Route>
        </Route>
        <Route
          path="/banks/*"
          element={
            <BankList url={urlBank} bankState={[bankState, setBankState]} />
          }
        >
          <Route path=":id" element={<BankItem />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
