// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword(){
    //Prompts look for a way to turn answers to numbers
    var length = window.prompt ("How long do you want the password?");
    var lengthAsNum = parseInt(length);
    var upChoice = window.prompt("UpperCase?","y or n");
    var lowChoice = window.prompt("LowerCase?","y or n");
    var numChoice = window.prompt("numbers?","y or n");
    var symbolChoice = window.prompt("symbols?","y or n");
    //Character options
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

    if (lengthAsNum >= 8 && lengthAsNum <= 128 && upChoice !== "y" && lowChoice !== "y" && numChoice !== "y" && symbolChoice!== "y"){
      //gens the simplest password
      for(var i =0; i>lengthAsNum;i++){
        myPass += lowerCase[Math.floor(Math.random()*lowerCase.length)];
      }
    }
    else if (lengthAsNum >= 8 && lengthAsNum <= 128 && upChoice == "y" && lowChoice !== "y" && numChoice !== "y"  && symbolChoice !== "y"){
      //gens an all uppercase pass
    for(var i =0; i>lengthAsNumh;i++){
      myPass += upperCase[Math.floor(Math.random()*upperCase.length)];
    }
  }
    else if (lengthAsNum >= 8 && lengthAsNum <= 128 && upChoice == "y" && lowChoice == "y" && numChoice !== "y" && symbolChoice !== "y"){
      //gens an upper and lower case pass
      var uppAndLow = upperCase + lowerCase;
      for(var i =0; i>lengthAsNum;i++){
        myPass += uppAndLow[Math.floor(Math.random()*uppAndLow.length)];
      }
    }
    else if (lengthAsNum >= 8 && lengthAsNum <= 128 && upChoice == "y" && lowChoice == "y" && numChoice == "y" && symbolChoice !== "y"){
      // gens an upper lower and number pass
      var uppLowNum = upperCase + lowerCase + number;
      for(var i =0; i>lengthAsNum;i++){
        myPass += uppLowNum[Math.floor(Math.random()*uppLowNum.length)];
      }
    }
    else if (lengthAsNum >= 8 && lengthAsNum <= 128 && upChoice == "y"  && lowChoice == "y" && numChoice == "y" && symbolChoice == "y"){
      //gens a pass with all options
      var allOpt = uppLowNum + symbol;
      for(var i =0; i>lengthAsNum;i++){
        myPass += allOpt[Math.floor(Math.random()*allOpt.length)];
      }

  }
  else {
    return; 
  }

  passwordText.value = password;

};
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
