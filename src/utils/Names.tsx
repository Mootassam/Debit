class Names {
  // Function to generate a random Indian full name
  static generateRandomFullName() {
    const firstNames = [
      "Aarav",
      "Aarya",
      "Advait",
      "Arya",
      "Aryan",
      "Asha",
      "Ayush",
      "Dhruv",
      "Divya",
      "Harsh",
      "Ishaan",
      "Kavya",
      "Manav",
      "Navya",
      "Raj",
      "Riya",
      "Rohan",
      "Sahil",
      "Samar",
      "Sanvi",
      "Shanaya",
      "Shreya",
      "Siddharth",
      "Tanvi",
      "Vivaan",
      "Yuvraj",
    ];
    const lastNames = [
      "Agarwal",
      "Bhatnagar",
      "Chopra",
      "Desai",
      "Gupta",
      "Jain",
      "Kapoor",
      "Khan",
      "Kumar",
      "Mehta",
      "Patel",
      "Rao",
      "Shah",
      "Sharma",
      "Singh",
      "Verma",
    ];

    const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
    const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
    const fullName = `${firstNames[randomFirstNameIndex]} ${lastNames[randomLastNameIndex]}`;
    return fullName;
  }

  static remarks = () => {
    const listRemarks = ["Sachin", "Prepaid tasks", "done", "payed", "Aryan"];
    const randomNote = Math.floor(Math.random() * listRemarks.length); 
    return listRemarks[randomNote]


  };

  static firstCaracter(string) {
    const firstname = string.charAt(0);
    return firstname;
  }

  static yesbanktext = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < 19; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  static generateRanodomNumber() {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  static yesbanks = () => {
    const characters = "0123456789abcdef";
    let variablePart = "";

    for (let i = 0; i < 6; i++) {
      // Generating 6 characters for the variable part
      const randomIndex = Math.floor(Math.random() * characters.length);
      variablePart += characters.charAt(randomIndex);
    }

    return `10a${variablePart}${this.generateRanodomNumber()}`;
  };

  static generateSamsungText() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    let textBeforeAt = "";
    for (let i = 0; i < 3; i++) {
      const randomChar = numbers[Math.floor(Math.random() * numbers.length)];
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      textBeforeAt += randomChar + randomNumber;
    }

    let textAfterAt = "";
    for (let i = 0; i < 3; i++) {
      const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
      textAfterAt += randomChar;
    }

    return textBeforeAt + "@" + textAfterAt;
  }
  static generateRandomText() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomText = "";

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    }

    return randomText;
  }
}

export default Names;
