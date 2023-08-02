import Dates from "../../../utils/Dates";
import Currency from "../../../utils/Currency";
import "./Kotak.css";
import Number from "../../../utils/Number";
import Names from "../../../utils/Names";
function Kotak(props) {
  return (
    <div className="app__kotak">
      <div className="kotak__header">
        <img src="/kotak.png" alt="" width={200} />
      </div>
      <div className="kotak__content">
        <div className="kotak__title">Transfer Details</div>
        <div className="kotak__group">
          <div className="group__form">
            <label htmlFor="">Reference No. (UTR No./RRN)</label>
            <span> {props.transactionId} </span>
          </div>
          <div className="group__form">
            <label htmlFor="">Date & Time</label>
            <span>{Dates.dateKotak(props?.time)} </span>
          </div>
          <div className="group__form">
            <label htmlFor="">Transfer Amount</label>
            <span>
              <b
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {Currency.IndiaWithoutZero(props.amount)}
                <div className="small__zero">.00</div>
              </b>
            </span>
          </div>
          <div className="group__form">
            <label htmlFor="">Benificiary name</label>

            <span>{Names.generateRandomFullName()}</span>
          </div>
          <div className="group__form">
            <label htmlFor="">Bank Name</label>
            <span>Union Bank of India</span>
          </div>
          <div className="group__form">
            <label htmlFor="">Account number</label>
            <span>{Number.accountNumberKotak()}{props.account}</span>
          </div>
          <div className="group__form">
            <label htmlFor="">IFSC</label>
            <span>UBIN{Number.ifscNumber()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kotak;
