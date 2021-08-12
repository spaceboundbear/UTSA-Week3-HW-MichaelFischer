
Notes:
Had a lot of trouble getting this to run, and even when it did, the code was sloppy.
I worked a lot on cleaning the code and researching things (mostly prompt loops and concat arrays)


Link to application:
https://spaceboundbear.github.io/UTSA-Week3-HW-MichaelFischer/

Link to repository:
https://github.com/spaceboundbear/UTSA-Week3-HW-MichaelFischer

Screenshot:
screenshot.png

Homework Criteria::
---
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
---

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