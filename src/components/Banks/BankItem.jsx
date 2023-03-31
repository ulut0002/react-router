import "./BankItem.css";
import { NavLink } from "react-router-dom";

function BankItem({ bank }) {
  if (!bank) return null;

  return (
    <li className="list--item">
      <NavLink
        to={`/banks/${bank.uid}`}
        className="list--item--link item--beer"
      >
        <span className="material-icons">account_balance</span>
        <span className="list--item--description">{bank.bank_name}</span>
      </NavLink>
    </li>
  );
}
export default BankItem;
