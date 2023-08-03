import "./Sbi.css";
import Dates from "../../../utils/Dates";
import Currency from "../../../utils/Currency";
import { RiWifiLine } from "react-icons/ri";

function Sbi2(props) {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;
  return (
    <div className="sbi">
      {props.theme === "light" && (
        <div className="app__sbi">
          <div className="sbi__header">
            <div className="sbi__time">{Dates.currentTime()} </div>

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

          <div className="sbi__subheader">
            <div className="subheader__leftsbi">
              <img src="/Sbi/back.png" alt="" width={15} />
              <span>AD-SBIUPI</span>
            </div>
            <div className="subheader__right">
              <img src="/Sbi/search.png" alt="" width={16} />
              <img src="/Sbi/plus.png" alt="" width={4} height={16} />
            </div>
          </div>

          <div className="sbi__content">
            <div className="content__left">
              <img src="/Sbi/user.png" alt="" width={25} />
            </div>
            <div className="content__right">
              <div className="right__top">
                <div className="right__date">{Dates.sbiDate()}</div>
                <div className="right__transaction">
                  <div className="transaction__left"> Transaction • </div>
                  <div className="transaction__right">Change category</div>
                </div>
              </div>
              <div className="right__message">
                <div className="message__content">
                  Dear SBI User, your A/c X{props.account}-debited by Rs.
                  {Currency.IndiaWithoutCurrency(props.amount)}&nbsp;on <br />
                  <span className="message__underline">
                    {Dates.sbidatemessage()}
                  </span>
                  transfer to AKASH K Ref No
                  <span className="message__underline">
                    {props.transactionId}
                  </span>{" "}
                  If not done by u, fwd this SMS to 9223008333/Call{" "}
                  <span className="message__underline"> 1800111109 </span>or{" "}
                  <span className="message__underline"> 09449112211 </span>to
                  block UPI -SBI
                </div>
              </div>
            </div>
          </div>

          <div className="sbi__bottom">
            <div className="bottom__left">Can’t reply to this short code</div>
            <div className="bottom__right">Learn more</div>
          </div>

          <div className="bar__bottom"></div>
        </div>
      )}

      {props.theme === "dark" && (
        <div className="sbi__black">
          <div className="sbi__header">
            <div className="sbi__time white">{Dates.currentTime()} </div>

            <div className="sbi__right white ">
              <RiWifiLine />
              <div className="cnx ">
                <label htmlFor="" className="white">
                  R
                </label>
                <div className="cnx__ ">
                  <div className="cnx1__ backhroud__white"></div>
                  <div className="cnx2__ backhroud__white"></div>
                  <div className="cnx3__ backhroud__white"></div>
                  <div className="cnx4__ backhroud__white"></div>
                </div>
              </div>

              <div className="right__battery border__white">
                <div
                  className="bar__level backhroud__white"
                  style={{
                    width: `${limit}%`,
                  }}
                >
                  {" "}
                </div>
              </div>
              <div className="right__bar border__white "></div>
            </div>
          </div>

          <div className="sbi__subheader">
            <div className="subheader__leftsbi white__text">
              <img src="/Sbi/backwhite.png" alt="" width={15} />
              <span>AD-SBIUPI</span>
            </div>
            <div className="subheader__right white__text">
              <img src="/Sbi/searchwhite.png" alt="" width={16} />
              <img src="/Sbi/sharewhite.png" alt="" width={4} height={16} />
            </div>
          </div>

          <div className="sbi__content">
            <div className="content__left">
              <img src="/Sbi/user.png" alt="" width={25} />
            </div>
            <div className="content__right">
              <div className="right__top">
                <div className="right__date white__text">{Dates.sbiDate()}</div>
                <div className="right__transaction">
                  <div className="transaction__left white__text">
                    {" "}
                    <img
                      src="/Sbi/transactionwhite.png"
                      alt=""
                      width={14}
                    />{" "}
                    Transaction •{" "}
                  </div>

                  <div className="transaction__right white__text">
                    Change category
                  </div>
                </div>
              </div>
              <div className="right__message background__dark">
                <div className="message__content white__text">
                  Dear SBI User, your A/c X{props.account}-debited by Rs.
                  {Currency.IndiaWithoutCurrency(props.amount)}&nbsp;on <br />
                  <span className="message__underline white__text">
                    {Dates.sbidatemessage()}
                  </span>
                  transfer to AKASH K Ref No
                  <span className="message__underline white__text">
                    {" "}
                    {props.transactionId}
                  </span>{" "}
                  If not done by u, fwd this SMS to 9223008333/Call
                  <span className="message__underline white__text">
                    {" "}
                    1800111109{" "}
                  </span>
                  or
                  <span className="message__underline white__text">
                    {" "}
                    09449112211{" "}
                  </span>
                  to block UPI -SBI
                </div>
              </div>
            </div>
          </div>

          <div className="sbitbottom__darkness">
            <div className="bottom__left black__text">
              Can’t reply to this short code
            </div>
            <div className="bottom__right">Learn more</div>
          </div>

          <div className="bar__bottom"></div>
        </div>
      )}
    </div>
  );
}

export default Sbi2;
