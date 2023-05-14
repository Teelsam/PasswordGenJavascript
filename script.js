// Assignment Code
var generateBtn = document.querySelector("#generate");
var prompt = window.prompt("Hello???");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword(){
    var length = window.prompt ("How long do you want the password?");
    var upChoice = window.prompt("UpperCase?");
    var lowChoice = window.prompt("LowerCase?");
    var numChoice = window.prompt("numbers?");
    var symbolChoice = window.prompt("symbols?");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase= "abcdefghijklmnopqrstuvwxyz";
    var number = "123456789";
    var symbol = "@#$%^&*()";
    var myPass = "";
     //picks a random number which then matches a value in the string of that variable
    // myPass += upperCase[Math.floor(Math.random()*upperCase.length)];
    // myPass += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // myPass += number[Math.floor(Math.random()*number.length)];
    // myPass += symbol[Math.floor(Math.random()*symbol.length)];

    if (length >= 8 && length <= 128 && !upChoice && !lowChoice && !numChoice && !symbolChoice){
      //gens the simplest password
      for(var i =0; i>length;i++){
        myPass += lowerCase[Math.floor(Math.random()*lowerCase.length)];
      }
    }
    else if (length >= 8 && length <= 128 && upChoice && !lowChoice && !numChoice && !symbolChoice){
      //gens an all uppercase pass
    for(var i =0; i>length;i++){
      myPass += upperCase[Math.floor(Math.random()*upperCase.length)];
    }
  }
    else if (length >= 8 && length <= 128 && upChoice && lowChoice && !numChoice && !symbolChoice){
      //gens an upper and lower case pass
      var uppAndLow = upperCase + lowerCase;
      for(var i =0; i>length;i++){
        myPass += uppAndLow[Math.floor(Math.random()*uppAndLow.length)];
      }
    }
    else if (length >= 8 && length <= 128 && upChoice && lowChoice && numChoice && !symbolChoice){
      // gens an upper lower and number pass
      var uppLowNum = upperCase + lowerCase + number;
      for(var i =0; i>length;i++){
        myPass += uppLowNum[Math.floor(Math.random()*uppLowNum.length)];
      }
    }
    else if (length >= 8 && length <= 128 && upChoice && lowChoice && numChoice && symbolChoice){
      //gens a pass with all options
      var allOpt = uppLowNum + symbol;
      for(var i =0; i>length;i++){
        myPass += allOpt[Math.floor(Math.random()*allOpt.length)];
      }

  }
  else {}

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
