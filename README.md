<img width="1440" alt="screenshot" src="https://user-images.githubusercontent.com/86039208/129411401-2307a5ad-140e-48c3-b931-1482dad338cd.png">

Notes:
Had a lot of trouble getting this to run, and even when it did, the code was sloppy.
I worked a lot on cleaning the code and researching things (do/while loops / concat arrays / .split() / .match())
This project was tough! I learned a lot about how powerful javascript is, it's just figuring out (and googling) how to use it to your advantage. Javascript has all the answers, you just need to know how to ask.


Update #1:
I encountered a problem where even if i selected all the parameters, there was no guarantee it would include them all, especially on smaller passwords. I've fixed that issue by forcing them to include characters from every parameter selected.

Update #2:
Although I succeeded in forcing all selected parameters to show up, it took out a lot of the randomness of the password, causing the password to generate an upper case, lower case, special char, and number over and over again. I've fixed that by taking the password generated and making those characters an array, and then randomizing that to generate a password that contains all parameters selected in a random order.

Update #3:
Encountered a problem where the prompt that asks for password length, it would accept alphabetic and special characters which would cause the password generator to return undefined. Fixed using a while loop and .match() to make sure the prompt answer only includes numbers.

Also cleaned up a lot of random comments that weren't valuable to the code, mostly just thinking out loud, so to speak.


Link to application:
https://spaceboundbear.github.io/UTSA-Week3-HW-MichaelFischer/

Link to repository:
https://github.com/spaceboundbear/UTSA-Week3-HW-MichaelFischer

Homework Criteria::
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

1.
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

    Prompts and Confirm Alerts show up as intended, have not tried to break the code yet, currently testing

2.
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

    Confirms do show all options for criteria in password.

3.
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

    Prompt displays an input for how long the password should be.

4.
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

    Isn't this the same as #2?

5.
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

    Loop implemented to make sure user chooses at least one character type, answers not validated yet.
    // UPDATE: answers validated for both 'cancel' and 'OK' selections

6.
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

    Password working as intended, displays correct length and characters according to user input for criteria

7.
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

    Password generated and displayed inside page
