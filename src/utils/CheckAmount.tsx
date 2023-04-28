class CheckAmoutn {
  static checkAmount(amount, theme) {
    if (
      ["phonepe1", "phonepe2", "phonepe3", "gpay"].includes(theme) &&
      amount >= 59000
    ) {
      return false;
    }
    if (theme ==="paytm" && amount >= 105000) {
      return false;
    }

    return true;
  }
}

export default CheckAmoutn;
