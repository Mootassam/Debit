import "./hdfc.css";
import Number from "../../../utils/Number";
import Currency from "../../../utils/Currency";
import Dates from "../../../utils/Dates";
import Rightdata from "../../../shared/right/Rightdata";
import Left from "../../../shared/icons/Left";

function Hdfc(props) {
  return (
    <div className="app__hdfc">
      <div className="hdfc__header">
        <div className="header__left">
          <div className="time__hdfc">{Dates.currentTime()}</div>
          <Left />
        </div>
        <div className="header__right">
          <Rightdata />
        </div>
      </div>

      <div className="hdfc__subheader">
        <div className="subheader__left">
          <div className="subheader__retour">
            <img src="/Hdfc/back.png" alt="" width={14} />
          </div>
          <div className="subheader__text">Sent Successfully</div>
        </div>

        <div className="subheader__button">
          <span>Share</span>
          <span>Help</span>
        </div>
      </div>

      <div className="hdfc__content">
        <div className="content__amount">
          <label htmlFor="Amount">Amount</label>
          <div className="amount__nubmer">
            {Currency.IndiaWithoutZero(props.amount)}{" "}
            <img src="/Hdfc/tag.png" alt="" width={32} height={32} />
          </div>
          <div className="amout__caractere">
            Rupees {Number.convertToWords(props.amount)} Only
          </div>
          <div className="add__tag">
            <img
              src="/Hdfc/circle.png"
              alt=""
              width={11}
              height={11}
              className="image__circle"
            />

            <div className="tag__text">
              <img src="/Hdfc/ta.png" alt="" width={13} height={13} />
              <span> Add Tag</span>
            </div>
          </div>
        </div>

        <div className="bar__hdfc"></div>

        <div className="to__">
          <div className="label__to">To</div>
          <div className="name__to">
            <div className="Name">
              Fj Dollars
              <img src="/Hdfc/check.png" alt="" width={19} height={19} />
            </div>
            <div className="icon__to">FD</div>
          </div>
          <div className="to__detail">
            UPI ID: garenis2002@okaxis on Google Pay <br /> Linked Bank: Axis
            Bank A/c No. - 8186
          </div>
          <div className="app__payagain">Pay Again</div>
          <div className="bar__payagin"></div>
        </div>

        <div className="from__">
          <div className="from__text">From Your</div>
          <div className="name__hdfc">
            {props?.from?.name}
            <img src={props?.from?.logo} alt="" width={31} height={31} />
          </div>
          <div className="hdfc__code">A/c No. - {props.account}</div>
          <div className="check__balance">Check Balance</div>
        </div>

        <div className="detaill__payment">
          <div className="paid__date">Paid at {Dates.dateshdfc()}</div>
          <div className="paid__ref">
            UPI Ref No: {props.transactionId}
            <span>Copy</span>
          </div>
        </div>
      </div>

      <div className="hdfc__bottom">
        <img src="/Hdfc/square.png" alt="" />

        <img src="/Hdfc/center.png" alt="" />

        <img src="/Hdfc/right.png" alt="" />
      </div>
    </div>
  );
}

export default Hdfc;
