import { useState } from "preact/hooks";
import { useEffect, useRef } from "react";
import Kotak from "./Kotak/Kotak";
import Paytm from "./UpiSystem/Paytm";
import Imps from "./Imps/Imps";
import Blue from "./Blue/Blue";
import Equitas from "./Equitas/Equitas";
import Axis from "./Axis/Axis";
import System from "./System/System";
import Hdfc from "./HDFC/Hdfc";
import Sbi from "./Sbi/Sbi";
import Indusland from "./InduslandBank/Indusland";
import Icici2 from "./Icici/Icici2";
import Icici from "./Icici/Icici";
import Sbi2 from "./Sbi2/Sbi2";
import Paytmsystem from "./paytm/Paytmsystem";
import Sys from "./Sys/Sys";
import Names from "../../utils/Names";
import CheckTheme from "../../utils/CheckTheme";
import optionAmouts from "../../data/optionAmount";
import optionsbank from "../../data/optionsbank";
import CheckAmoutn from "../../utils/CheckAmount";
import html2canvas from "html2canvas";
import Header from "../../layout/Header";
import Samsung from "./Samsung/Samsung";
import Idfc from "./Idfc/Idfc";
import Grey from "./IdfcG/Grey";
import Fi from "./Fi/Fi";
import RedKotak from "./RedKotak/RedKotak";
import Yes from "./Yes/Yes";
import "../../app.css";
import { useDispatch } from "react-redux";
import { saveDebit } from "../../store/debit/debitActions";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Number from "../../utils/Number";
import list from "../../data/bank";

