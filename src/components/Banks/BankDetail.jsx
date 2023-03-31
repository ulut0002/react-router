import "./BankDetail.css";

import { useParams, useOutletContext } from "react-router-dom";

function BankDetail() {
  const { id } = useParams();
  const bank = useOutletContext();

  if (!bank && id) {
    // TODO : find the bank from another url
  }

  if (bank) {
    const { account_number, iban, bank_name, routing_number, swift_bic } = bank;

    return (
      <div className="item--detail--container">
        <h3 className="item--header">{bank_name}</h3>
        <p className="item--content">
          <span className="caption">Account Number:</span> {account_number}
        </p>
        <p className="item--content">
          <span className="caption">IBAN:</span> {iban}
        </p>
        <p className="item--content">
          <span className="caption">Routing Number:</span> {routing_number}
        </p>
        <p className="item--content">
          <span className="caption">Swift Number:</span> {swift_bic}
        </p>
        <img src="../bank.png" className="bg-image"></img>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default BankDetail;
