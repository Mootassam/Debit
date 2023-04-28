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

  static firstCaracter(string){ 
    const firstname = string.charAt(0); 
    return firstname
  }
}

export default Names;
