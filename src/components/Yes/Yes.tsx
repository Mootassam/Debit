import React from "react";
import "./yes.css";
import Currency from "./../../utils/Currency";
import Dates from "../../utils/Dates";
import Number from "../../utils/Number";
import Names from "./../../utils/Names";
function Yes(props) {
  return (
    <div className="app__groupParent">
      <h1>IM the best </h1>
      <div className="rectangleParent">
        <div className="groupChild" />
        <div className="groupItem" />
      </div>
      <div className="groupWrapper">
        <div className="rectangleGroup">
          <div className="groupInner" />
          <div className="ok">OK</div>
        </div>
      </div>
      <img className="background1Icon" alt="" src="/background-1@2x.png" />
      <div className="thankYouParent">
        <div className="thankYou">Thank You!</div>
        <div className="transferCompleted">Transfer Completed</div>
        <div className="fundTransfer">FUND TRANSFER</div>
        <div className="typeOfTransaction">Type of Transaction</div>
        <div className="adHoc">Ad Hoc</div>
        <div className="vasudhaCollections">Vasudha Collections</div>
        <div className="div">012763{Number.generateRanodom9Number()}</div>
        <div className="july231029">{Dates.yesbank()}</div>
        <div className="sachin">Sachin</div>
        <div className="c62b7111eeba5">{Names.yesbanktext()} </div>
        <div className="ab130ea0000">{Names.yesbanks()}</div>
        <div className="div1">{Currency.IndiaWithoutyes(props.amount)}</div>
        <div className="amount">Amount</div>
        <div className="beneficiaryName">Beneficiary Name</div>
        <div className="beneficiaryAccountNo">Beneficiary Account No.</div>
        <div className="transactionDate">Transaction Date</div>
        <div className="remarks">Remarks</div>
        <div className="transactionReference">Transaction Reference</div>
        <div className="number">Number</div>
        <div className="confirmation">CONFIRMATION</div>
      </div>
    </div>
  );
}

export default Yes;
