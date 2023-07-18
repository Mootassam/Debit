import moment from "moment";

class Dates {
  static dateKotak(time) {
    console.log(time, "time");
    if (time) {
    }

    var currentDate = moment();
    let dateString = currentDate.format("DD MMM YYYY-hh:mm A");
    if (time) {
      let dateString = currentDate.format("DD MMM YYYY-hh:mm A");
    }

    return dateString;
  }

  static date() { 
    const formattedDate = moment().format("YYMMDD");
    return  formattedDate


  }

  static dateEquitas() {
    var currentDate = moment();
    var dateString = currentDate.format("DD MMM YYYY - hh:mm A");
    return dateString;
  }

  static phonePe() {
    const currentDate = moment().format("hh:mm A [on] DD MMM YYYY");
    return currentDate;
  }

  static phonePe3() {
    const currentDate = moment().format("");
  }

  static dateBlue() {
    const currentDate = moment().format("DD MMM YYYY");
    return currentDate;
  }

  static DateImps() {
    const currentDate = moment().format("DD/MM/YYYY");
    return currentDate;
  }

  static timeImps() {
    const currentTime = moment().format("hh:mm A");
    return currentTime;
  }

  static datePhonePe() {
    const date = new Date(); // replace with your own date
    const formattedDate = moment(date).format("hh:mm a [on] DD MMM YYYY");

    return formattedDate;
  }

  static dateshdfc() {
    const date = moment().format("hh:mm A, DD MMM YYYY");
    return date;
  }

  static sbiDate() {
    const date = moment().format("dddd, DD MMM [•] HH:mm");
    return date;
  }

  static sbidatemessage() {
    const date = moment().format("DDMMMYY");
    return date;
  }
  static datehonePe3() {
    const date = moment().format("DD MMM YYYY [at] hh:mm A");
    return date;
  }

  static dateGpay() {
    const date = moment().format("DD MMM YYYY HH:mm");
    return date;
  }

  static dateIcici() {
    const date = moment().format("DD/MM/YYYY HH:mm:ss");
    return date;
  }

  static currentTime() {
    const time = moment().format("hh:mm");
    return time;
  }

  static currentTime2() {
    const time = moment().format("hh:mm A");
    return time;
  }
}

export default Dates;
