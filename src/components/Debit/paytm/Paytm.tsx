import "./paytm.css";
import Dates from "../../../utils/Dates";
import Number from '../../../utils/Number';

function Paytm() {
  return (
    <div className="system__app">
      <div className="app__paytm">
        <div className="paytm__time">
          <div className="time">11:48 AM</div>
          <div className="battery">
            <img src="/paytm/battery.png" alt="" />
          </div>
        </div>

        <div className="paymt__transaction">
          <div>
            <img src="/paytm/retour.png" alt="" width={14} height={14} />
          </div>
          <div className="transaction__message">
            <div className="message__successful">Transaction Successful</div>
            <div className="message__time">11:48 am on 27 Mar 2023</div>
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
              <div className="amount">₹2,000</div>
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
                  T{Dates.date()}114823{Number.phonepe2()}
                </div>
                <div>
                  <img src="/paytm/copy.png" alt="" width={9} height={10} />
                </div>
              </div>
            </div>

            <div className="debit__detaills">
              <div className="debit__title"> Debit from</div>

              <div className="detail__debit">
                <img src="/paytm/sbi_logo.png" alt="" width={29} height={29} />

                <div className="from__detaill">
                  <div className="ac__number">
                    <div className="number__code">*******2348</div>
                    <div className="amount">₹2,000</div>
                  </div>
                  <div className="ac__number">
                    <div className="number__code">UTR:308658277768</div>
                    <div>
                      <img src="/paytm/copy.png" alt="" width={9} height={10} />
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
                  <img src="/paytm/history.png" alt="" width={36} height={36} />

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
          <img src="/paytm/mobile__menue.png" alt="" width={172} height={10} />
        </div>
      </div>

      <div className="app__paytm app__white">
        <div className="paytm__time">
          <div className="time">11:48 AM</div>
          <div className="battery">
            <img src="/paytm/battery.png" alt="" />
          </div>
        </div>

        <div className="paymt__transaction ">
          <div>
            <img src="/paytm/retour.png" alt="" width={14} height={14} />
          </div>
          <div className="transaction__message">
            <div className="message__successful ">Transaction Successful</div>
            <div className="message__time">11:48 am on 27 Mar 2023</div>
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
                <div className="email black__text">shubham0202@freecharge</div>
              </div>
              <div className="amount black__text">₹2,000</div>
            </div>


       

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
                T{Dates.date()}114823{Number.phonepe2()}
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
                <img src="/paytm/logowhite.png" alt="" width={29} height={29} />

                <div className="from__detaill black__text">
                  <div className="ac__number">
                    <div className="number__code black__text">*******2348 </div>
                    <div className="amount black__text">₹2,000</div>
                  </div>
                  <div className="ac__number">
                    <div className="number__code black__text">
                      UTR:308658277768
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

                  <label htmlFor="">View again</label>
                </div>

                <div>
                  <img
                    src="/paytm/sharewhites.png"
                    alt=""
                    width={36}
                    height={36}
                  />

                  <label htmlFor="">Sahre again</label>
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
    </div>
  );
}

export default Paytm;
