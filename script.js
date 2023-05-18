// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  function generatePassword() {
    var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var symbolList = ["@", "%", "^", "&", "*"];
    var possiblePassChars = [];
    var myPass = [];// this is the array which will hold the password 
    //Questioning begins
    var length = prompt("How long do you want the password?");
    var lengthAsNum = parseInt(length);
    if (Number.isNaN(lengthAsNum)) { // error if entered character isnt a number
      alert("Must be a number");
      return;
    }
    if (lengthAsNum < 8 || lengthAsNum > 128) { // error if number entered exceeds limits
      alert("Password must be  between 8 and 128 char long");
    }
    for (var x = 0; x < 1; x++) {
      var uppercaseChoice = confirm("UpperCase Characters?");//Asks if they want uppercase chars
      var lowChoice = confirm("LowerCase Characters?"); //Asks if they want lowercase chars
      var numChoice = confirm("numbers?");//Asks if they want numbers
      var symbolChoice = confirm("symbols?"); //Asks if they want symbols
    };

    if (uppercaseChoice === false && lowChoice === false && numChoice === false && symbolChoice === false) { // errors if no char type is chosen
      alert("Character type must be chosen");
    }
    //Character options FOR UPPER COMBO
    if (uppercaseChoice == true && lowChoice === false && numChoice === false && symbolChoice === false) { // just Uppers
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * upperCaseList.length);
        possiblePassChars[i] = upperCaseList[randomIndex];
        console.log(possiblePassChars[i]);
      }
    }
    else if (uppercaseChoice == true && lowChoice == true && !numChoice && !symbolChoice) {// uppers and lowers
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * upperCaseList.length);
        possiblePassChars[i] = upperCaseList[randomIndex];

        console.log(possiblePassChars[i]);
      }
    }
    else if (uppercaseChoice == true && !lowChoice && numChoice == true && !symbolChoice) {// uppers and numbers
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * upperCaseList.length);
        possiblePassChars[i] = upperCaseList[randomIndex];
        console.log(myPass[i]);
      }
    }
    else if (uppercaseChoice == true && !lowChoice && !numChoice && symbolChoice == true) { // uppers and symbols
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * upperCaseList.length);
        possiblePassChars[i] = upperCaseList[randomIndex];
        console.log(myPass[i]);
      }
    }
    else if (uppercaseChoice == true && lowChoice == true && numChoice == true && !symbolChoice) { // uppers lowers and numbers
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * upperCaseList.length);
        possiblePassChars[i] = upperCaseList[randomIndex];
      }
    }
    // ALL THE LOW COMBO
    else if (lowChoice == true && !uppercaseChoice && !numChoice && !symbolChoice) {// just lowers
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * lowerCaseList.length);
        possiblePassChars[i] = lowerCaseList[randomIndex];
        console.log(myPass[i]);
      }
    }
    else if (lowChoice == true && !uppercaseChoice && numChoice == true && !symbolChoice) { //  lowers and numbers
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * lowerCaseList.length);
        possiblePassChars[i] = lowerCaseList[randomIndex];
        console.log(myPass[i]);
      }
    }
    else if (lowChoice == true && !uppercaseChoice && !numChoice && symbolChoice == true) { // lowers and symbols 
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * lowerCaseList.length);
        possiblePassChars[i] = lowerCaseList[randomIndex];

      }
    }
    else if (lowChoice == true && !uppercaseChoice && numChoice == true && symbolChoice == true) {// lowers numbers symbols 
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * lowerCaseList.length);
        possiblePassChars[i] = lowerCaseList[randomIndex];

      }
    }
    // NUM COMBOS
    else if (numChoice == true && !lowChoice && !uppercaseChoice && !symbolChoice) {// just numbers
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * numberList.length);
        possiblePassChars[i] = numberList[randomIndex];

      }
    }
    else if (numChoice == true && !lowChoice && !uppercaseChoice && symbolChoice == true) { // numbers and symbols 
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * numberList.length);
        possiblePassChars[i] = numberList[randomIndex];

      }
    }
    // SYMBOL COMBO
    else if (symbolChoice == true && !lowChoice && !numChoice && !uppcaseChoice) {// just symbols 
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * symbolList.length);
        possiblePassChars[i] = symbolList[randomIndex];

      }
    }
    else {
      var allList = upperCaseList + lowerCaseList + numberList + symbolList;
      for (var i = 0; i < lengthAsNum.length; i++) {
        var randomIndex = Math.floor(Math.random() * allList.length);
        possiblePassChars[i] = allList[randomIndex];
        console.log(possiblePassChars[i]);
      }
    }
    for (var i = 0; i < possiblePassChars.length; i++) {
      var randomIndex = Math.floor(Math.random() * possiblePassChars.length);
      myPass[i] = possiblePassChars[randomIndex];
    }

    return myPass.join("");

  }
  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
