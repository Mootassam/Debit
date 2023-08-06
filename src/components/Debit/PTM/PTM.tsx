import { FaSignal } from "react-icons/fa";
import Left from "../../../shared/icons/Left";
import Currency from "../../../utils/Currency";
import Dates from "../../../utils/Dates";

import "./Ptm.css";
function PTM(props) {

  console.log(props.from);
  
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;
  return (
    <div className="app__ptm">
      <div className="ptm__header">
        <div className="ptm__left">
          <span className="ptm__time">{Dates.currentTime()}</span>
          <Left />
        </div>
        <div className="ptm__right">
          <span className="ptm__name">4G</span>
          <>
            <FaSignal color={"#6D6D6D"} size={13} />
          </>
          <div className="battery__ptm">
            <div className="ptm__battborder"></div>
            <div className="ptm__battery">
              <div
                className="ptm__level"
                style={{
                  height: `${limit}%`,
                }}
              ></div>
            </div>
          </div>
          <span className="ptm__batt">{limit}%</span>
        </div>
      </div>
      <div className="ptm__subheader">
        <div>
          <img src="/PTM/back.png" alt="" width="15" />
        </div>
        <div>
          <img src="/PTM/paytm.png" alt="" width={58} />
        </div>
        <div className="ptm__help"> Help</div>
      </div>

      <div className="ptm__content">
        <div className="content__blue">
          <div className="content__ptmdetail">
            <div>
              <div className="ptm__circle">
                <span className="ptm__first">RB</span>
              </div>
            </div>
            <div className="content__ptmname">
              <span className="ptm__customername">Rima Moni Bordoloi</span>
              <span className="ptm__bank">Union Bank of India - 1538</span>
            </div>
          </div>
          <div className="content__ptmcontent">
            <div className="ptm__data">
              <span className="ptm__amount">
                {Currency.IndiaCurrency(props.amount)}
              </span>
              <div className="ptm__darkgreen"></div>
            </div>
          </div>

          <div className="ptm__date">
            <label htmlFor="">{Dates.dateptm()}</label>
            <img src="/PTM/check.png" alt="" width={10.5} />
          </div>

          <div className="ptm__buttons">
            <div className="ptm__button">
              <span className="buton__text">Check Balance</span>
            </div>
            <div className="ptm__share">
              <span className="buton__text">Share</span>
            </div>
            <div className="ptm__again">
              <span className="buton__text">Pay Again</span>
            </div>
          </div>
        </div>
        <img src="/PTM/barrr.png" alt="" width={331} className="barr" />

        <img src="/PTM/ads1.png" alt="" width={332} className="asd1" />

        <img src="/PTM/ads2.png" alt="" width={334} />
      </div>

      <div className="bottom__ptm">
        <div className="mobile__nav">
          <div className="nav__ptm">
            <div>
              <img src="/PTM/home.png" alt="" width={19} />
              <span className="nav__text">Home</span>
            </div>
            <div>
              <img src="/PTM/scan.png" alt="" width={23} />
              <span className="nav__text">Scan</span>
            </div>
            <div>
              <img src="/PTM/cashback.png" alt="" width={24} />
              <span className="nav__text">Cashback</span>
            </div>
            <div>
              <img src="/PTM/book.png" alt="" width={13} />
              <span className="nav__text">Passbook</span>
            </div>
          </div>
        </div>
        <div className="ptm__mobiledark">
          <img src="/PTM/mobile.png" width={220} />
        </div>
      </div>
    </div>
  );
}

export default PTM;
