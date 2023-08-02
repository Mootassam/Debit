
import "./Jupiter.css";

function Jupiter() {
  return (
    <div className="app__jupiter">
      <div className="jupiter__header">
        <div className="jupiter__logo">
          <img src="/Jupiter/logo.png" alt="" />
        </div>
        <div className="jupiter__message"> Successful Transaction</div>
        <div className="jupiter__time">
          Wednesday 29 Mar 23 &nbsp;&nbsp; 17:25 pm
        </div>
      </div>

      <div className="jupiter__content">
        <div className="jupiter__amount">
            <div className="caractere">
          <div className="jupiter__cararcter">
            <div className="caractere">CN</div>
          </div>
          <div className="jupiter__nomcustomer">Chandan Nazareth</div>
          </div>
          <div className="amount">₹ 40,000</div>
        </div>
        <div className="bar__jupiter"></div>

      </div>

 

      <div className="jupiter__bttom">
        <div className="bottom__text">In partnership with</div>
        <img src="/Jupiter/Jupiter.png" alt=""  width={86} height={21}/>
      </div>
    </div>
  );
}

export default Jupiter;
