import "./fi.css";
import { RxInfoCircled } from "react-icons/rx";
import Dates from "../../../utils/Dates";
import Names from "../../../utils/Names";
import Currency from "../../../utils/Currency";

export default function Fi(props) {
  return (
    <div className="app__fi">
      <div className="fi__header">
        <div className="header__content">
          <div className="fi__circle">
            <span className="fi__text">IC</span>
            <span className="small__circle"> R</span>
          </div>
          <span className="fi__paidto">PAID TO </span>
          <span className="fi__company">ITAAN TRADING CO.</span>
          <span className="fi__amount">
            <span className="amount__fi">
              <span className="fi__currency">₹</span>
            {Currency.IndiaImps(props.amount)}
              <label htmlFor="" className="fi__small">
                .00
              </label>
            </span>
            <div className="green__circle">
              <img src="/Fi/check.png" alt="" width={13} />
            </div>
          </span>
        </div>
      </div>
      <div className="fi__content">
        <div className="fi__transfer">
          <img src="/Fi/transfere.png" alt="" width={15} />
          <span className="span__transfer">Money Transfer</span>
        </div>
        <div className="fi__successful">
          <img src="/Fi/pen.png" alt="" width={20} />
        </div>
      </div>
      <div className="content__successful __success">
        <span className="span__success">Successful</span>
        <span className="span__date">{Dates.dateFI()}</span>
      </div>
      <div className="big__content">
        <div className="content__speacial">
          <label htmlFor="" className="big__content__label">
            FROM - {Names.generateRandomFullName()}:
          </label>
          <label htmlFor="" className="content__detail">
            xxxxxxxxxx{props.account}
          </label>
        </div>

        <div className="">
          <label htmlFor="" className="big__content__label">
            TO - ITAAN TRADING CO :
          </label>
          <label htmlFor="" className="content__detail">
            xxxxxxxx2234
          </label>
        </div>

        <div className="">
          <label htmlFor="" className="big__content__label">
            IMPS TRANSACTION ID :{" "}
          </label>
          <label htmlFor="" className="content__detail">
            {props.transactionId}
          </label>
        </div>

        <div className="">
          <label htmlFor="" className="big__content__label">
            FI TRANSACTION ID:
          </label>
          <label htmlFor="" className="content__detail">
            {Names.generateRandomText()}
          </label>
        </div>

        <div className="">
          <label htmlFor="" className="big__content__label">
            TRANSACTION MODE:
          </label>
          <label htmlFor="" className="content__detail">
            IMPS
          </label>
        </div>
      </div>
      <div className="info__content">
        <span>
          <RxInfoCircled />
        </span>

        <span className="info__payement">
          Payments may take up to 3 working days to reflect in your account.
          Check your recipient’s bank statement for the latest status of your
          transaction
        </span>
      </div>
      <div className="fi__bottom">
        <img src="/Fi/logo.png" alt="" width={20} />
      </div>
    </div>
  );
}
