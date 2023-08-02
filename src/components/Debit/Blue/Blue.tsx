import "./Blue.css";
import Number from "../../../utils/Number";
import Currency from "../../../utils/Currency";
import Dates from "../../../utils/Dates";
import { ImAlarm } from "react-icons/im";
import Left from "../../../shared/icons/Left";
import { RiWifiLine } from "react-icons/ri";
function Blue(props) {
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
    <div className="app__bankstatement">
      <div className="bank__header">
        <div className="time__">
          <div className="time__blue">
            {" "}
            {Dates.currentTime()}
            <Left />
          </div>

          <div className="blue__right">
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
        <div className="header__transfere">
          <div>
            <img src="/blue/Arrow.png" alt="" height={19} />
          </div>
          <div className="transfer__text">Transfer Details</div>
          <div className="header__image">
            <img src="/blue/blue.png" alt="" height={19} />
            <img src="/blue/Power.png" alt="" height={19} />
          </div>
        </div>
      </div>
      <div className="bank__detaill">
        <div className="detail">
          <div className="detail__left">Reference Number</div>
          <div className="detail__right">{Number.referenceNumber()}</div>
        </div>
        <div className="detail">
          <div className="detail__left">From</div>
          <div className="detail__right">
            Savings {Number.Impsblue()}{props.account}
          </div>
        </div>
        <div className="detail">
          <div className="detail__left">To </div>
          <div className="detail__right">Prabhash IDFB0024312 10115059853</div>
        </div>
        <div className="detail">
          <div className="detail__left">Amount </div>
          <div className="detail__right">{Currency.India(props.amount)}</div>
        </div>

        <div className="detail">
          <div className="detail__left">Date </div>
          <div className="detail__right">{Dates.dateBlue()}</div>
        </div>

        <div className="detail">
          <div className="detail__left">Transfer Channel </div>
          <div className="detail__right">MA</div>
        </div>

        <div className="detail">
          <div className="detail__left">Transfer Mode </div>
          <div className="detail__right">IMPS-P2A</div>
        </div>

        <div className="detail">
          <div className="detail__left">Transfer Status </div>
          <div className="detail__right">Successful</div>
        </div>

        <div className="detail">
          <div className="detail__left">RRN Number </div>
          <div className="detail__right">
            {Number.rrnNumber()}
            <img src="/blue/i.png" height={20} />
          </div>
        </div>

        <div className="detail">
          <div className="detail__left">Remarks </div>
          <div className="detail__right">Prepaid</div>
        </div>

        <div className="button__done">DONE</div>
      </div>
      <div className="bank__mobile">
        <img src="/blue/mobile__blue.png" alt="" height={21} />
      </div>
    </div>
  );
}

export default Blue;
