// Assignment Code
var generateBtn = document.querySelector("#generate");

var set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
var length = 3;
var newstring = '';

function generatePassword(length=3) {
  for (var i = 0; i <= length; i++) {
  var floor = Math.floor(Math.random() * set.length);
  newstring += set.substring(floor, floor+1);
}
  return newstring;
}

/* document.getElementById("newstring2") = newstring; */


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
