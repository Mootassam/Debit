import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { debitDetaill } from "../../../store/debit/debitSelectors";

function CreditIcici(props) {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const dataDebit = useSelector(debitDetaill);
  useEffect(() => {}, [dataDebit]);

  return (
    <div>
      <div className="screenshot__message">
        <span className="screenshot__time">{dataDebit.time}</span>
        <div className="small__message">
          ICICI Bank Acc XX{dataDebit.account} debitedwith INR{" "}
          {dataDebit.amount} on 02-Feb-23.Info:BIL*NEFT*0005.Avl Bal is INR
          11,637.35.For dispute Call 18002662 or SMS BLOCK 464to 9215676766
        </div>
        <span className="screenshot__time">{dataDebit.creditTime}</span>
        <div className="small__message">
          Dear Customer, Your a/c no. XXXXXXXX{dataDebit.account} iscredited by
          Rs.{dataDebit.amount} on30-07-23 by a/c linked tomobile
          OXXXXXX000-LUARTECHNOLOGIES (IMPS Ref no{dataDebit.transaction}).If
          not done byyou, call 1800111109. -SBI
        </div>
      </div>

      <div className="bottom__credit"></div>
    </div>
  );
}

export default CreditIcici;
