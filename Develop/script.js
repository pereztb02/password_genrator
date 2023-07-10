// Assignment code here
//var password=document.getElementById("password");  --->ignore this
const specialCharacters = "!@#$%^&*()";
// Get references to the #generate element
var generateBtn = document.getElementById('generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
/* This line of code made it work but did not make any window prompts 
function writePassword() {
  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";

  for (var index = 0; index < passwordLength; index++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber +1);
    
  }
  document.getElementById("password").value = password;

} */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Password Length.");
  var numbers = confirm("Do you want numbers?");
  var lowerCase = confirm("Do you want lower case letters?");
  var upperCase = confirm("Do you want upper case letters?");
  var specChars = confirm("Do you want special characters?");

  // this is a minimum count for the password characters
  var minCount = 0;

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minNumbers = "";
  var minLowerCase = "";
  var minUpperCase = "";
  var minSpecChars = "";

  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

  };


    
  
  // Checks to make sure user selected ok for all and uses empty minimums from line 45 to 48

  if (numbers === true) {
    minNumbers = functionArray.getNumbers();
    minCount++;

  }

  if (lowerCase === true) {
    minLowerCase = functionArray.getLowerCases();
    minCount++;

  }

  if (upperCase === true) {
    minUpperCase = functionArray.getUpperCases();
    minCount++;

  }

  if (specChars === true) {
    minSpecChars = functionArray.getSpecialCharacters();
    minCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += functionArray[randomNumberPicked]();

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minNumbers;
  randomPasswordGenerated += minLowerCase;
  randomPasswordGenerated += minUpperCase;
  randomPasswordGenerated += minSpecChars;


  return randomPasswordGenerated;

}
