import { useState } from "preact/hooks";
import React, { lazy, Suspense } from "react";

import "./app.css";
import { useEffect, useRef } from "react";
import Kotak from "./components/Kotak/Kotak";
import Paytm from "./components/UpiSystem/Paytm";
import Imps from "./components/Imps/Imps";
import Blue from "./components/Blue/Blue";
import Equitas from "./components/Equitas/Equitas";
import Axis from "./components/Axis/Axis";
import System from "./components/System/System";
import Hdfc from "./components/HDFC/Hdfc";
import Sbi from "./components/Sbi/Sbi";
import Indusland from "./components/InduslandBank/Indusland";
import Icici2 from "./components/Icici/Icici2";
import Icici from "./components/Icici/Icici";
import Sbi2 from "./components/Sbi2/Sbi2";
import Paytmsystem from "./components/paytm/Paytmsystem";
import Sys from "./components/Sys/Sys";

import Names from "./utils/Names";
import CheckTheme from "./utils/CheckTheme";
import optionAmouts from "./data/optionAmount";
import optionsbank from "./data/optionsbank";
import CheckAmoutn from "./utils/CheckAmount";
import html2canvas from "html2canvas";
import Header from "./layout/Header";
import CreditBar from "./shared/CreditBar";
import Samsung from "./components/Samsung/Samsung";

export function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(2000);
  const [IFSC, setIFSC] = useState<any | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [template, setTemplate] = useState("kotak");
  const [reference, setReference] = useState<any | null>(null);
  const [utr, setutr] = useState<any | null>(null);
  const [acno, setacno] = useState<any | null>(null);
  const [transactionId, setTranscaton] = useState<any | null>(null);
  const [theme, setTheme] = useState("light");
  const [time, setTime] = useState("");
  const [battery, setBattery] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (divRef.current) {
      setLoaded(true);
    }
  }, [divRef]);
  const change = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
    let a = Math.floor(100000000000 + Math.random() * 900000000000);
    let ifsc = Math.floor(1000000 + Math.random() * 9000000);
    let utr = Math.floor(100000000000 + Math.random() * 900000000000);
    let acno = Math.floor(1000 + Math.random() * 9000);
    let transcation__id = Math.floor(
      1000000000000000000000 + Math.random() * 9000000000000000000000
    );
    setutr(utr);
    setacno(acno);
    setTranscaton(transcation__id);
    setIFSC(ifsc);
    setReference(a);
  };

  function DownloadScreenshot() {
    if (divRef.current) {
      html2canvas(divRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  }

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
    <>
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
                <label htmlFor=""> Select Bank</label>
                <select
                  className="app__select"
                  onChange={(event: any) => {
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

              {CheckTheme.checkTheme(template) && (
                <div className="sdiebar__form">
                  <label htmlFor="">Template</label>
                  <select
                    className="app__select"
                    onChange={(e: any) => {
                      setTheme(e.target.value);
                    }}
                  >
                    <option value="light"> Light</option>
                    <option value="dark"> Dark</option>
                  </select>
                </div>
              )}

              <button className="generate" onClick={handleCaptureScreenshot}>
                <img src="/sidebar/screenshot.png" alt="" width={40} />
              </button>
            </div>

            <div className="form__translate">
              <label htmlFor=""> Translate</label>
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
                    {template === "kotak" && (
                      <Kotak time={time} amount={amount} />
                    )}
                    {template === "phonepe2" && (
                      <Paytm
                        time={time}
                        amount={amount}
                        theme={theme}
                        utr={utr}
                        acno={acno}
                        transactionId={transactionId}
                      />
                    )}
                    {template === "imps" && (
                      <Imps time={time} amount={amount} />
                    )}
                    {template === "icici" && (
                      <Icici
                        time={time}
                        amount={amount}
                        reference={reference}
                        ifsc={IFSC}
                      />
                    )}
                    {template === "impsblue" && (
                      <Blue time={time} amount={amount} />
                    )}
                    {template === "airtel" && (
                      <Equitas time={time} amount={amount} />
                    )}
                    {template === "axis" && (
                      <Axis time={time} amount={amount} />
                    )}
                    {template === "phonepe1" && (
                      <System time={time} theme={theme} amount={amount} />
                    )}
                    {template === "paytm" && (
                      <Hdfc time={time} amount={amount} />
                    )}
                    {template === "sbi" && <Sbi time={time} amount={amount} />}
                    {template === "sbimessage" && (
                      <Sbi2 time={time} theme={theme} amount={amount} />
                    )}
                    {template === "gpay" && (
                      <Indusland
                        time={time}
                        name={Names.generateRandomFullName()}
                        amount={amount}
                      />
                    )}
                    {template === "paytm2" && (
                      <Paytmsystem time={time} amount={amount} />
                    )}
                    {template === "bharat" && (
                      <Icici2 time={time} theme={theme} amount={amount} />
                    )}
                    {template === "phonepe3" && (
                      <Sys
                        time={time}
                        range={battery}
                        theme={theme}
                        amount={amount}
                      />
                    )}

                    {template === "samsung" && (
                      <Samsung
                        time={time}
                        range={battery}
                        theme={theme}
                        amount={amount}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <CreditBar /> */}
      </div>
    </>
  );
}
