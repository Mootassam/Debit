import "./Indusland.css";
import Currency from "../../../utils/Currency";
import Names from "../../../utils/Names";
import randomEmail from "random-email";
import Dates from "../../../utils/Dates";
import Rightdata from "../../../shared/right/Rightdata";
import Left from "../../../shared/icons/Left";
function Indusland(props) {

  return (
    <div className="indusland__bank">
      <div className="indusland__header">
        <div className="headerindusland__left">
          <div className="indusland__time">
            {Dates.currentTime()}
            <Left />
          </div>
        </div>
        <div className="headerindusland__right">
          <Rightdata />
        </div>
      </div>

      <div className="indulsand__subheader">
        <div className="subheader__left">
          <img src="/Indusland/backblack.png" alt="" height={17} />
        </div>

        <div className="subheader__right">
          <img src="/Indusland/drapeaux.png" alt="" height={17} />
          <img src="/Indusland/plus.png" alt="" height={17} />
        </div>
      </div>

      <div className="indusland__content">
        <div className="indusland_top">
          <div className="top__caracter">
            <div className="caracter">{Names.firstCaracter(props.name)}</div>
          </div>

          <div className="careacter__name">To {props.name}</div>
          <div className="caracter__amount">
            <div className="amoutn__carrency">₹</div>
            {Currency.IndiaImps(props.amount)}
          </div>

          <div className="catercter__button">
            <div className="button__payagin">Pay again</div>

            <div className="button__friends"> Split with friends</div>
          </div>

          <div className="catarecter__time">
            <div className="time__completed">
              <img src="/Indusland/check.png" alt="" width={15} height={15} />
              <span>Completed</span>
            </div>
            <div className="caracter__bar"></div>
            <div className="caracter__date">{Dates.dateGpay()}</div>
          </div>
        </div>
        <div className="indulsand__bottom">
          <div className="induslan__logo">
            <div className="indusland">
              <div className="logo__">
                <img
                  src={props.from.logo}
                  alt=""
                  width={31}
                  height={27}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="logo__text">{props.from.name} </div>
            </div>
            <div>
              <img src="/Indusland/bottom.png" alt="" width={15} height={8} />
            </div>
          </div>

          <div className="indusland__bar">
            <img src="/Indusland/bar.png" alt="" height={1} />
          </div>

          <div className="indusland__detaill">
            <div className="detaill__transaction">
              <div className="transaction__label">UPI transaction ID</div>
              <div className="transaction__ids">{props.transactionId}</div>
            </div>

            <div className="detaill__transaction">
              <div className="transaction__label">To: {props.name}</div>
              <div className="transaction__ids">
                {randomEmail({ domain: "gmail.com" })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__bottom">
        <div className="bottom__up">
          <div className="button__issues">
            <img src="/Indusland/askv.png" alt="" width={16} height={17} />
            Having issues?
          </div>

          <div className="button__share">
            <img src="/Indusland/sharev.png" alt="" width={16} height={17} />
            share
          </div>
        </div>

        <div className="bottom__bottom">
          <img src="/Indusland/button__mobile.png" alt="" width={213} />
        </div>
      </div>
    </div>
  );
}

export default Indusland;
