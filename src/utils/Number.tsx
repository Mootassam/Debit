class Number {
  static referenceKotakNumber() {
    const randomNum = Math.floor(Math.random() * 90000000) + 10000000;
    return randomNum;
  }

  static generateRanodom9Number() {
    return Math.floor(Math.random() * 900000000) + 100000000;
  }

  static gnerateRandom8Number() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }
  static generateRanodom2Number() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }

  static generateRanodom0Number() {
    return Math.floor(Math.random() * 90) + 10;
  }


  static generateRanodomNumber() {
    return Math.floor(Math.random() * 900000000) + 100000000;
  }

  static generateRandom5Number() {
    return Math.floor(Math.random() * 10000) + 10000;
  }
  static generate8randomNumer() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }

  static generateRandom4Number() {
    return Math.floor(Math.random() * 1000) + 1000;
  }

  static generate5RanodmNumber() {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  static ifscNumber() {
    const random = Math.floor(Math.random() * 9000000 + 1000000);
    return random;
  }

  static referenceNumber() {
    const random = Math.floor(Math.random() * 90000000000 + 10000000000);
    return random;
  }

  static referenceIcici() {
    const random = Math.floor(Math.random() * 900000000000 + 100000000000);
    return random;
  }
  static debit2numbere() {
    const random = Math.floor(Math.random() * 90 + 10);
    return random;
  }

  static rrnNumber() {
    const random = Math.floor(Math.random() * 90000000000 + 10000000000);
    return random;
  }

  static rrnNumberAxis() {
    const random = Math.floor(Math.random() * 90000000 + 10000000);
    return random;
  }
  static phonepe2() {
    const random = Math.floor(Math.random() * 90000000 + 10000000);
    return random;
  }
  static phonepe0() {
    const random = Math.floor(Math.random() * 90000000 + 10000000);
    return random;
  }

  static accountNumberKotak() {
    const random = Math.floor(Math.random() * 90000000000 + 10000000000);
    return random;
  }

  static debitFrom() {
    const debitFrom = Math.floor(Math.random() * 9000 + 1000);
    return debitFrom;
  }

  static Impsblue() {
    const number = Math.floor(Math.random() * 9000000000 + 1000000000);
    return number;
  }

  static balance() {
    const num = Math.floor(Math.random() * 900000 + 100000);
    const staticnum = 1 * num;
    const formattedNumber = staticnum
      .toLocaleString("en-IN", { style: "currency", currency: "INR" })
      .replace(".00", "")
      .replace("₹", "₹ ");
    return formattedNumber;
  }

  static generateRandomString = () => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    result += Math.floor(1000 + Math.random() * 9000);
    return result;
  };

  static convertToWords = (number) => {
    const words = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tensWords = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];
    const crore = Math.floor(number / 10000000);
    const lakh = Math.floor((number % 10000000) / 100000);
    const thousand = Math.floor((number % 100000) / 1000);
    const hundreds = Math.floor((number % 1000) / 100);
    const tens = Math.floor((number % 100) / 10);
    const ones = Math.floor(number % 10);

    let result = "";
    if (crore > 0) {
      result += this.convertToWords(crore) + " Crore ";
    }
    if (lakh > 0) {
      result += this.convertToWords(lakh) + " Lakh ";
    }
    if (thousand > 0) {
      result += this.convertToWords(thousand) + " Thousand ";
    }
    if (hundreds > 0) {
      result += words[hundreds] + " Hundred ";
    }
    if (tens === 1) {
      result += words[10 + ones] + " ";
    } else {
      if (tens > 0) {
        result += tensWords[tens] + " ";
      }
      if (ones > 0) {
        result += words[ones] + " ";
      }
    }
    return result;
  };

  static getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }

  static generateWhatsApp(arr) {
    let whatsApp = Math.floor(Math.random() * arr.length);
    const item = arr[whatsApp];
    return item;
  }

  static generate2Number(Number) {
    return Number % 100;
  }
}

export default Number;
