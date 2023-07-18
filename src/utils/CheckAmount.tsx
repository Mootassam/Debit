class CheckAmoutn {
  static checkAmount(amount, theme) {
    if (
      ["samsung"].includes(theme) &&
      amount >= 15000
    ) {
      return false;
    }
    if (
      ["phonepe1", "phonepe2", "phonepe3", "gpay","samsung"].includes(theme) &&
      amount >= 59000
    ) {
      return false;
    }
    if (theme === "paytm" && amount >= 105000) {
      return false;
    }

    return true;
  }
}

export default CheckAmoutn;
