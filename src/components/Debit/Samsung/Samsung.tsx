import "./Samsung.css";
import Dates from "../../../utils/Dates";
import Names from "../../../utils/Names";

function Samsung(props) {

  return (
    <div className="app__samsung">
      <div className="samsung__header">
        <img src="/Samsung/samsung.png" alt="" width="213" />
        <img src="/Samsung/check.png" alt="" width={57} />
      </div>

      <div className="samsung__title">
        <div className="title__samsung">SHIV OM EXPORTS </div>
        <div className="samsung__amount">₹{props.amount}</div>
        <div className="samsung__sent">Sent</div>
      </div>

      <div className="samsung__content">
        <img src="/Samsung/bar.png" alt="" width={368} />

        <div className="samsung__detail">
          <div className="samsung__text">
            <div className="samsung__left">Date:</div>
            <div className="samsung__right">{Dates.samsung()}</div>
          </div>

          <div className="samsung__text">
            <div className="samsung__left">Transaction ID:</div>
            <div className="samsung__right">
            {props.transactionId}
            </div>
          </div>

          <div className="samsung__text">
            <div className="samsung__left">Sent from:</div>
            <div className="samsung__right"> {props.from.name}</div>
          </div>

          <div className="samsung__text">
            <div className="samsung__left">UPI ID:</div>
            <div className="samsung__right">{Names.generateSamsungText()}</div>
          </div>
        </div>
        <img src="/Samsung/bar.png" alt="" width={368} />
      </div>
      <div className="samsung__footer">
        <img src="/Samsung/Logo__footer.png" alt="" width="230" />
      </div>
    </div>
  );
}

export default Samsung;
