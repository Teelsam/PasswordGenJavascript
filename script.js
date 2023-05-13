// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","'","#","$"];



// Write password to the #password input
function writePassword() {
  //Here we generate the password
  var password = generatePassword();{ 
    var myArray =[];                                  
      var passLength = window.prompt("How many characters long would you like in the password?");
      var passSymbol = window.prompt("Include Special Symbols?");
      var passUppers = window.prompt("Include Uppercase?");
      var passLowers = window.prompt("Include Lowers?");
      var passNum = window.prompt("Include Numbers?");

      if (passLength > 8 && passLength < 128) {
        for (var i =0;i<passLength;i++){
              //iterating through the length asked for and randomly picking from alphabet, myArray is filled with random letters.
              var passPicker = Math.floor(Math.random()*26);
              myArray[i]=alphabet[passPicker];
            }
      }
      else if (passSymbol == "yes"){
        for (var i =0;i<passLength;i++){
          //iterating through the length asked for and randomly picking from alphabet, myArray is filled with random letters.
          var passPicker = Math.floor(Math.random()*4);
          myArray[i]=special[passPicker];
        }
      }
      else if (passUppers=="yes"){
        for (var i =0;i<passLength;i++){
          //iterating through the length asked for and randomly picking from alphabet, myArray is filled with random letters.
          var passPicker = Math.floor(Math.random()*26);
          myArray[i]=alphabet[passPicker];
          function isOdd(){
            return i%2;
          }
          if (isOdd = 1){
            myArray[i].toUppercase();
          }
        }
      }
      else if (passLowers == "yes"){
        for (var i =0;i<passLength;i++){
          //iterating through the length asked for and randomly picking from alphabet, myArray is filled with random letters.
          var passPicker = Math.floor(Math.random()*26);
          myArray[i]=alphabet[passPicker];
          myArray[i].toUpperCase();
          function isOdd(){
            return i%2;
          }
          if (isOdd = 1){
            myArray[i].toLowercase();
          }
        }
      }
      else if (passNum=="yes"){
        for (var i =0;i<passLength;i++){
          //iterating through the length asked for and randomly picking from alphabet, myArray is filled with random letters.
          var passPicker = Math.floor(Math.random()*9);
          myArray[i]=passPicker;
      }
   }
   else {
    console.log("woops nothing went...");
   }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;  
  return myArray;
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
