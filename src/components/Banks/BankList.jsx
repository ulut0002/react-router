import { useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import NotFound from "../404/NotFound";
import BankItem from "./BankItem";

function BankList({ url, bankState }) {
  // console.log("url bank", url);
  const { id } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [bankStateVar, setBankState] = bankState;

  useEffect(() => {
    if (
      bankStateVar &&
      Array.isArray(bankStateVar) &&
      bankStateVar.length > 0
    ) {
      setIsLoading(false);
      setBankState(bankStateVar);
    } else {
      loadBankList();
    }
  }, []);

  function loadBankList() {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Bank list fetch error");
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (data && Array.isArray(data) && data.length > 0) {
          setBankState([...data]);
        } else {
          setBankState([]);
        }
      })
      .catch((err) => {
        console.warn(err);
        setIsLoading(false);
        setIsError(true);
      });
  }

  if (isLoading) {
    return <Loader isLoading={true}></Loader>;
  } else if (isError) {
    return (
      <NotFound message="Failed to fetch beer list. Try again later"></NotFound>
    );
  } else {
    let bankMatch = null;
    return (
      <div className="result-container">
        <div className="button--container">
          <button
            className="button refresh"
            autoFocus
            onClick={() => {
              loadBankList();
            }}
          >
            Refresh Bank List
          </button>
        </div>
        <ul className="list--container">
          {bankStateVar.map((bank) => {
            // no need to make an extra loop above..
            if (!bankMatch && bank.uid === id) {
              bankMatch = bank;
            }
            return <BankItem key={bank.uid} bank={bank} />;
          })}
        </ul>
        <div className="detail--container detail--container--beer">
          <Outlet context={bankMatch} />
        </div>
      </div>
    );
  }

  return <div>BankList</div>;
}
export default BankList;
