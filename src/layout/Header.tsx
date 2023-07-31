import React from "react";

import { useSelector } from "react-redux";
import { selectDebit } from "./../store/debit/debitSelectors";

function Header() {
  const debitData = useSelector(selectDebit);

  return (
    <>
      <div className="app__credit">
        {/* <div
        className="card__crdit"
        onClick={() => {
          showItem();
        }}
      >
        <HiCreditCard color="white" size={25} />
        <span className="number__credit">3</span>
      </div> */}

        <label className="credit__time">
          Clear All : <span className="credit__number">{debitData.length}</span>
        </label>
      </div>

      <div className="header__sidebar">
        <ul className="list__items">
          {debitData.map((item, index) => (
            <li className="special__credit" onClick={() => alert("in")}>
              {index + 1} )bank Name : <b> {item.bank} </b> <br />
              Amount : <b> {item.amount} </b> <br />
              Account Number: <b>{item.account} </b> <br />
              transactionID : <b>{item.transaction} </b>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
