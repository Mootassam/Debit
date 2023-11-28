
import { useSelector } from "react-redux";
import {  selectDebit } from "./../store/debit/debitSelectors";
import { useDispatch } from "react-redux/es/exports";

import { ThunkDispatch } from "@reduxjs/toolkit";


function Header() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const debitData = useSelector(selectDebit);

  // const clearAll = async () => {
  //   await dispatch(deleteDebit());
  // };



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
{/* 
        <label className="clear__all" onClick={() => clearAll()}>
          Clear All : <span className="credit__number">{debitData.length}</span>
        </label> */}
      </div>

    
    </>
  );
}

export default Header;
