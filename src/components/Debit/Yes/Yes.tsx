import "./yes.css";
import Currency from "../../../utils/Currency";
import Dates from "../../../utils/Dates";
import Number from "../../../utils/Number";
import Names from "../../../utils/Names";
function Yes(props) {
  return (
    <div className="app__yes">
      <div className="yes__header">
        <span className="yes__confirmation">CONFIRMATION</span>
      </div>
      <div className="yes__">
        <span className="yes__thankyou">Thank You!</span>
        <span className="yes__transfer">Transfer Completed</span>
      </div>
      <div className="yes__content">
        <span className="fund__transfer">FUND TRANSFER</span>

        <div className="content__yes">
          <div className="type__transaction">
            <span className="yes__label">Type of Transaction</span>
            <span className="yes__value">Ad Hoc</span>
          </div>

          <div className="yes__amount">
            <span className="yes__label">Amount</span>
            <span className="yes__value">
              {Currency.IndiaWithoutyes(props.amount)}
            </span>
          </div>

          <div className="yes__amount">
            <span className="yes__label">Beneficiary Name</span>
            <span className="yes__value">Vasudha Collections</span>
          </div>

          <div className="yes__amount">
            <span className="yes__label">Beneficiary Account No.</span>
            <span className="yes__value">
              012763{Number.generateRandom5Number()}
              {props.account}
            </span>
          </div>

          <div className="yes__amount">
            <span className="yes__label">Transaction Date</span>
            <span className="yes__value">{Dates.yesbank()}</span>
          </div>

          <div className="yes__amount">
            <span className="yes__label">Remarks</span>
            <span className="yes__value">{Names.remarks()}</span>
          </div>

          <div className="yes__amount">
            <span className="yes__label">Transaction Reference</span>
            <span className="yes__value">{Names.yesbanktext()}</span>
          </div>

          <div className="yes__amount __special">
            <span className="yes__label">Number</span>
            <span className="yes__value">{Names.yesbanks()}</span>
          </div>
        </div>
      </div>
      <div className="yes__ok">
        <span>Ok</span>
      </div>
    </div>
  );
}

export default Yes;
