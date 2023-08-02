import "./paytm.css";
import Currency from "../../../utils/Currency";
import Dates from "../../../utils/Dates";
import Number from "../../../utils/Number";
import Left from "../../../shared/icons/Left";
import { BiWifi } from "react-icons/bi";

function Paytm(props) {
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
      background = "#69aa84";
    }

    return background;
  };

  return (
    <div className="system__app">
      {props.theme === "dark" && (
        <div className="app__paytm">
          <div className="paytm__time">
            <div className="time">
              {Dates.currentTime2()} <Left />
            </div>
            <div className="battery__2">
              <BiWifi className="biwifi" />
              <img src="/paytm/4g.png" alt="" className="paytm__g" width={9} />
              <div className="data2__">
                <div className="data__1"></div>
                <div className="data__2"></div>
                <div className="data__3"></div>
                <div className="data__4"></div>
                <div className="data__5"></div>
              </div>
              <div className="battery2__">
                <div
                  className="batter__levell"
                  style={{
                    width: `${limit}%`,
                    background: CheckstatusBattery(),
                  }}
                ></div>
                <span className="number__limit">{limit}</span>
              </div>
            </div>
          </div>

          <div className="paymt__transaction">
            <div>
              <img src="/paytm/retour.png" alt="" width={14} height={14} />
            </div>
            <div className="transaction__message">
              <div className="message__successful">Transaction Successful</div>
              <div className="message__time">{Dates.datePhonePe()}</div>
            </div>
          </div>

          <div className="paytem__box">
            <div className="paymt__content">
              <div className="paid__to">Paid to</div>
              <div className="content__email">
                <div className="email__detail">
                  <div className="ellipse__circle">
                    <span className="circle__text"> S</span>
                  </div>
                  <div className="email">shubham0202@freecharge</div>
                </div>
                <div className="amount">
                  {Currency.IndiaWithoutZero(props.amount)}
                </div>
              </div>

              <div className="transfere__detail">
                <div className="detail__transfer">
                  <img
                    src="/paytm/transfericon.png"
                    alt=""
                    width={16}
                    height={17}
                  />

                  <div className="tranfer__text">Transfer Details</div>
                </div>
                <div>
                  <img src="/paytm/up.png" alt="" width={10} height={5} />
                </div>
              </div>

              <div className="transaction__detaill">
                <label htmlFor="">Transaction ID </label>
                <div className="detaill__number">
                  <div className="number__transaction">
                    T{Dates.date()}11482{Number.rrnNumber()}
                  </div>
                  <div>
                    <img src="/paytm/copy.png" alt="" width={9} height={10} />
                  </div>
                </div>
              </div>

              <div className="debit__detaills">
                <div className="debit__title"> Debit from</div>

                <div className="detail__debit">
                  <img src={props.from.logo} alt="" width={29} height={29} />

                  <div className="from__detaill">
                    <div className="ac__number">
                      <div className="number__code">*******{props.account}</div>
                      <div className="amount">
                        {Currency.IndiaWithoutZero(props.amount)}
                      </div>
                    </div>
                    <div className="ac__number">
                      <div className="number__code">
                        UTR:{props.transactionId}
                      </div>
                      <div>
                        <img
                          src="/paytm/copy.png"
                          alt=""
                          width={9}
                          height={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="debit__sendButton">
                  <div>
                    <img src="/paytm/send.png" alt="" width={36} height={36} />

                    <label htmlFor=""> Send again</label>
                  </div>

                  <div>
                    <img
                      src="/paytm/history.png"
                      alt=""
                      width={36}
                      height={36}
                    />

                    <label htmlFor="">View History</label>
                  </div>
                  <div>
                    <img src="/paytm/share.png" alt="" width={36} height={36} />
                    <label htmlFor="">Share Receipt</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="paytem__box">
            <div className="debit__contact">
              <div className="contact__detail">
                <img src="/paytm/ask.png" alt="" width={17} height={17} />

                <div className="contact__detail">Contact PhonePe Support</div>
              </div>
              <img src="/paytm/right.png" alt="" width={5} height={10} />
            </div>
          </div>
          <div className="paytem__box">
            <div className="debit__contact">
              <div className="contact__detail">
                <img src="/paytm/light.png" width={17} height={17} />

                <div className="contact__detail">Did you know?</div>
              </div>
              <img src="/paytm/right.png" alt="" width={5} height={10} />
            </div>
          </div>

          <div className="upi__bottomlogo">
            <img src="/paytm/logo__upi.png" alt="" width={84.29} height={31} />
          </div>

          <div className="mobile__menue">
            <img
              src="/paytm/mobile__menue.png"
              alt=""
              width={172}
              height={10}
            />
          </div>
        </div>
      )}

      {props.theme == "light" && (
        <div className="app__paytm app__white">
          <div className="paytm__time">
            <div className="time">
              {Dates.currentTime2()} <Left />
            </div>
            <div className="battery__2">
              <BiWifi className="biwifi" />
              <img src="/paytm/4g.png" alt="" className="paytm__g" width={9} />
              <div className="data2__">
                <div className="data__1"></div>
                <div className="data__2"></div>
                <div className="data__3"></div>
                <div className="data__4"></div>
                <div className="data__5"></div>
              </div>
              <div className="battery2__">
                <div
                  className="batter__levell"
                  style={{
                    width: `${limit}%`,
                    background: CheckstatusBattery(),
                  }}
                ></div>
                <span className="number__limit">{limit}</span>
              </div>
            </div>
          </div>

          <div className="paymt__transaction ">
            <div>
              <img src="/paytm/retour.png" alt="" width={14} height={14} />
            </div>
            <div className="transaction__message">
              <div className="message__successful ">Transaction Successful</div>
              <div className="message__time">{Dates.datePhonePe()} </div>
            </div>
          </div>

          <div className="paytem__box white__mode black__text">
            <div className="paymt__content ">
              <div className="paid__to black__text ">Paid to</div>
              <div className="content__email ">
                <div className="email__detail">
                  <div className="ellipse__circle">
                    <span className="circle__text"> S</span>
                  </div>
                  <div className="email black__text">
                    shubham0202@freecharge
                  </div>
                </div>
                <div className="amount black__text">
                  {Currency.IndiaWithoutZero(props.amount)}
                </div>
              </div>

              <div className="bar__tran"></div>
              <div className="transfere__detail">
                <div className="detail__transfer ">
                  <img
                    src="/paytm/transferwhite.png"
                    alt=""
                    width={16}
                    height={17}
                  />

                  <div className="tranfer__text black__text">
                    Transfer Details
                  </div>
                </div>
                <div>
                  <img src="/paytm/topblack.png" alt="" width={10} height={5} />
                </div>
              </div>

              <div className="transaction__detaill black__text">
                <label htmlFor="" className="black__text">
                  Transaction ID
                </label>
                <div className="detaill__number black__text">
                  <div className="number__transaction black__text">
                    T{Dates.date()}11482{Number.rrnNumber()}
                  </div>
                  <div>
                    <img
                      src="/paytm/copywhite.png"
                      alt=""
                      width={9}
                      height={10}
                    />
                  </div>
                </div>
              </div>

              <div className="debit__detaills">
                <div className="debit__title black__text"> Debit from</div>

                <div className="detail__debit">
                  <img src={props.from.logo} alt="" width={29} height={29} />

                  <div className="from__detaill black__text">
                    <div className="ac__number">
                      <div className="number__code black__text">
                        *******{props.account}
                      </div>
                      <div className="amount black__text">
                        {Currency.IndiaWithoutZero(props.amount)}
                      </div>
                    </div>
                    <div className="ac__number">
                      <div className="number__code black__text">
                        UTR:{props.transactionId}
                      </div>
                      <div>
                        <img
                          src="/paytm/copywhite.png"
                          alt=""
                          width={9}
                          height={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bar__tran"></div>
                <div className="debit__sendButton">
                  <div>
                    <img
                      src="/paytm/sendwhite.png"
                      alt=""
                      width={36}
                      height={36}
                    />

                    <label htmlFor=""> Send again</label>
                  </div>

                  <div>
                    <img
                      src="/paytm/historywhite.png"
                      alt=""
                      width={36}
                      height={36}
                    />

                    <label htmlFor="">View History</label>
                  </div>

                  <div>
                    <img
                      src="/paytm/sharewhites.png"
                      alt=""
                      width={36}
                      height={36}
                    />

                    <label htmlFor="">Share Receipt</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="paytem__box white__mode">
            <div className="debit__contact">
              <div className="contact__detail">
                <img src="/paytm/askwhite.png" alt="" width={17} height={17} />

                <div className="contact__detail black__text ">
                  Contact PhonePe Support
                </div>
              </div>
              <img src="/paytm/rightblack.png" alt="" width={5} height={10} />
            </div>
          </div>
          <div className="paytem__box white__mode">
            <div className="debit__contact">
              <div className="contact__detail">
                <img src="/paytm/lightwhite.png" width={17} height={17} />
                <div className="contact__detail black__text">Did you know?</div>
              </div>
              <img src="/paytm/rightblack.png" alt="" width={5} height={10} />
            </div>
          </div>
          <div className="upi__bottomlogo">
            <img src="/paytm/logobottom.png" alt="" width={84.29} height={31} />
          </div>

          <div className="mobile__menuewhite">
            <img src="/paytm/menumobile.png" alt="" width={172} height={10} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Paytm;
