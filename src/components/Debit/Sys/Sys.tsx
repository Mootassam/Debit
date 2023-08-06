import "./Sys.css";
import Number from "../../../utils/Number";
import Dates from "../../../utils/Dates";
import Currency from "../../../utils/Currency";
import Left from "../../../shared/icons/Left";
import { BiWifi } from "react-icons/bi";

function Sys(props) {
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
      background = "#fff";
    }

    return background;
  };

  return (
    <div className="sys__">
      {props.theme === "light" && (
        <div className="app__sys">
          <div className="sys__header">
            <div className="sysheader">
              <div className="sysheader__time">
                {Dates.currentTime()}
                <Left />
              </div>
              <div className="sysheader__battery">
                <BiWifi className="wifibi" />
                <div className="data__">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="fourg">4G</div>
                <div className="battery">
                  <div className="battery__styling">
                    <div
                      className="battery__level"
                      style={{
                        width: `${limit}%`,
                        background: CheckstatusBattery(),
                      }}
                    ></div>
                  </div>
                  <div className="small__"></div>
                </div>
              </div>
            </div>
            <div className="syssubheader">
              <div>
                <img src="/sys/x.png" alt="" width={13} />
              </div>
              <div className="transaction__success">
                <div className="success__message"> Transaction Successful</div>
                <div className="transaction__dates">{Dates.datehonePe3()}</div>
              </div>
              <div>
                <img src="/sys/logout.png" alt="" width={17} height={21} />
              </div>
            </div>
          </div>

          <div className="syscontent">
            <div className="syscontent__">
              <label htmlFor="" className="syscontent__label">
                Transaction ID
              </label>
              <div className="syscontent__transaction">
                <span className="syscontent__id">
                  T{Dates.date()}2036{Number.rrnNumber()}
                </span>
                <span className="violet__"> Copy</span>
              </div>
            </div>

            <div className="syscontent__paidto">
              <label htmlFor="">Paid to </label>

              <div className="padidto__">
                <div className="box__ ">
                  <img src="/sys/axis.png" alt="" width={29} height={24} />
                </div>
                <div className="paidto__right">
                  <div className="right__bankdetail">
                    <div className="bankname__">
                      Sathish{" "}
                      <img
                        src="/sys/valid.png"
                        alt=""
                        width={11}
                        height={14.5}
                      />
                    </div>
                    <div className="bankcode__">
                      Axis Bank - ***********8523
                    </div>
                    <div className="bankaddress">SATHISH KARTTHIK V</div>
                  </div>
                  <div className="right__amountbank paidto__space">
                    {Currency.IndiaWithoutZero(props.amount)}
                  </div>
                </div>
              </div>
              <div className="sendagain">SEND AGAIN</div>
            </div>
            <div className="debited__from">
              <label htmlFor="">Debited from</label>
              <div className="icic__bankfrom">
                <div className="bankfrom__boxicici">
                  <img src={props.from.logo} alt="" width={14} height={15} />
                </div>
                <div className="bankfrom__">
                  <div className="from__left">
                    <div className="icici__bank">
                      {props.from.name} - {props.account}
                    </div>
                    <div className="utr__id">UTR: {props.transactionId}</div>
                  </div>
                  <div className="right__amountbank">
                    {Currency.IndiaWithoutZero(props.amount)}
                  </div>
                </div>
              </div>
            </div>

            <div className="debited__contact">
              <div className="contact__img">
                <img src="/sys/ask.png" alt="" width={20} height={20} />
              </div>
              <div className="contact__text">Contact PhonePe Support </div>
            </div>

            <div className="debited__contact">
              <div className="contact__img">
                <img src="/sys/light.png" alt="" width={20} height={20} />
              </div>
              <div className="contact__text">Did you know? </div>
            </div>
          </div>

          <div className="sysbottom__logo">
            <label htmlFor="">Powered by</label>
            <img src="/sys/upi.png" alt="" width={92} height={15} />
          </div>

          <div className="bottom__barsys"></div>
        </div>
      )}

      {props.theme === "dark" && (
        <div className="app__sysblack">
          <div className="sys__headerblack">
            <div className="sysheader">
              <div className="sysheader__time">
                {Dates.currentTime()}
                <Left />
              </div>

              <div className="sysheader__battery">
                <BiWifi className="wifibi" />
                <div className="data__">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="fourg">4G</div>
                <div className="battery">
                  <div className="battery__styling">
                    {/* <div
                      className="battery__level"
                      style={{ width: limit ,background:CheckstatusBattery() }}
                    ></div> */}

                    <div
                      className="battery__level"
                      style={{
                        width: `${limit}%`,
                        background: CheckstatusBattery(),
                      }}
                    ></div>
                  </div>
                  <div className="small__"></div>
                </div>
              </div>
            </div>
            <div className="syssubheader">
              <div>
                <img src="/sys/xblack.png" alt="" width={11} height={11} />
              </div>
              <div className="transaction__success">
                <div className="success__message"> Transaction Successful</div>
                <div className="transaction__dates">{Dates.datehonePe3()}</div>
              </div>
              <div>
                <img src="/sys/logoutblack.png" alt="" width={17} height={21} />
              </div>
            </div>
            <div></div>
          </div>

          <div className="syscontent">
            <div className="syscontent__ black__m">
              <label htmlFor="" className="syscontent__label white__c">
                Transaction ID
              </label>
              <div className="syscontent__transaction ">
                <span className="syscontent__id white__c">
                  T{Dates.date()}82036{Number.rrnNumber()}
                </span>
                <span className="violet__ black__v"> Copy</span>
              </div>
            </div>

            <div className="syscontent__paidto black__m">
              <label htmlFor="" className="white__c">
                Paid to{" "}
              </label>
              <div className="padidto__">
                <div className="box__ border__color">
                  <img src="/sys/axis.png" alt="" width={29} height={24} />
                </div>
                <div className="paidto__right">
                  <div className="right__bankdetail">
                    <div className="bankname__ white__c">Sathish</div>
                    <div className="bankcode__ white__c">
                      Axis Bank - ***********8523
                    </div>
                    <div className="bankaddress white__c ">
                      SATHISH KARTTHIK V
                    </div>
                  </div>
                  <div className="right__amountbank white__c paidto__space">
                    {Currency.IndiaWithoutZero(props.amount)}
                  </div>
                </div>
              </div>
              <div className="sendagain black__v ">SEND AGAIN</div>
            </div>

            <div className="debited__from black__m ">
              <label htmlFor="" className="white__c">
                Debited from
              </label>
              <div className="icic__bankfrom">
                <div className="bankfrom__boxicici border__color">
                  <img src={props.from.logo} alt="" width={14} height={15} />
                </div>
                <div className="bankfrom__ ">
                  <div className="from__left white__c">
                    <div className="icici__bank white__c">
                      {props.from.name} - {props.account}
                    </div>
                    <div className="utr__id white__c">
                      UTR:{props.transactionId}
                    </div>
                  </div>
                  <div className="right__amountbank white__c">
                    {Currency.IndiaWithoutZero(props.amount)}
                  </div>
                </div>
              </div>
            </div>

            <div className="debited__contact black__m">
              <div className="contact__img">
                <img src="/sys/askblack.png" alt="" width={20} height={20} />
              </div>
              <div className="contact__text white__c">
                Contact PhonePe Support{" "}
              </div>
            </div>

            <div className="debited__contact black__m">
              <div className="contact__img">
                <img src="/sys/light.png" alt="" width={20} height={20} />
              </div>
              <div className="contact__text white__c">Did you know? </div>
            </div>
          </div>

          <div className="sysbottom__logo">
            <label htmlFor="" className="white__c">
              Powered by
            </label>
            <img src="/sys/upi.png" alt="" width={92} height={15} />
          </div>

          <div className="bottom__barsysblack"></div>
        </div>
      )}
    </div>
  );
}

export default Sys;
