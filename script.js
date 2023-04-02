var passwordLengthMinCharacters = 8;
var passwordLengthMaxCharacters = 128;

var lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerics = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ;
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "="];

var passwordLength = 0;
var isLowercase = false;
var isUppercase = false;
var isNumeric = false;
var isSpecialCharacter = false;

var characterResults = [];
var myPassword = [];

function start() {
    getUserInput();
    storePasswordCredentials();
    findRandomCharacter();
    alert(myPassword);
}

start();

function getUserInput() {
  passwordLength = prompt("Please enter the lenght of the password, between 8 and 128 characters.");

  if (passwordLength >= 8 && passwordLength <= 128) {
    isLowercase = confirm("Would you like lowercase letter?");
  } 
  else {
    passwordLength = prompt("Please enter the lenght of the password, between 8 and 128 characters.")
  }

  isUppercase = confirm("Would you like uppercase letters?");
  isNumeric = confirm("Would you like numbers?");
  isSpecialCharacter = confirm("Would you like special characters?");
}

function storePasswordCredentials() {
  if (isLowercase) {
    characterResults.push("lowercase");
  }

  if (isUppercase) {
    characterResults.push("uppercase");
  }

  if (isNumeric) {
    characterResults.push("numeric");
  }

  if (isSpecialCharacter) {
    characterResults.push("special");
  }
}

function pickCharacter() {
  var result = Math.floor(Math.random() * characterResults.length);
  characterResults[result];
  return characterResults[result];
}

function findRandomCharacter() {
  for (var i = 0; i < passwordLength; i++) {
    var character = pickCharacter();

    if (character === "lowercase") {
      console.log("lowercase");
      myPassword.push(findRandomLowercase())
    }
    else if (character === "uppercase") {
      console.log("uppercase");
      myPassword.push(findRandomUppercase())
    }
    else if (character === "numeric") {
      console.log("numeric");
      myPassword.push(findRandomNumeric())
    }
    else if (character === "special") {
      console.log("special");
      myPassword.push(findRandomSpecialCharacter())
    }
  }
}

function findRandomLowercase() {
  var result = Math.floor(Math.random() * lowercases.length);
  return lowercases[result];
}

function findRandomUppercase() {
  var result = Math.floor(Math.random() * uppercases.length);
  return uppercases[result];
}

function findRandomNumeric() {
  var result = Math.floor(Math.random() * numerics.length);
  return numerics[result];
}

function findRandomSpecialCharacter() {
  var result = Math.floor(Math.random() * specialCharacters.length);
  return specialCharacters[result];
}

////////////////////////////////////////////////////////////////////

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

