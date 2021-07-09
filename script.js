// Assignment Code
var generateBtn = document.querySelector("#generate");

var set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
var length = 10;
var newstring = ''

function generatePassword(10, set) {
  for (var i = 0; i <length; i++) {
  var floor = Math.floor(Math.random() * set.length);
  newstring += set1.substring(floor, floor+1);
}
  return newstring;
}

document.getElementById("newstring2") = newstring;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
