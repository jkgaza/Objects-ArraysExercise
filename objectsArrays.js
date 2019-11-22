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
// let name = "";
// let health = "";
// let characters = [
//     new this.Character((name = "Jenny"), (health = 50)),
//     new this.Character((name = "Terra"), (health = 60)),
//     new this.Character((name = "Lila"), (health = 70)),
// ];

// let opponent = new this.Opponent((name = "Velma"), (health = 100));


// Constructor function for Person objects
function Character(name, health) {
    this.charName = name;
    this.charHealth = health;
  }
  
// Create two Person objects
let char1 = new Character("John", 50);
let char2 = new Character("Sally", 50);
let char3 = new Character("Lila", 50);
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age + ".";



