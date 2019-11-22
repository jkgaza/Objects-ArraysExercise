"use strict";
/** @todo  Create an array of 3 characters. Each character is an object with two properties--
 * name and health. Create an object outside the array in a variable called opponent. 
 * The opponent also has name and health properties (the opponent should start with more health 
 * than any of the characters).*/

 /** @todo  Create a loop that:
    ● Prints out the name and health of all three characters plus the opponent.
    ● Prompts the user to pick a character by number (1, 2, or 3).
    ● “Battles” the selected character against the opponent. Remove five health from both
        the character and the opponent. (Or you can remove a random number from each.) 
    ● Exit the loop when the user response is null, which means that the cancel button was
        clicked.*/

let characters = [
    new this.Character("Jenny", 50),
    new this.Character("Terra", 60),
    new this.Character("Lila", 70),
];

let opponent = new this.Opponent("Velma", 100);

