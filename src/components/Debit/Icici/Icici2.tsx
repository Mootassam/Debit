import StyledWrapper from "./Styled";
import Currency from "../../../utils/Currency";
import Names from "../../../utils/Names";
import Dates from "../../../utils/Dates";
import Number from "../../../utils/Number";
function Icici2(props) {
  return (
    <StyledWrapper>
      <div className="app__icici2">
        {props.theme === "light" && (
          <div className="icici2__white">
            <div className="icic2__header">
              <div className="header__logos">
                <img src="/icici/circle.png" alt="" width={94} height={94} />
              </div>
              <div className="money__sent">Money sent!</div>
            </div>

            <div className="icici2__content">
              <div className="customer">
                <label htmlFor="">Customer Name</label>
                <span>{Names.generateRandomFullName()}r</span>
              </div>
              <div className="customer__bar"></div>
              <div className="customer__group">
                <div className="customer">
                  <label htmlFor="">Transaction ID</label>
                  <span>31{Number.phonepe2()}</span>
                </div>

                <div className="customer">
                  <label htmlFor="">Amount</label>
                  <span className="green__color">
                    {Currency.India(props.amount)}
                  </span>
                </div>
              </div>
              <div className="customer__bar"></div>
              <div className="customer__group">
                <div className="customer">
                  <label htmlFor="">Date</label>
                  <span>{Dates.dateBlue()}</span>
                </div>

                <div className="customer">
                  <label htmlFor="">Time</label>
                  <span> {Dates.timeImps()}</span>
                </div>
              </div>
              <div className="customer__bar"></div>
              <div className="customer">
                <label htmlFor="">Debited from</label>
                <div className="debit__group">
                  <div className="debit__image">
                    <img src={props.from.logo} alt="" width={33} height={35} />
                  </div>
                  <div className="icici__bank">
                    <span>{props.from.name}</span>
                    <span>******{props.account}</span>
                  </div>
                </div>
              </div>
              <div className="customer__bar height__debit"></div>
              <div className="customer">
                <label htmlFor="">Remarks</label>
                <span>Prepaid</span>
              </div>
              <div className="customer__bar"></div>

              <div className="icic2__bottom">
                <div className="bottom__image">
                  <div className="poweredby">POWERED BY</div>
                  <img
                    src="/icici/icici__bottom.png"
                    alt=""
                    width={66}
                    height={23}
                  />
                </div>

                <div className="icici__button">
                  <div className="button__details">Details</div>
                  <div className="button__home">Home</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {props.theme == "dark" && (
          <div className="icici2__black">
            <div className="icic2__header">
              <div className="header__logos">
                <img src="/icici/circle.png" alt="" width={94} height={94} />
              </div>
              <div className="money__sent">Money sent!</div>
            </div>

            <div className="icici2__content">
              <div className="customer">
                <label htmlFor="" className="text__white">
                  Customer Name
                </label>
                <span className="text__white">
                  {Names.generateRandomFullName()}
                </span>
              </div>
              <div className="customer__bar"></div>
              <div className="customer__group">
                <div className="customer">
                  <label htmlFor="" className="text__white">
                    Transaction ID
                  </label>
                  <span className="text__white">31{Number.phonepe2()}</span>
                </div>

                <div className="customer">
                  <label htmlFor="" className="text__white">
                    Amount
                  </label>
                  <span className="green__color">
                    {Currency.India(props.amount)}
                  </span>
                </div>
              </div>
              <div className="customer__bar"></div>
              <div className="customer__group">
                <div className="customer">
                  <label htmlFor="" className="text__white">
                    Date
                  </label>
                  <span className="text__white">{Dates.dateBlue()}</span>
                </div>

                <div className="customer">
                  <label htmlFor="" className="text__white">
                    Time
                  </label>
                  <span className="text__white">{Dates.timeImps()}</span>
                </div>
              </div>
              <div className="customer__bar"></div>
              <div className="customer">
                <label htmlFor="" className="text__white">
                  Debited from
                </label>
                <div className="debit__group">
                  <div className="debit__image">
                    <img src={props.from.logo} alt="" width={33} height={35} />
                  </div>
                  <div className="icici__bank">
                    <span className="text__white">{props.from.name}</span>
                    <span className="text__white">
                      ******{props.account}
                    </span>
                  </div>
                </div>
              </div>
              <div className="customer__bar height__debit"></div>
              <div className="customer">
                <label htmlFor="" className="text__white">
                  Remarks
                </label>
                <span className="text__white">Prepaid</span>
              </div>
              <div className="customer__bar"></div>

              <div className="icic2__bottom">
                <div className="bottom__image">
                  <div className="poweredby text__white">POWERED BY</div>
                  <img
                    src="/icici/icici__bottom.png"
                    alt=""
                    width={66}
                    height={23}
                  />
                </div>

                <div className="icici__button">
                  <div className="button__details">Details</div>
                  <div className="button__home">Home</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </StyledWrapper>
  );
}

export default Icici2;
