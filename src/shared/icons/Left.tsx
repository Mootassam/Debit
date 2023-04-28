import React from "react";
import whatsApp from "./whatsApp";
import telegram from "./Telegram";
import alarm from "./Alarm";
import instagram from "./Instagram";
import Message from "./Message";
import facebook from "./Facebook";
import ExtractItem from "../../utils/ExtractItem";
import gmail from "./Gmail";
import twitter from "./Twitter";

function Left() {
  let whats = ExtractItem.getItem(whatsApp);
  let teleg = ExtractItem.getItem(telegram);
  let instag = ExtractItem.getItem(instagram);
  let message = ExtractItem.getItem(Message);
  let face = ExtractItem.getItem(facebook);
  let twitt = ExtractItem.getItem(twitter);
  let data = ExtractItem.convertToArray(
    whats,
    teleg,
    instag,
    message,
    face,
    twitt
  );

  return <>{data}</>;
}

export default Left;
