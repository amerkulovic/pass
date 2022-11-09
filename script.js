// Assignment Code
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);

let password = [];
let charset = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."],
};

function generatePassword() {
  password = [];
  let input = Number(prompt("How many characters is in your password? (8-128 characters)"));
  if (!input) {
    alert("You need to have a password length.");
  } else if (input < 8 || input > 128) {
    alert("Your password does not meet the criteria.");
  } else {
    let hasLowerCase = confirm("Do you want lower case characters?");
    let hasUpperCase = confirm("Do you want upper case charcaters?");
    let hasNumeric = confirm("Do you want numeric characters?");
    let hasSpecialCharacters = confirm("Do you want special characters?");
    // Has 4 positives
    if (hasLowerCase && hasUpperCase && hasNumeric && hasSpecialCharacters) {
      let choices = charset.lowercase.concat(charset.upperCase, charset.numeric, charset.specialCharacters);
    } //Has 4 negatives
    else if (!hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecialCharacters) {
      alert("You must choose a criteria");
    } // 1 negative & 3 positives
    else if (!hasLowerCase && hasUpperCase && hasNumeric && hasSpecialCharacters) {
      choices = charset.upperCase.concat(charset.numeric, charset.specialCharacters);
    } else if (hasLowerCase && !hasUpperCase && hasNumeric && hasSpecialCharacters) {
      choices = charset.lowercase.concat(charset.numeric, charset.specialCharacters);
    } else if (hasLowerCase && hasUpperCase && !hasNumeric && hasSpecialCharacters) {
      choices = charset.lowercase.concat(charset.upperCase, charset.specialCharacters);
    } else if (hasLowerCase && hasUpperCase && hasNumeric && !hasSpecialCharacters) {
      choices = charset.lowercase.concat(charset.upperCase, charset.numeric);
    }
    //2 negatives and 2 positives
    else if (!hasLowerCase && !hasUpperCase && hasNumeric && hasSpecialCharacters) {
      choices = charset.numeric.concat(charset.specialCharacters);
    } else if (!hasLowerCase && hasUpperCase && !hasNumeric && hasSpecialCharacters) {
      choices = charset.upperCase.concat(charset.specialCharacters);
    } else if (!hasLowerCase && hasUpperCase && hasNumeric && !hasSpecialCharacters) {
      choices = charset.upperCase.concat(charset.numeric);
    } else if (hasLowerCase && !hasUpperCase && !hasNumeric && hasSpecialCharacters) {
      choices = charset.lowercase.concat(charset.specialCharacters);
    } else if (hasLowerCase && !hasUpperCase && hasNumeric && !hasSpecialCharacters) {
      choices = charset.lowercase.concat(charset.numeric);
    } else if (hasLowerCase && hasUpperCase && !hasNumeric && !hasSpecialCharacters) {
      choices = charset.lowercase.concat(charset.upperCase);
    }
    // Has 3 negatives & 1 positive
    else if (hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecialCharacters) {
      choices = charset.lowercase;
    } else if (!hasLowerCase && hasUpperCase && !hasNumeric && !hasSpecialCharacters) {
      choices = charset.upperCase;
    } else if (!hasLowerCase && !hasUpperCase && hasNumeric && !hasSpecialCharacters) {
      choices = charset.numeric;
    } else {
      choices = charset.specialCharacters;
    }

    for (let i = 0; i < input; i++) {
      let finalChoice = choices[Math.floor(Math.random() * choices.length)];
      password.push(finalChoice);
    }
    //Convert to String ???
    let passwordString = password.join("");
    document.querySelector("#password").textContent = passwordString;
  }
}
