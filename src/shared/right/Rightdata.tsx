// import React from "react";
import "../styles/style.css";
// import Right from "./Right";
import { RiWifiLine } from "react-icons/ri";
function Rightdata() {
  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className='right__'>
      <RiWifiLine />
      <img src='/Indusland/data2.png' alt='' width={14} height={12} />
      <div className='data__cnx'>
        <div className='cnx1'></div>
        <div className='cnx2'></div>
        <div className='cnx3'></div>
        <div className='cnx4'></div>
      </div>
      <img src='/Indusland/data1.png' alt='' width={14} height={12} />
      <div className='data__cnx'>
        <div className='cnx1'></div>
        <div className='cnx2'></div>
        <div className='cnx3'></div>
        <div className='cnx4'></div>
      </div>

      <div className='battery__gpay'>
        <div className='battery__number'>{limit}%</div>
        <div className='battery__gray'>
          <div className='top__phone'></div>
          <div className='gapay__battery'>
            <div
              className='add__level'
              style={{
                height: `${limit}%`,
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightdata;
