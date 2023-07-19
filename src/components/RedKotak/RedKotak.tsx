import React from "react";
import "./redKotak.css";
function RedKotak() {
  return (
    <>
      <div className="app__redkotak">
        <div className="kotak__white">
          <div className="kotaq__header">
            <span className="contact__to">PAYMENT TO</span>
            <span className="contact__company d--12">SHUBHAM ENTERPRISES</span>
            <span className=" ">8797192247m@pnb</span>
          </div>
          <div className="kotak__bar">
            <img src="/Kotak/bar.png" alt="" />
          </div>

          <div className="kotaq__content">
            <div className="kotaq__amount">₹2,000.00</div>
            <div className="kotaq__detaill __34">
              <div className="kotaq__status">Status</div>
              <div className="kotaq__successful">
                Successful
                <div className="kotaq__circle">
                  <img src="/Kotak/check.png" alt="" width="9" />
                </div>
              </div>
            </div>
            <div className="bar__dark">
              <img src="Kotak/dark.png" alt="" width={425} />
            </div>
            <div className="kotaq__detaill __22">
              <div className="kotaq__status ">Date</div>
              <div className="kotaq__">
                <span className="kotaq__date">13 Apr 2023</span>
                <span className="kotaq__smalltime">02:25 pm</span>
              </div>
            </div>
            <div className="bar__dark">
              <img src="Kotak/dark.png" alt="" width={425} />
            </div>
            <div className="kotaq__detaill __23">
              <div className="kotaq__status">Transaction ID</div>
              <div className="kotaq__successful">310314801899</div>
            </div>
            <div className="border__bar">
              <img src="/Kotak/bar.png" alt="" />
            </div>

            <div className="kotaq__footer">
              <label htmlFor="" className="kotaq__from">
                FROM
              </label>
              <label htmlFor="" className="kotak__baba">
                SHAIK BABA
              </label>
              <span className="kotak__logo">
                <img src="/Kotak/kotak__logo.png" alt="" width={28} />
                Kotak Mahindra Bank
              </span>
              <span className="saving">
                SAVINGS <div className="circle__grey"></div> XX7597
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="whitekotak">
        <label htmlFor="" className="paid__whitekotak">
          Paid securely using

          <img src="/Kotak/logo.png" alt="" width={151}/>
        </label>
      </div>
    </>
  );

}

export default RedKotak;
