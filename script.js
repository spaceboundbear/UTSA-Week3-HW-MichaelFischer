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
// passLength needs to be empty string so answer in prompt can fill
var passLength = "";
var passChar;
var passNumber;
var passUpper;
var passLower;

function generatePassword() {
  // going to try and make multiple functions to go inside this function
  // edit, can't get it to spit out a definition, maybe missing a global variable
  // edit 2, can get it to work on one function, but looks messy. 

//make a function for the first prompt, how long is password going to be
//only time user has to type something in.

  passLength = prompt(
    "How long would you like your password to be? Type 8-128",
    "64"
  );

  // need to make a loop here, has to make sure answer is between 8-128
  // update: must use while or will only loop once
  while (passLength <= 7 || passLength >= 129) {
    alert("Password length must be between 8-128 characters");
    passLength = prompt(
      "How long would you like your password to be? Type 8-128",
      "64"
    );
  }

  // show user how many characters password will have
  alert("You've Chosen " + passLength + " Characters");


// user input for rest
  var upperAlert = confirm("Would you like upper case letters?");
  var lowerAlert = confirm("Would you like lower case letters?");
  var numbersAlert = confirm("Would you like numbers?");
  var charactersAlert = confirm("Would you like special characters?");

  // need another loop for outside parameter
  // need a function that makes it so if all 4 parameters aren't chosen it loops back and asks again.

  while ( upperAlert === false && lowerAlert === false && numbersAlert === false && charactersAlert === false) {
    alert("Gotta choose at least one, friend");
    //trying not to have to type out the alert variables again.
    //not sure if i have a choice

  }


  // need to make arrays, and then .concat based on user specified parameters
  // making global for reference in multiple functions
  // arrays are working according to console

  var lowerArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbersArr = "0123456789".split("");
  var charactersArr = "!%&,*+-./<>?~".split("");

  // thank you to will and jeremy for teaching me .split

  // variable is an empty array, making global for multiple function reference
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

  // now lets add all of this together, and do some math.
  var pass = "";

  for (var i = 0; i < passLength; i++) {
    pass = pass + passwordArray[Math.floor(Math.random() * passwordArray.length)];
    console.log(pass);
  }
  return pass;
}
