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

function generatePassword() {
  //make a function for the first prompt, how long is password going to be
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

  // need a function that makes it so if all 4 parameters aren't chosen it loops back and asks again.
  // extensive web searching has led me to 'do/while' statements
  do {
    var chooseAlert = alert(
      "You must choose at least one of the next 4 parameters, click OK to continue"
    );
    var upperAlert = confirm("Would you like upper case letters?");
    if (upperAlert === true) {
      alert("You have chosen to include uppercase letters");
    } else {
      alert("You have chosen not to include uppercase letters");
    }
    var lowerAlert = confirm("Would you like lower case letters?");
    if (lowerAlert === true) {
      alert("You have chosen to include lowercase letters");
    } else {
      alert("You have chosen not to include lowercase letters");
    }
    var numbersAlert = confirm("Would you like numbers?");
    if (numbersAlert === true) {
      alert("You have chosen to include numbers");
    } else {
      alert("You have chosen not to include numbers");
    }
    var charactersAlert = confirm("Would you like special characters?");
    if (charactersAlert === true) {
      alert("You have chosen to include special characters");
    } else {
      alert("You have chosen not to include special characters");
    }
  } while (
    upperAlert === false &&
    lowerAlert === false &&
    numbersAlert === false &&
    charactersAlert === false
  );

  console.log(chooseAlert);
  console.log(upperAlert);
  console.log(lowerAlert);
  console.log(numbersAlert);
  console.log(charactersAlert);

  // need to make arrays, and then .concat based on user specified parameters
  var lowerArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbersArr = "0123456789".split("");
  var charactersArr = "!%&,*+-./<>?~".split("");

  // thank you to will and jeremy for teaching me .split

  // variable must be an empty array, making global for multiple function reference
  var passwordArray = [];

  // if alert variable is confirmed
  // the corresponding array is concated into the passwordArray variable
  if (upperAlert === true) {
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

  var pass = "";

  //this forces all variables to be used if they are selected, but takes out the randomness
  for (var i = 0; i < passLength; i++) {
    if (upperAlert && pass.length < passLength) {
      pass = pass + upperArr[Math.floor(Math.random() * upperArr.length)];
    }
    if (lowerAlert && pass.length < passLength) {
      pass = pass + lowerArr[Math.floor(Math.random() * lowerArr.length)];
    }
    if (numbersAlert && pass.length < passLength) {
      pass = pass + numbersArr[Math.floor(Math.random() * numbersArr.length)];
    }
    if (charactersAlert && pass.length < passLength) {
      pass =
        pass + charactersArr[Math.floor(Math.random() * charactersArr.length)];
    }
  }

  var randomPassword = pass.toString();
  console.log(randomPassword);
  splitPassword = randomPassword.split("");

  shuffleArray(splitPassword);
  console.log(splitPassword);

  var finalPass = splitPassword.join("");
  console.log(finalPass);

  return finalPass;
}

function shuffleArray(inputArray) {
  inputArray.sort(() => Math.random() - 0.05);
}
