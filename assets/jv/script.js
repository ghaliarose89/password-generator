// Assignment code here
 

var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passwordLength = Number(prompt("welcome to pasword generatour, Please chooes how length your pw would be? , choose form 8 up to 128"));

    if (passwordLength > 128 || passwordLength < 8 ) {
      alert ("invalid number ");
      return;
    }
    var numeric = confirm ("Do you want your password to have number?");
    var upperCasevar = confirm ("Do you want your password to have uppercase?");
    var lowCase = confirm ("Do you want your password to have lowercase characters?");
    var spicalChar = confirm ("Do you want your password to have spical characters?");
    var customChar = ['!','@','#','%','&','*','`'];
    var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numbers= ['0','1','2','3','4','5','6','7','8','9'];
    var uppercase = lowercase.join().toUpperCase().split("");

    if (!numeric && !lowCase && !upperCasevar && !spicalChar){
      alert("Please choose one character type ");
      return;
    }

    var psgenerater ="";
    var err = [];

   

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
