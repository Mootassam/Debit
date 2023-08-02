import "./Axis.css";
import Number from "../../../utils/Number";
import Dates from "../../../utils/Dates";
import Currency from "../../../utils/Currency";
function Axis(props) {
  return (
    <div className="app__axis">
      <div className="axis__header">
        <div className="axis__">
          <img src="/axis/success.png" alt="" />
        </div>
        <div className="payment__complete">Payment Complete</div>
      </div>
      <div className="axis__to">
        <div className="axis__sentto">
          <label htmlFor="" className="sentto__">
            SENT TO{" "}
          </label>

          <div className="sento__detail">
            <div className="detail__axis">
              <div className="detail__box">
                <b>PK </b>
              </div>

              <div className="detail__code">
                <div className="code__name">pradeep</div>
                <div className="code">XXXX-3382</div>
              </div>
            </div>

            <div className="detail__amount">
              <div className="amount__label">AMOUNT</div>
              <div className="amount__sent">{Currency.India(props.amount)}</div>
            </div>
          </div>

          <div className="detail__branch">
            <div className="branch__left">BRANCH:</div>
            <div className="branch__right">DEHRADUN TILAK ROAD, DISTT.DE</div>
          </div>

          <div className="detail__ifsc">
            <div>IFSC</div>
            <div>PUNB0108700</div>
          </div>

          <div className="remarks">Remarks</div>
        </div>
      </div>
      <div className="axis__from">
        <div className="text">SENT FROM </div>

        <div className="from__detail">
          <div className="box__axis">
            <img src="/axis/axislogo.png" alt="" width={29} height={24} />
          </div>
          <div>
            <div className="axis__debit">XXXX-{props.account}</div>
            <div>SA</div>
          </div>
        </div>
      </div>
      <div className="payment__detail">
        <div className="">
          <div className="paymenttext__details">Payment Details</div>
          <div className="sucess">SUCCESS</div>
        </div>

        <div className="detail__ifsc">
          <div>MODE:</div>
          <div className="right__mode">
            <div className="pay">Instant Pay</div>
            <div className="charge">IMPS | CHARGES ₹ 5.50</div>
          </div>
        </div>

        <div className="detail__ifsc">
          <div>RECEIPT NO:</div>
          <div>{Number.generateRandomString()}</div>
        </div>
        <div className="detail__ifsc">
          <div>RRN:</div>
          <div>{props.transactionId}</div>
        </div>
        <div className="detail__ifsc">
          <div>DATE:</div>
          <div>{Dates.DateImps()}</div>
        </div>
      </div>
    </div>
  );
}

export default Axis;
