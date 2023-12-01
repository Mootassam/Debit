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
import Sys from "./Sys/Sys";
import Names from "../../utils/Names";
import CheckTheme from "../../utils/CheckTheme";
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

import Number from "../../utils/Number";
import list from "../../data/bank";
import { useSelector } from "react-redux";
import { debitDetaill } from "../../store/debit/debitSelectors";

import Green from "./Green/Green";

function Debit() {
  const [amount, setAmount] = useState(0);
  const [IFSC, setIFSC] = useState<any | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const creditRef = useRef<HTMLDivElement>(null);
  const [template, setTemplate] = useState("Fi");
  const [reference, setReference] = useState<any | null>(null);
  const [utr, setutr] = useState<any | null>(null);
  const [transactionId, setTransaction] = useState<any | null>(null);
  const [theme, setTheme] = useState("light");
  const [loaded, setLoaded] = useState(false);
  const [upi] = useState(3335);
  const [account, setAccount] = useState(0);
  const [from, setfrom] = useState(Number.getRandomItem(list));
  const dataDebit = useSelector(debitDetaill);

  const change = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
    let a = Math.floor(100000000000 + Math.random() * 900000000000);
    let ifsc = Math.floor(1000000 + Math.random() * 9000000);
    let utr = Math.floor(100000000000 + Math.random() * 900000000000);

    setAccount(Number.generateRandom4Number());
    setutr(utr);
    setTransaction(`${upi}${Number.phonepe0()}`);
    setIFSC(ifsc);
    setReference(a);
  };

  useEffect(() => {
    if (divRef.current) {
      setLoaded(true);
    }
    setfrom(Number.getRandomItem(list));
  }, [upi, amount, template, transactionId]);

  useEffect(() => {
    if (divRef.current) {
      setLoaded(true);
    }
    if (dataDebit?.bank) {
      setTemplate(dataDebit.template);
      setAmount(dataDebit.amount);
      setAccount(dataDebit.account);
      setTransaction(dataDebit.transaction);
    }
  }, [divRef, dataDebit]);

  // const generate = async () => {
  //   let data;
  //   [
  //     "phonepe1",
  //     "phonepe2",
  //     "paytm",
  //     "bharat",
  //     "gpay",
  //     "phonepe3",
  //     "samsung",
  //   ].includes(template)
  //     ? (data = {
  //         amount: amount,
  //         upi: upi,
  //         template: template,
  //         bank: from.name,
  //         transaction: transactionId,
  //         account: account,
  //         time: Dates.currentTime(),
  //         creditTime: "",
  //       })
  //     : (data = {
  //         amount: amount,
  //         upi: upi,
  //         template: template,
  //         bank: template,
  //         transaction: transactionId,
  //         account: account,
  //         time: Dates.currentTime(),
  //         creditTime: "",
  //       });

  //   try {
  //     dispatch(saveDebit(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };



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

  function creditScreenshot() {
    if (creditRef.current) {
      html2canvas(creditRef.current, {
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
              <label htmlFor=""> Write Amount</label>
              <input
                name="amount"
                id=""
                className="app__select"
                onChange={change}
              />
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

            <button className="generate" onClick={handleCaptureScreenshot}>
              <img src="/sidebar/screenshot.png" alt="" width={40} />
            </button>
          </div>

          <div className="form__translate">
            <label htmlFor=""> Credit Tools </label>
            <div className="translate__">
              <img
                src="/sidebar/usa.png"
                alt=""
                width={80}
                onClick={() => creditScreenshot()}
              />
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
                    <Kotak
                      amount={amount}
                      upi={upi}
                      transactionId={transactionId}
                      account={account}
                    />
                  )}
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
                  {template === "imps" && (
                    <Imps
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "icici" && (
                    <Icici
                      amount={amount}
                      reference={reference}
                      ifsc={IFSC}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "impsblue" && (
                    <Blue
                      amount={amount}
                      upi={upi}
                      transactionId={transactionId}
                      account={account}
                    />
                  )}
                  {template === "airtel" && (
                    <Equitas
                      amount={amount}
                      upi={upi}
                      transactionId={transactionId}
                      account={account}
                    />
                  )}
                  {template === "axis" && (
                    <Axis
                      amount={amount}
                      upi={upi}
                      transactionId={transactionId}
                      account={account}
                    />
                  )}
                  {template === "phonepe1" && (
                    <System
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "paytm" && (
                    <Hdfc
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "sbi" && (
                    <Sbi
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "sbimessage" && (
                    <Sbi2
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "gpay" && (
                    <Indusland
                      name={Names.generateRandomFullName()}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}

                  {template === "bharat" && (
                    <Icici2
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "phonepe3" && (
                    <Sys
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "samsung" && (
                    <Samsung
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "idfc" && (
                    <Idfc
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "grey" && (
                    <Grey
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "Fi" && (
                    <Fi
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}

                  {template === "redKotak" && (
                    <RedKotak
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}

                  {template === "Yes" && (
                    <Yes
                      amount={amount}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}

                  {/* {template === "PTM" && (
                    <PTM
                      amount={amount}
                      account={account}
                      transactionId={transactionId}
                      from={from}
                    />
                  )} */}

                  {template === "Green" && (
                    <Green
                      amount={amount}
                      account={account}
                      transactionId={transactionId}
                      from={from}
                    />
                  )}
                </>
              )}
            </div>

            {/* <div className="credit__screenshot" ref={creditRef}>
              <CreditIcici
                amount={amount}
                account={account}
                transactionId={transactionId}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Debit;
