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
  characterUsedCount: 0
};

var character = {
  lowercases: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercases: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numerics: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialCharacters: ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "="],
  isLowercase: false,
  isUppercase: false,
  isNumeric: false,
  isSpecialCharacter: false,
};

function start() {
    getUserInput();
    fillRandomCharactersNeededForPassword();
    generatePassword();
    writePasswordToPasswordInput()
}

function getUserInput()
{
  getPasswordLengthFromUser();
  storeTheCharacterTypesSelectedByUserAsArray()

  function getPasswordLengthFromUser() {
    password.length = prompt('Please enter the lenght of the password, between 8 and 128 characters.');
  
    // validates the password length 
    if (password.length >= password.minCharacter && password.length <= password.maxCharacter) {
      getCharacterRequirementsFromUser()
    } else {
      alert('ERROR: "Please choose a number betwen 8 and 128!"')
      getPasswordLengthFromUser();
    }
  }

  function getCharacterRequirementsFromUser() {
    character.isLowercase = confirm('Would you like lowercase letters?');
    character.isUppercase = confirm('Would you like uppercase letters?');
    character.isNumeric = confirm('Would you like numbers?');
    character.isSpecialCharacter = confirm('Would you like special characters?');
  
    // validates that the user chooses atleast 1 character type
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

function fillRandomCharactersNeededForPassword() { 
  for (var i = 0; i < password.length; i++) {
    checkForCharacterTypes();
  }
}

function checkForCharacterTypes() {
  var char = findRandomCharType();

  // validates that each selected character type is used atleast once in the password output
  if (password.characterUsedCount < password.characterResults.length) {
    if (char === "lowercase" && !password.islowercaseUsed)
    {
      password.passwordArray.push(findRandomChar(character.lowercases));
      password.islowercaseUsed = true;
      password.characterUsedCount++;
    } else if (char === "uppercase" && !password.isUppercaseUsed) {
      password.passwordArray.push(findRandomChar(character.uppercases));
      password.isUppercaseUsed = true;
      password.characterUsedCount++;
    } else if (char === "numeric" && !password.isNumericUsed) {
      password.passwordArray.push(findRandomChar(character.numerics));
      password.isNumericUsed = true;
      password.characterUsedCount++;
    } else if (char === "special" && !password.isSpecialCharacterUsed) {
      password.passwordArray.push(findRandomChar(character.specialCharacters));
      password.isSpecialCharacterUsed = true;
      password.characterUsedCount++;
    } else {
      checkForCharacterTypes();
    }
  } else {
    resetIsUsedBooleans();
  } 
}

function findRandomCharType() {
  var result = Math.floor(Math.random() * password.characterResults.length);
  return password.characterResults[result];
}

function findRandomChar(arr) {
  var result = Math.floor(Math.random() * arr.length);
  return arr[result];
}

function resetIsUsedBooleans() {
  password.islowercaseUsed = false;
  password.isUppercaseUsed = false;
  password.isNumericUsed = false;
  password.isSpecialCharacterUsed = false;
  password.characterUsedCount = 0;
  checkForCharacterTypes();
}

function convertThePasswordCharacterArrayToAString() {
  return passwordString = password.passwordArray.join("");
}

function generatePassword() {
   return convertThePasswordCharacterArrayToAString();
}

function writePasswordToPasswordInput() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', start);