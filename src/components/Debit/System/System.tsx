import "./system.css";
import Dates from "../../../utils/Dates";
import Currency from "../../../utils/Currency";
import Number from "../../../utils/Number";
function System(props) {
  return (
    <div className="system">
      {props.theme === "light" && (
        <div className="app__system">
          <div className="system__header">
            <div className="header__logo">
              <img src="/system/system.png" alt="" width={19} height={42} />
            </div>
            <div className="header__detail">
              <label htmlFor="">Transaction Successful</label>
              <span>{Dates.phonePe()}</span>
            </div>
          </div>
          <div className="system__content">
            <div className="content__paidto">Paid to</div>
            <div className="content__bank">
              <div className="bank__">
                <div className="bank__box">
                  <img
                    src="/system/bottom__logo.png"
                    alt=""
                    width={33}
                    height={28}
                  />
                </div>

                <div className="bank__detail">
                  <div className="detail__namebank">bijay acharya</div>
                  <div className="detail__bankcode">XXXXXXXXXX4876</div>
                  <div className="name__ofbank">Bank Of Baroda</div>
                </div>
              </div>
              <div className="bank__amount">
                {Currency.IndiaWithoutZero(props.amount)}
              </div>
            </div>
            <div className="bar__"></div>
            <div className="content__transfer">
              <div className="transefere">
                <div>
                  <img src="/system/box.png" alt="" width={16} />
                </div>
                <div className="transfer_text"> Transfer Details</div>
              </div>
              <div>
                <img src="/system/top.png" alt="" width={12} height={7} />
              </div>
            </div>

            <div className="transaction__id">
              <label htmlFor="transacton__id">Transaction ID</label>
              <div className="transaction__number">
                T{Dates.date()}104009{Number.phonepe2()}
              </div>
            </div>

            <div className="transaction__">
              <label htmlFor="transacton__id">Debited from</label>

              <div className="transaction__row">
                <div className="transaction__box">
                  <div className="box__phone">
                    <img src={props.from.logo} alt="" width={30} height={27} />
                  </div>
                </div>

                <div className="transaction__det">
                  <div className="transaction__house">
                    <div className="transation__code">****{props.account}</div>
                    <div className="transaction__utr">
                      UTR {props.transactionId}
                    </div>
                  </div>
                  <div className="bank__amount">
                    {Currency.IndiaWithoutZero(props.amount)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="system__bottom">
            <div className="system__powerby">Powered by</div>
            <img
              src="/system/logo__bottom.png"
              alt=""
              width={106}
              height={16}
            />
          </div>
        </div>
      )}

      {props.theme === "dark" && (
        <div className="app__systemblack">
          <div className="system__header">
            <div className="header__logo">
              <img src="/system/system.png" alt="" width={19} height={42} />
            </div>

            <div className="header__detail">
              <label htmlFor="">Transaction Successful</label>
              <span>{Dates.phonePe()}</span>
            </div>
          </div>
          <div className="system__content black__mode">
            <div className="content__paidto white__system">Paid to</div>
            <div className="content__bank">
              <div className="bank__">
                <div className="bank__box">
                  <img
                    src="/system/bottom__logo.png"
                    alt=""
                    width={33}
                    height={28}
                  />
                </div>

                <div className="bank__detail">
                  <div className="detail__namebank white__system white__system">
                    bijay acharya
                  </div>
                  <div className="detail__bankcode violet__color">
                    XXXXXXXXXX4876
                  </div>
                  <div className="name__ofbank violet__color">
                    Bank Of Baroda
                  </div>
                </div>
              </div>
              <div className="bank__amount white__system">
                {Currency.IndiaWithoutZero(props.amount)}
              </div>
            </div>
            <div className="bar__ bar__color"></div>
            <div className="content__transfer">
              <div className="transefere">
                <div>
                  <img src="/system/box__black.png" alt="" width={16} />
                </div>
                <div className="transfer_text white__system">
                  {" "}
                  Transfer Details
                </div>
              </div>
              <div>
                <img src="/system/topblack.png" alt="" width={12} height={7} />
              </div>
            </div>

            <div className="transaction__id">
              <label
                htmlFor="transacton__id violet__"
                className="violet__color"
              >
                Transaction ID
              </label>
              <div className="transaction__number  white__system">
                T{Dates.date()}104009{Number.phonepe2()}
              </div>
            </div>

            <div className="transaction__">
              <label htmlFor="transacton__id" className="violet__color">
                Debited from
              </label>

              <div className="transaction__row">
                <div className="transaction__box">
                  <div className="box__phone">
                    <img src={props.from.logo} alt="" width={30} height={27} />
                  </div>
                </div>

                <div className="transaction__det">
                  <div className="transaction__house">
                    <div className="transation__code white__system">
                      ****{props.account}
                    </div>
                    <div className="transaction__utr violet__color">
                      UTR {props.transactionId}
                    </div>
                  </div>
                  <div className="bank__amount  white__system">
                    {Currency.IndiaWithoutZero(props.amount)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="system__bottom">
            <div className="system__powerby violet__color">Powered by</div>
            <img
              src="/system/logo__bottom.png"
              alt=""
              width={106}
              height={16}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default System;
