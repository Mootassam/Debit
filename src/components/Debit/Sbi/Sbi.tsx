import "./Sbi.css";
import Currency from "../../../utils/Currency";
import Number from "../../../utils/Number";
import Left from "../../../shared/icons/Left";
import { ImAlarm } from "react-icons/im";
import Dates from "../../../utils/Dates";
import { RiWifiLine } from "react-icons/ri";
function Sbi(props) {

  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  const CheckstatusBattery = () => {
    let background = "";

    if (limit >= 20) {
      background = "#fdd60c";
    }

    if (limit <= 20) {
      background = "#FD3731";
    }

    if (limit >= 40) {
      background = "#2da539";
    }

    return background;
  };

  return (
    <div className="app__sbit">
      <div className="sbi__mobile">
        <div className="mobile__left">
          <div className="left__time">{Dates.currentTime()}</div>
          <Left />
        </div>
        <div className="mobile__right">
          <ImAlarm size={13} />
          <RiWifiLine />

          <div className="sbi__data">
            <div className="data__1"></div>
            <div className="data__2"></div>
            <div className="data__3"></div>
            <div className="data__4"></div>
          </div>

          <div className="sbi2__battey">
            <div className="battery__border">
              <div
                className="border__niveau"
                style={{
                  height: `${limit}%`,
                  background: CheckstatusBattery(),
                }}
              ></div>
            </div>
            <div className="battery__top"></div>
          </div>
        </div>
      </div>
      <div className="sbi__logo">
        <img src="/Sbi/x.png" alt="" width={15} height={14} />
        <img src="/Sbi/sbi.png" alt="" width={134} height={26} />
        <div></div>
      </div>
      <div className="sbi__start">
        <span>QUICK TRANSFER - SBI A/C</span>
      </div>
      <div className="sbi__contents">
        <div className="content__message">
          <div className="message__image">
            <img src="/Sbi/check.png" alt="" width={37} height={37} />
          </div>
          <div className="message__success">Successful</div>
          <div className="message__paid">
            You have successfully paid karthikaikumaran{" "}
            {Currency.India(props.amount)}
          </div>
          <div className="message__balance">
            Remaining Balance in <br /> A/c XXXXXXX{props.account} is{" "}
            {Number.balance()}
          </div>
        </div>
      </div>

      <div className="sbis__bottom">
        <div className="bottom__button">
          <span>SBI Helpline :1800111101 (toll-free)</span>
          <div className="button__futurepayments">
            Add Beneficiary for Future Payments
          </div>
          <div className="button__relationships">Go to Relationships</div>
        </div>
        <div className="bottom__mobiles">
          <img src="/bar__random.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sbi;
