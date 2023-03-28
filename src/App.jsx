import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import NavBar from "./NavBar/NavBar";
import Users from "./Users/Users";

import "./App.css";
import User from "./Users/User";
import BeerList from "./Beers/BeerList";
import BeerDetail from "./Beers/BeerDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header>
        <h1>React Routing</h1>
      </header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/*" element={<Users />}>
          <Route path=":uid" element={<User />}></Route>
        </Route>
        <Route path="/beers/*" element={BeerList}>
          <Route path=":id" element={<BeerDetail />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
