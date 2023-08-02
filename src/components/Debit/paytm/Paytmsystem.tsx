import "./paytmsystem.css";
function Paytmsystem() {
  return (
    <div className="paytm__system">
      <div className="paytmsystem__logo">
        <img src="/paytmsystem/logo.png" alt="" height={26} />
      </div>

      <div className="paytm-system">
        <div className="paytmsystem__content">
          <div className="content__successfully">Paid Successfully</div>
          <div className="content__amountsystem">
            ₹15,000
            <img src="/paytmsystem/success.png" alt="" width={38} height={38} />
          </div>
          <div className="amount__withcaracter">
            Ruppes Fifteen Thousand Only
          </div>
        </div>
        <img
          src="/paytmsystem/paytmbar.png"
          width={330}
          className="paytmsytstem__image"
        />
      </div>

      <div className="paytmsystem__bottom">
        <img src="/paytmsystem/Line.png" alt="" className="bottom__line" />

        <div className="background__">
          <div className="bottom__to">
            <div className="__to__left">
              To: Sandeep Pan Shop Birendra Kumar Yadav
            </div>
            <div className="__to__right">
              <img src="/paytmsystem/Paytm.png" alt="" width={45} height={45} />
            </div>
          </div>

          <div className="__gpay">UPI ID: gpay -11193609536@okbizaxis</div>

          <div className="bottom__form">
            <div className="__to__leftfrom">
              <label htmlFor="" className="__from">
                From: 9731196744
              </label>

              <span className="state__grey">State Bank Of India</span>
            </div>
            <div className="__to__right">
              <img src="/paytmsystem/Paytm.png" alt="" width={45} height={45} />
            </div>
          </div>

          <div className="bottom__ref">
            <span className="state__grey">UPI Ref No: 232461164998</span>
            <span className="state__grey">07:25 PM, 20 Nov 2022</span>
          </div>
        </div>
      </div>

      <div className="payt__logo">
        <label htmlFor="">POWERED BY</label>
        <img src="/paytmsystem/upi__Logo.png" alt="" width={60} height={21} />
      </div>
    </div>
  );
}

export default Paytmsystem;
