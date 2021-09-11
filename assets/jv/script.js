// Assignment code here
 

var generateBtn = document.querySelector("#generate");

function generatePassword() {
    //ps lenght
    var passwordLength = Number(prompt("Welcome to password generator, Please choose how long your password would be? Choose a number between 8 and 128"));
    // checking if the length between 8 & 128
    if ((passwordLength > 128 || passwordLength < 8 ) ||  (Number.isNaN(passwordLength) )){
      alert ("Invalid number, Try again and enter a number between 8 and 128 ");
      return;
    }
    // variables declarations for choosing chat type
    var numeric = confirm ("Do you want your password to have numbers?");
    var upperCasevar = confirm ("Do you want your password to have uppercase?");
    var lowCase = confirm ("Do you want your password to have lowercase characters?");
    var spicalChar = confirm ("Do you want your password to have special characters?");
    // arrays to hold letters, numbers , special chars
    var customChar = ['!','@','#','%','&','*','`'];
    var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numbers= ['0','1','2','3','4','5','6','7','8','9'];
    var uppercase = lowercase.join().toUpperCase().split("");
    // restricting to choose one type at least
    if (!numeric && !lowCase && !upperCasevar && !spicalChar){
      alert("Please choose at least one character type, Try again. ");
      return;
    }
    // password string
    var psgenerater ="";
    var err = [];

    if (lowCase){
      err = err.concat(lowercase);
      
    }

    if (upperCasevar){
      err = err.concat(uppercase);
    }

    if (spicalChar) {
      err = err.concat(customChar);
    }

    if (numeric){
      err=err.concat(numbers);
    }
    // creating ps as user's length choice
    for (var i = 0 ; i < passwordLength ; i ++){
    
      psgenerater = psgenerater + err [ Math.floor(Math.random()* (err.length - 1))];
    
    }
    
    return psgenerater;
  
};
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
