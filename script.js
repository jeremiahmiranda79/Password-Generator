var password = {
  minCharacter: 8,
  maxCharacter: 128,
  length: 0,

  characterResults: [],

  passwordArray: [],

  islowercaseUsed: false,
  isUppercaseUsed: false,
  isNumericUsed: false,
  isSpecialCharacterUsed: false,

  isUsedCounter: 0
};

var character = {
  lowercases: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercases: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numerics: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialCharacters: ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "="],
  isLowercase: false,
  isUppercase: false,
  isNumeric: false,
  isSpecialCharacter: false
};

start();

function start() {
    getUserInput();

    fillRandomCharactersNeededForPassword();

    generatePassword();
    showGeneratedPassword()
}

function getUserInput()
{
  getPasswordLengthFromUser();
  storeTheCharacterTypesSelectedByUserAsArray()

  function getPasswordLengthFromUser() {
    password.length = prompt('Please enter the lenght of the password, between 8 and 128 characters.');
  
    if (password.length >= password.minCharacter && password.length <= password.maxCharacter) {
      getCharacterRequirementsFromUser()
    } else {
      alert('ERROR: "Please choose a number betwen 8 and 128!"')
      getPasswordLengthFromUser();
    }
  }

  function getCharacterRequirementsFromUser() {
    character.isLowercase = confirm('Would you like lowercase letter?');
    character.isUppercase = confirm('Would you like uppercase letters?');
    character.isNumeric = confirm('Would you like numbers?');
    character.isSpecialCharacter = confirm('Would you like special characters?');
  
    // validation that user chooses 1 character atleast
    if (!character.isLowercase && !character.isUppercase && !character.isNumeric && !character.isSpecialCharacter) {
      alert('ERROR: "Please choose at least 1 character type!"')
      getCharacterRequirementsFromUser();
    }
  }

  function storeTheCharacterTypesSelectedByUserAsArray() {
    if (character.isLowercase) {
      password.characterResults.push("lowercase");
    }
  
    if (character.isUppercase) {
      password.characterResults.push("uppercase");
    }
  
    if (character.isNumeric) {
      password.characterResults.push("numeric");
    }
  
    if (character.isSpecialCharacter) {
      password.characterResults.push("special");
    }
  }
}

//TODO make sure the different chars are used atleast 1x
function fillRandomCharactersNeededForPassword() { 
  for (var i = 0; i < password.length; i++) {
    // Validate that we use all characers
    
    checkForCharacterTypes();

    // if (password.isUsedCounter >= password.characterResults.lenght) {
    //   resetIsUsedBooleans();
    // }
    // else {
    //   checkForCharacterTypes();
    // }
  }
}

var count = 0;

function checkForCharacterTypes() {
  var char = findTheCharactersForThePassword();
  count++;
  console.log(count);

  if (!password.islowercaseUsed) {
    if (char === "lowercase") {
      password.passwordArray.push(findRandomChar(character.lowercases));
      password.islowercaseUsed = true;
      password.isUsedCounter++
      console.log("lower")
      console.log(password.isUsedCounter);
    }
  } else if (!password.isUppercaseUsed) {
    if (char === "uppercase") {
      password.passwordArray.push(findRandomChar(character.uppercases));
      password.isUppercaseUsed = true;
      password.isUsedCounter++;
      console.log("upper");
      console.log(password.isUsedCounter);
    }
    
  } else if (!password.isNumericUsed ) {
    if (char === "numeric") {
      password.passwordArray.push(findRandomChar(character.numerics));
      password.isNumericUsed = true;
      password.isUsedCounter++;
      console.log("numeric");
      console.log(password.isUsedCounter);
    }
    
  } else if (!password.isSpecialCharacterUsed ) { 
    if (char === "special") {
      password.passwordArray.push(findRandomChar(character.specialCharacters));
      password.isSpecialCharacterUsed = true;
      password.isUsedCounter++;
      console.log("special");
      console.log(password.isUsedCounter);
    }
  }
  else {
    resetIsUsedBooleans();
  }
}

function findTheCharactersForThePassword() {
  var result = Math.floor(Math.random() * password.characterResults.length);
  return password.characterResults[result];
}

function findRandomChar(arr) {
  var result = Math.floor(Math.random() * arr.length);
  return arr[result];
}

function resetIsUsedBooleans() {
  console.log("reset");
  for (var i = 0; i < password.characterResults.length; i++) {
    password.characterResults[i] = false;
    console.log(password.characterResults[i]);
  }
}





function convertThePasswordCharacterArrayToAString() {
  return passwordString = password.passwordArray.join("");
}

function generatePassword() {
   return convertThePasswordCharacterArrayToAString();
}

function showGeneratedPassword() {
  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePasswordToPasswordInput);
}

function writePasswordToPasswordInput() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}