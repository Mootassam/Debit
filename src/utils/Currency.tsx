class Currency {
  static India(number?) {
    var formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
    var formattedAmount = formatter.format(number);
    return formattedAmount;
  }

  static IndiaWithoutCurrency(number?) {
    const staticnum = 1 * number;
    const formattedNumber = staticnum
      .toLocaleString("en-IN", { style: "currency", currency: "INR" })
      .replace("₹", "")
      .replace(".00", "");
    return formattedNumber;
  }

  static IndiaWithoutZero(number?) {
    const staticnum = 1 * number;
    const formattedNumber = staticnum
      .toLocaleString("en-IN", { style: "currency", currency: "INR" })
      .replace(".00", "")
      .replace("₹", "₹ ");
    return formattedNumber;
  }

  static IndiaWithoutyes(number?) {
    const staticnum = 1 * number;
    const formattedNumber = staticnum
      .toLocaleString("en-IN", { style: "currency", currency: "INR" })
      
      .replace("₹", "₹ ");
    return formattedNumber;
  }

  static IndiaCurrency(number?) {
    const staticnum = 1 * number;
    const formattedNumber = staticnum
      .toLocaleString("en-IN", { style: "currency", currency: "INR" })
      .replace(".00", "");
    return formattedNumber;
  }

  static IndiaImps(number?) {
    const num = 1 * number;
    const formattedNumber = num
      .toLocaleString("en-IN", { style: "currency", currency: "INR" })
      .replace(".00", "")
      .replace("₹", "");
    return formattedNumber;
  }

}

export default Currency;
