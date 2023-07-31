import React from "react";

import { useSelector } from "react-redux";
import { debitDetaill, selectDebit } from "./../store/debit/debitSelectors";
import { useDispatch } from "react-redux/es/exports";
import { deleteDebit, editDebit } from "../store/debit/debitActions";
import { ThunkDispatch } from "@reduxjs/toolkit";

function Header() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const debitData = useSelector(selectDebit);

  const clearAll = async () => {
    await dispatch(deleteDebit());
  };

  const showDetaill = (data, index) => {
    dispatch(editDebit({ data, index }));
  };


  return (
    <>
      <div className="app__header">
        {/* <div
        className="card__crdit"
        onClick={() => {
          showItem();
        }}
      >
        <HiCreditCard color="white" size={25} />
        <span className="number__credit">3</span>
      </div> */}
        <label></label>

        <label className="credit__time" onClick={() => clearAll()}>
          Clear All : <span className="credit__number">{debitData.length}</span>
        </label>
      </div>

      <div className="header__sidebar">
        <ul className="list__items">
          {debitData.map((item, index) => (
            <li
              className="special__credit"
              onClick={() => showDetaill(item, index)}
            >
              <b> {index + 1} )</b>
              <br />
              bank Name : <b> {item.bank} </b> <br />
              Amount : <b> ₹ {item.amount} </b> <br />
              Account Number: <b>{item.account} </b> <br />
              IMPS : <b>{item.transaction} </b>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
