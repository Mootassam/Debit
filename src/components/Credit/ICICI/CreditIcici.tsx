import  { useEffect } from "react";
import { useSelector } from "react-redux";
import { debitDetaill } from "../../../store/debit/debitSelectors";
import "./credit.css";
import Dates from "../../../utils/Dates";
import { RiWifiLine } from "react-icons/ri";
function CreditIcici() {
  const dataDebit = useSelector(debitDetaill);
  useEffect(() => {}, [dataDebit]);
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__credit">
      <div className="credit__time ">
        <div>
          <span className="credited__time">{Dates.currentTime()}</span>
        </div>
        <div className="sbi__right">
              <RiWifiLine />
              <div className="cnx">
                <label htmlFor="">R</label>
                <div className="cnx__">
                  <div className="cnx1__"></div>
                  <div className="cnx2__"></div>
                  <div className="cnx3__"></div>
                  <div className="cnx4__"></div>
                </div>
              </div>
              <div className="cnx nodata">
                <label htmlFor="">X</label>
                <div className="cnx__">
                  <div className="cnx1__ gray"></div>
                  <div className="cnx2__ gray"></div>
                  <div className="cnx3__ gray"></div>
                  <div className="cnx4__ gray"></div>
                </div>
              </div>

              <div className="right__battery">
                <div
                  className="bar__level"
                  style={{
                    width: `${limit}%`,
                  }}
                >
                  {" "}
                </div>
              </div>
              <div className="right__bar"></div>
            </div>
      </div>

      <div className="credit__subheader">
        <div className="credit__left">
          <img src="/Credit/ICICI/back.png" alt="" width={15} />
          <div className="msg__cirlce"></div>
          <span className="msg__bank">VD-FEDBNK</span>
        </div>
        <div className="sub__right">
          <div className="circle1"></div>
          <div className="circle1"></div>
          <div className="circle1"></div>
        </div>
      </div>

      <div className="credit_message">
        <div className="credit__detaill">
          <span className="detaill__date">Monday 14:58</span>

          <div className="transaction__credit">
            <span className="trasanction__title">
              Transaction
              <div className="circle__little"></div>
              <label className="change__category">Change category</label>
            </span>
            <div className="message__credit">
              <span className="__message">
                Rs 50.00 debited from <br /> your A/c using UPI on <br />{" "}
                17-04-2023 14:58:28 to VPA Q905387393@ybl - (UPI Ref No
                347323569150)-Federal Bank
              </span>
            </div>
          </div>
        </div>

        <div className="credit__detaill">
          <span className="detaill__date">14:58</span>

          <div className="transaction__credit">
            <span className="trasanction__title">
              Transaction
              <div className="circle__little"></div>
              <label className="change__category">Change category</label>
            </span>
            <div className="message__credit">
              <span className="__message">
                Your a/c no. <br />
                XXXXXXXXXX8031 is <br />
                debited for Rs.5000.00 <br />
                on 19-04-2023 and a/ <br />
                c XXXXXXXXXXXX371 <br />
                credited (IMPS Ref no. <br />
                310911789131) -Federal <br />
                Bank
              </span>
            </div>
            <div className="message__status">
              <span className="status__time">11:04 </span>
              <span className="satus__circle"></span>
              <span className="status__sim">Idea </span>
            </div>
          </div>
        </div>

        <div className="credit__bottom">
          <div className="cant__reply">
            <span className="reply__left">Can’t reply to this short code</span>
            <span className="reply__right">Learn more</span>
          </div>
          <div className="bottom__border"></div>
        </div>
      </div>
    </div>
  );
}

export default CreditIcici;
