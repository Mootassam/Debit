import "./idfcg.css";
import Currency from "../../../utils/Currency";
import Number from "../../../utils/Number";
import Names from "../../../utils/Names";
import Dates from "../../../utils/Dates";
function Grey(props) {
  return (
    <div className="app__grey">
      <div className="grey__header">
        <img src="/Idfc/logogrey.png" alt="Logo idfc Grey" width="119" />
        <span className="grey__payment s__19">Payment successful</span>
        <span className="grey__amount p__21">
          {Currency.IndiaCurrency(props.amount)}
        </span>
      </div>

      <div className="grey__content">
        <div className="grey__section">
          <label htmlFor="" className="section__label">
            From
          </label>
          <span className="grey__customername p__9">{Names.generateRandomFullName()}</span>
          <span className="grey__bank">
            IDFC FIRST Bank ****{Number.generateRandom4Number()}
          </span>
        </div>
        <div className="grey__section">
          <label htmlFor="" className="section__label p__to">
            To
          </label>
          <span className="grey__customername p__11">PREM TRADERS</span>
          <span className="grey__bank">YES BANK LTD ****9961</span>
        </div>
        <div className="grey__section">
          <label htmlFor="" className="section__label p__19">
            Note
          </label>
          <span className="grey__customername">K</span>
        </div>
        <div>
          <img src="/Idfc/bar.png" alt="" />
        </div>
        <div className="grey__section">
          <label htmlFor="" className="section__label p__16">
            Payment mode
          </label>
          <span className="grey__customername">IMPS</span>
        </div>
        <div className="grey__section">
          <label htmlFor="" className="section__label p__17">
            Payment date
          </label>
          <span className="grey__customername">{Dates.idfc()}</span>
        </div>
        <div className="grey__section">
          <label htmlFor="" className="section__label b__19">
            Transaction ID{" "}
          </label>
          <span className="grey__customername">{props.transactionId}</span>
        </div>
      </div>
      <div className="grey__bottom">
        <img src="/Idfc/bottom.png" alt="" width={94} />
      </div>
    </div>
  );
}

export default Grey;
