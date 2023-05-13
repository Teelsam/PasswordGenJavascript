// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","'","#","$"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  generatePassword();{
      var passLength = window.prompt("How long would you like the password?");
      if (passLength => 8 && passLength =< 20){
        var passSpecial = window.prompt("Would you like special characters?");
        var passUppers = window.prompt("Would you like Uppercase characters?");
        var passLowers = window.prompt("Would you like Lowercase characters?");
        var passNum = window.prompt("Would you like Number characters?");
        if (passSpecial =="yes"){
          for (var i =0;i<passLength;i++){
            //iterating through the length asked for and randomly picking from alphabet, myArray is filled with random letters.
            var passPicker = Math.floor(Math.random()*26);
            var myArray =[];
            myArray[i]=alphabet[passPicker];
          }
        }
        else if (passSpecial =="yes" && passUppers =="yes"){
          for (var i =0;i<passLength;i++){
            //iterating through the length asked for and randomly picking from alphabet, myArray is filled with random letters.
            var passPicker = Math.floor(Math.random()*26);
            var myArray =[];
            myArray[i]=alphabet[passPicker];
            myArray[i]=myArray[i].toUpperCase();
          }
        }
      }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