function Debit() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [amount, setAmount] = useState(2000);
  const [IFSC, setIFSC] = useState<any | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [template, setTemplate] = useState("Fi");
  const [reference, setReference] = useState<any | null>(null);
  const [utr, setutr] = useState<any | null>(null);
  const [transactionId, setTransacaton] = useState<any | null>(null);
  const [theme, setTheme] = useState("light");
  const [loaded, setLoaded] = useState(false);
  const [upi, setUpi] = useState("");
  const [account, setAccount] = useState(0);
  const [from, setfrom] = useState(Number.getRandomItem(list));

  useEffect(() => {
    if (divRef.current) {
      setLoaded(true);
    }
    setfrom(Number.getRandomItem(list));
    setAccount(Number.generateRandom4Number());
    const data = localStorage.getItem("upi");
    if (data !== null) {
      setUpi(data);
    } else {
      setUpi("3204");
    }
  }, [divRef, upi, amount, template, transactionId]);

  const change = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
    let a = Math.floor(100000000000 + Math.random() * 900000000000);
    let ifsc = Math.floor(1000000 + Math.random() * 9000000);
    let utr = Math.floor(100000000000 + Math.random() * 900000000000);

    setAccount(Number.generateRandom4Number());
    setutr(utr);
    setTransacaton(`${upi}${Number.phonepe0()}`);
    setIFSC(ifsc);
    setReference(a);
    const data = localStorage.getItem("upi");
    if (data !== null) {
      setUpi(data);
    } else {
      // Handle the case when data is null (optional)
      // For example, you might want to set a default value in this case:
      // setUpi("default value");
    }
  };

  const generate = async () => {
    let data;
    [
      "phonepe1",
      "phonepe2",
      "paytm",
      "bharat",
      "gpay",
      "phonepe3",
      "samsung",
    ].includes(template)
      ? (data = {
          amount: amount,
          upi: upi,
          bank: from.name,
          transaction: transactionId,
          account: account,
        })
      : (data = {
          amount: amount,
          upi: upi,
          bank: template,
          transaction: transactionId,
          account: account,
        });

    try {
      dispatch(saveDebit(data));
    } catch (error) {
      console.log(error);
    }
  };

  function handleCaptureScreenshot() {
    if (divRef.current) {
      html2canvas(divRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      }).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob !== null) {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard
              .write([item])
              .then(() => {
                console.log("Screenshot copied to clipboard");
              })
              .catch((error) => {
                console.error("Error copying screenshot to clipboard:", error);
              });
          }
        }, "image/png");
        setAmount(amount);
      });
    }
  }

  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__content">
        <div className="app__sidebar">
          <div className="form__submit">
            <div className="sdiebar__form">
              <label htmlFor=""> Select Amount</label>
              <select
                name="amount"
                id=""
                className="app__select"
                onClick={change}
              >
                {optionAmouts.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="sdiebar__form">
              <label htmlFor="">Select Bank</label>
              <select
                className="app__select"
                onChange={(event) => {
                  setTemplate(event.target.value);
                }}
              >
                {optionsbank.map(
                  (item, index) =>
                    CheckAmoutn.checkAmount(amount, item.value) && (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    )
                )}
              </select>
            </div>

            <div className="sdiebar__form">
              <label htmlFor=""> UPI CODE </label>
              <input
                className="app__select"
                type="text"
                onChange={(e) => {
                  localStorage.setItem("upi", e.target.value);
                }}
                maxLength={4}
                value={upi}
              />
            </div>

            {CheckTheme.checkTheme(template) && (
              <div className="sdiebar__form">
                <label htmlFor="">Template</label>
                <select
                  className="app__select"
                  onChange={(e) => {
                    setTheme(e.target.value);
                  }}
                >
                  <option value="light"> Light</option>
                  <option value="dark"> Dark</option>
                </select>
              </div>
            )}

            <button className="save__debit" onClick={() => generate()}>
              <span>Generate Debit</span>
            </button>

            <button className="generate__credit">
              <span>Generate Credit</span>
            </button>
            <button className="generate" onClick={handleCaptureScreenshot}>
              <img src="/sidebar/screenshot.png" alt="" width={40} />
            </button>
          </div>

          <div className="form__translate">
            <label htmlFor=""> Credit Tools  </label>
            <div className="translate__">
              <img src="/sidebar/usa.png" alt="" width={80} />
              <img src="/sidebar/chinese.webp" alt="" width={80} />
            </div>
          </div>
        </div>
        <div className="content__card">
          <div className="card__payment flash ">
            <div className="screenshot" ref={divRef}>
              {loaded && (
                <>
                  {template === "kotak" && <Kotak amount={amount} upi={upi} />}
                  {template === "phonepe2" && (
                    <Paytm
                      amount={amount}
                      theme={theme}
                      utr={utr}
                      transactionId={transactionId}
                      upi={upi}
                      from={from}
                      account={account}
                    />
                  )}
                  {template === "imps" && <Imps amount={amount} upi={upi} />}
                  {template === "icici" && (
                    <Icici
                      amount={amount}
                      reference={reference}
                      ifsc={IFSC}
                      upi={upi}
                    />
                  )}
                  {template === "impsblue" && (
                    <Blue amount={amount} upi={upi} />
                  )}
                  {template === "airtel" && (
                    <Equitas amount={amount} upi={upi} />
                  )}
                  {template === "axis" && <Axis amount={amount} upi={upi} />}
                  {template === "phonepe1" && (
                    <System
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                    />
                  )}
                  {template === "paytm" && (
                    <Hdfc amount={amount} upi={upi} from={from} />
                  )}
                  {template === "sbi" && <Sbi amount={amount} upi={upi} />}
                  {template === "sbimessage" && (
                    <Sbi2 theme={theme} amount={amount} upi={upi} />
                  )}
                  {template === "gpay" && (
                    <Indusland
                      name={Names.generateRandomFullName()}
                      amount={amount}
                      upi={upi}
                      from={from}
                    />
                  )}
                  {template === "paytm2" && (
                    <Paytmsystem amount={amount} upi={upi} />
                  )}
                  {template === "bharat" && (
                    <Icici2
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                    />
                  )}
                  {template === "phonepe3" && (
                    <Sys theme={theme} amount={amount} upi={upi} from={from} />
                  )}
                  {template === "samsung" && (
                    <Samsung
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                    />
                  )}
                  {template === "idfc" && <Idfc amount={amount} upi={upi} />}
                  {template === "grey" && <Grey amount={amount} upi={upi} />}
                  {template === "Fi" && <Fi amount={amount} upi={upi} />}

                  {template === "redKotak" && (
                    <RedKotak amount={amount} upi={upi} />
                  )}

                  {template === "Yes" && <Yes amount={amount} />}
                </>
              )}
            </div>

            <div className="credit__screenshot"></div>
          </div>
        </div>
      </div>

      {/* <CreditBar /> */}
    </div>
  );
}

export default Debit;
