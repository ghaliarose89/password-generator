// Assignment code here
var passwordLength= prompt("welcome to pasword generatour, Please chooes how length your pw would be? , choose form 8 up to 128");
console.log(passwordLength);
var numeric= confirm("Do you want ur ps to have number?");
var upperCasevar= confirm("Do you want ur ps to have uppercase?");
var lowCase= confirm("Do you want ur ps to have lowercase?");
var spicalChar= confirm("Do you want ur ps to have spical character?");
var psgenerater=" ";

function Random (min, max) { 
  x= (Math.floor(Math.random() * (max - min + 1) + min));
 return x;
  };

function uperChar(){
    var i=Random(65,90);
    var str1= String.fromCharCode(i); 
    psgenerater.concat(str1);
  };
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
