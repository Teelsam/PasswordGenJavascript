// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword(){
  var upperCaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCaseList= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numberList = [1,2,3,4,5,6,7,8,9];
  var symbolList = ["@","%","^","&","*"];
  var possiblePassChars =[];//this creates a list of chars that can be used
  var myPass = [];// this is the array which will hold the password 
  //Questioning begins
  var length = prompt("How long do you want the password?");  
  var lengthAsNum = parseInt(length);
  if (Number.isNaN(lengthAsNum)){ // error if entered character isnt a number
    alert("Must be a number");
    return ;
  }
  if (lengthAsNum < 8 || lengthAsNum > 128){ // error if number entered exceeds limits
    alert("Password must be  between 8 and 128 char long");
  }
  var uppercaseChoice = confirm("UpperCase Characters?");//Asks if they want uppercase chars
  var lowChoice = confirm("LowerCase Characters?"); //Asks if they want lowercase chars
  var numChoice = confirm("numbers?");//Asks if they want numbers
  var symbolChoice =confirm("symbols?"); //Asks if they want symbols

  if(uppercaseChoice === false && lowChoice === false && numChoice === false && symbolChoice === false){ // errors if no char type is chosen
    alert("Character type must be chosen");
    return;
  }

    //Character options FOR UPPER COMBO
    if(uppercaseChoice == true && !lowChoice && !numChoice && !symbolChoice){//creates an array of possible uppercase values
      for(var i =0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*upperCaseList.length);
        possiblePassChars[i]=randomIndex;
      }
    }
    else if(uppercaseChoice == true && lowChoice == true && !numChoice && !symbolChoice){//creates an array of possible uppercase values
      for(var i =0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*upperCaseList.length);
        possiblePassChars[i]=randomIndex;
      }
    }
    else if(uppercaseChoice == true && !lowChoice && numChoice == true && !symbolChoice){//creates an array of possible uppercase values
      for(var i =0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*upperCaseList.length);
        possiblePassChars[i]=randomIndex;
      }
    }else if(uppercaseChoice == true && !lowChoice && !numChoice  && symbolChoice== true){//creates an array of possible uppercase values
      for(var i =0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*upperCaseList.length);
        possiblePassChars[i]=randomIndex;
      }
    }
    else if(uppercaseChoice == true && lowChoice == true && !numChoice  && !symbolChoice){//creates an array of possible uppercase values
      for(var i =0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*upperCaseList.length);
        possiblePassChars[i]=randomIndex;
      }
    }
    else if(uppercaseChoice == true && lowChoice == true && numChoice == true  && !symbolChoice){//creates an array of possible uppercase values
        for(var i =0;i<lengthAsNum.length;i++){
          var randomIndex = Math.floor(Math.random()*upperCaseList.length);
          possiblePassChars[i]=randomIndex;
        }
    }   
    // ALL THE LOW COMBO
    else if(lowChoice == true&& !uppercaseChoice && !numChoice && !symbolChoice){//creates an array of possible lowercase values
      for(var i=0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*lowerCaseList.length);
        possiblePassChars[i]=randomIndex;
      }
    }
    else if(lowChoice == true&& uppercaseChoice && !numChoice && !symbolChoice){//creates an array of possible lowercase values
      for(var i=0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*lowerCaseList.length);
        possiblePassChars[i]=randomIndex;
      }
    }
    else if(numChoice == true && !lowChoice && !uppercaseChoice && !symbolChoice){//creates an array of possible number values
      for(var i=0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*numberList.length);
        possiblePassChars[i]=randomIndex;
      }
    }
    else if(symbolChoice == true && !lowChoice && !numChoice && !uppcaseChoice){//creates an array of possible symbol values
      for(var i=0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*symbolList.length);
        possiblePassChars[i]=randomIndex;
      }
    }
    else {
      var allList = upperCaseList + lowerCaseList +numberList + symbolList;
      for(var i=0;i<lengthAsNum.length;i++){
        var randomIndex = Math.floor(Math.random()*allList.length);
        possiblePassChars[i]=randomIndex;
      }
    }


    for(var i=0;i<possiblePassChars.length;i++){//creates an array of possible values to the final passward
      myPass[i]=possiblePassChars[i];

    }
    
    return myPass.join('');
    }
  

};
passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
