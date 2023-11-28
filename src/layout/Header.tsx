
import { useSelector } from "react-redux";
import {  selectDebit } from "./../store/debit/debitSelectors";
import { useDispatch } from "react-redux/es/exports";
import {
  deleteDebit,
  editDebit,

  updateDebit,
} from "../store/debit/debitActions";
import { ThunkDispatch } from "@reduxjs/toolkit";


function Header() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const debitData = useSelector(selectDebit);

  const clearAll = async () => {
    await dispatch(deleteDebit());
  };

  const showDetaill = async (data, index) => {
    try {
      await dispatch(editDebit({ data, index }));
      await dispatch(updateDebit(index));
    } catch (error) {
      console.log(error);
    }
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
{/* 
        <label className="clear__all" onClick={() => clearAll()}>
          Clear All : <span className="credit__number">{debitData.length}</span>
        </label> */}
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
              <br />
              Time : {item.time}
              <br />
              CreditTime :{item.creditTime}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
