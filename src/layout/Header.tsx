import React from "react";
import { HiCreditCard } from "react-icons/hi";
function Header() {
  const showItem = () => {
    alert("showItem");
  };
  return (
    <div className='app__credit'>
      {/* <div
        className="card__crdit"
        onClick={() => {
          showItem();
        }}
      >
        <HiCreditCard color="white" size={25} />
        <span className="number__credit">3</span>
      </div> */}
    </div>
  );
}

export default Header;
