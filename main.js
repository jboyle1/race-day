// 001 - Assign race numbers randomly.
let raceNumber = Math.floor(Math.random() * 1000);

// 002 - Create a variable that indicates whether a runner registered early or not.
let early = true;

// 003 - Create a variable for the runner’s age and set it equal to a number.
let age = 19;

// 004 - Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true.
if (early && age > 18) {
    raceNumber += 1000;
};