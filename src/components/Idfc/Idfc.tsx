import React from "react";
import "./idfc.css";
function Idfc() {
  return (
    <div className="app__idfc">
      <div className="idfc__header">
        <img src="/Idfc/logo.png" alt="" width={124} />
        <span className="idfc__payment">Payment successful</span>
        <span className="idfc__amount">₹5000</span>
      </div>
      <div className="idfc__content">
        <div className="idfc__section">
          <label htmlFor="" className="idfc__label">
            From
          </label>
          <span className="idfc__namecustomer --10">
            Kukkala Veera Venkata Kumar
          </span>
          <span className="idfc__firstbank --3">IDFC FIRST BanK ****6761</span>
        </div>

        <div className="idfc__section __to">
          <label htmlFor="" className="idfc__label">
            To
          </label>
          <span className="idfc__namecustomer --10">REKHA CONSTRUCTION</span>
          <span className="idfc__firstbank --4">9910780968m@pnb</span>
        </div>

        <div className="idfc__section __mode">
          <label htmlFor="" className="idfc__label">
            Payment mode
          </label>
          <span className="idfc__namecustomer --7">UPI</span>
        </div>

        <div className="idfc__section --date">
          <label htmlFor="" className="idfc__label">
            Payment date
          </label>
          <span className="idfc__date --9">4:55 pm 15 Apr,2023</span>
        </div>

        <div className="idfc__section">
          <label htmlFor="" className="idfc__label --transaction">
            Transaction ID
          </label>
          <span className="idfc__date --9">310516605858</span>
        </div>
      </div>

      <div className="idfc__bottom">
        <img src="/Idfc/bottom.png" alt="" width={94} />
      </div>
    </div>
  );
}

export default Idfc;
