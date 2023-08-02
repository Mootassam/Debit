// import React from "react";
import ExtractItem from "../../utils/ExtractItem";
import wifi from "./Wifi";
// import bluetooth from "./Bluetooth";
function Right() {
  let wifis = ExtractItem.getItem(wifi);
  let data = ExtractItem.convertToArray(wifis);
  return <div>{data}</div>;
}

export default Right;
