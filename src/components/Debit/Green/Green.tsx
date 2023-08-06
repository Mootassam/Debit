// import React from "react";
import "./Green.css";
import { FaSignal } from "react-icons/fa";
import { BiWifi } from "react-icons/bi";
import Dates from "../../../utils/Dates";
import Currency from './../../../utils/Currency';
function Green(props) {
    const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;
const random4Nuber =()=>{ 
    return Math.floor(Math.random() * 9000 ) + 1000 ;
}
const random3Number=()=>{ 
     return Math.floor( Math.random() * (352 - 44 +1 )) + 44
}
const random1Number = () => { 
    return Math.floor ( Math.random() * ( 9 - 1 + 1 )) + 1
}
  return (
    <div className="app__green">
      <div className="green__header">
        <div className="green__time">
          <div>
            <span className="time__green">{Dates.currentTime2()}</span>
          </div>
          <div className="green__right">
            <span className="data__green">{random3Number()}.{random1Number()}KB/s</span>


            <div className="battery__stat">
                <img src="/Green/four.png" alt="" width={7} className="four"  />
            <FaSignal color={"#003e35"} size={12.5} />
            <BiWifi  size={13}   color="#003e35"/>

            <div className="green__battery">
              <div className="grenn__bat">
                <div className="green__level"  style={{
                        width: `${limit}%`,
                       
                      }}></div>
              </div>
              <div className="green__border"></div>
            </div>
            </div>
            <div className="green__percent">
              <span className="percent__green">{limit}</span>
              <span className="percenet__">%</span>
            </div>
          </div>
        </div>
        <div className="green__bank">
          <span className="grebank__name"> <img src="/Green/back.png" alt="" width={6} /> Induslnd Bank</span>
          <span className="grbank__detaill">JM-INDUSB</span>
        </div>
      </div>

      <div className="green__content">
        <div className="content__text">
          <span className="text__1">Your Induslnd Account 10XXXXX{random4Nuber()} has</span>
          <div>
            <span className="text__1">been debited for INR</span>
            <span className="text2__amount"> {Currency.IndiaWithoutCurrency(props.amount)}.00</span>
            <span className="text1"> towards IMPS/ </span>
          </div>
          <div>
            <span className=" __bl">{props.transactionId}</span>
            <span className="text1">. Call </span>
            <span className=" __bl">18602677777</span>
            <span className="text1"> to report</span>
          </div>
          <span className="text1"> issue-Induslnd Bank</span>
        </div>
      </div>

      <div className="grren__bottom">
        <div className="bottom__more">
          <div>
            <img src="/Green/heart.png" alt="" width={18} />
            <label htmlFor="" className="text__fav">
              Add to favourites
            </label>
          </div>
          <div>
            <img src="/Green/copy__.png" alt="" width={17} />
            <label htmlFor="" className="text__fav">
              Copy
            </label>
          </div>
          <div>
            <img src="/Green/more.png" alt="" width={18} />
            <label htmlFor="" className="text__fav">
              More
            </label>
          </div>
        </div>
        <div className="green__mobile">
          <img src="/Green/mobile.png" alt="" width={162} />
        </div>
      </div>
    </div>
  );
}

export default Green;
