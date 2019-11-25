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



// Constructor function for objects
// function Character(name, health) {
//     this.charName = name;
//     this.charHealth = health;
//   }
  
// // Create objects
// let char1 = new Character("John", 50);
// let char2 = new Character("Sally", 50);
// let char3 = new Character("Lila", 50);
// let opp = new Character("Steve", 100);
  
// // Display 
  
//   console.log("Our heros are " + char1.charName + ", " + char2.charName + ", and " + char3.charName + ".");
//   console.log("The villain is " + opp.charName + ".");

let myArr = [
  ("Lisa", 50),
  ("Joe", 50),
  ("David", 50),
];

let opponent = (
  name = "Jeff",
  health = 100
);

for (var i = 0; i < myArr.length; ++i) {
  console.log('value at index [' + i + '] is: [' + myArr[i] + ']');
}


