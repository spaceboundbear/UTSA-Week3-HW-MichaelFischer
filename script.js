// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// need variables for prompts/alerts, need prompt for password length, need boolean for rest
// variable needs to be empty string so answer in prompt can fill
var passLength = "";

function generatePassword() {

//first prompt, how long is password going to be
  passLength = prompt(
    "How long would you like your password to be? Type 8-128",
    "64"
  );

  // need to make a loop here, make sure answer is between 8-128
  while (passLength <= 7 || passLength >= 129) {
    alert("Password length must be between 8-128 characters");
    passLength = prompt(
      "How long would you like your password to be? Type 8-128",
      "64"
    );
  }
  // show user how many characters password will have
  alert("You have chosen " + passLength + " characters");

  // need statement that makes it so if all 4 parameters aren't chosen it loops back and asks user again.
  // extensive web searching has led me to 'do/while' statements
  // if/else inside a do/while (not sure if optimal, but easy to understand)
  // could probably make a series of functions to avoid having to type out if/else for every alert, may try later.

  do {
    var chooseAlert = alert("You must choose at least one parameter, click OK to continue");
    var upperAlert = confirm("Would you like upper case letters?");
    if (upperAlert === true) {
      alert("You have chosen to include uppercase letters")
    } else {
      alert("You have chosen not to include uppercase letters")
    }
    var lowerAlert = confirm("Would you like lower case letters?");
    if (lowerAlert === true) {
      alert("You have chosen to include lowercase letters")
    } else {
      alert("You have chosen not to include lowercase letters")
    }
    var numbersAlert = confirm("Would you like numbers?");
    if (numbersAlert === true) {
      alert("You have chosen to include numbers")
    } else {
      alert("You have chosen not to include numbers")
    }
    var charactersAlert = confirm("Would you like special characters?");
    if (upperAlert === true) {
      alert("You have chosen to include special characters")
    } else {
      alert("You have chosen not to include special characters")
    }
}
  while (upperAlert === false && lowerAlert === false && numbersAlert === false && charactersAlert === false) {
    }
      console.log (chooseAlert);
      console.log (upperAlert);
      console.log (lowerAlert);
      console.log (numbersAlert);
      console.log (charactersAlert);


  // make arrays, and then .concat based on user specified parameters
  // making global for reference in multiple functions
  // thank you to will and jeremy for teaching me .split
  var lowerArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbersArr = "0123456789".split("");
  var charactersArr = "!%&,*+-./<>?~".split("");

  // variable must be an empty array so it can be filled by concats of selected arrays above ^^
  var passwordArray = [];
  // if alert variable is confirmed
  if (upperAlert === true) {
    // the corresponding array is concated into the passwordArray variable
    passwordArray = passwordArray.concat(upperArr);
  }

  if (lowerAlert === true) {
    passwordArray = passwordArray.concat(lowerArr);
  }

  if (numbersAlert === true) {
    passwordArray = passwordArray.concat(numbersArr);
  }

  if (charactersAlert === true) {
    passwordArray = passwordArray.concat(charactersArr);
  }

  console.log(passwordArray);

  // Math statement to randomize joined array
  var pass = "";

  for (var i = 0; i < passLength; i++) {
    pass = pass + passwordArray[Math.floor(Math.random() * passwordArray.length)];
    console.log(pass);
  }
  return pass;
}

