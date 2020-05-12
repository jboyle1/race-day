// 001 - Assign race numbers randomly.
let raceNumber = Math.floor(Math.random() * 1000);

// 002 - Create a variable that indicates whether a runner registered early or not.
let early = true;

// 003 - Create a variable for the runner’s age and set it equal to a number.
let age = 19;

// 004 - Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true.
if (early && age >= 18) {
    raceNumber += 1000;
};

// 005 - Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time. For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their raceNumber.
if (early && age >= 18) {
    console.log(`Race will begin at 9:30, your race number is ${raceNumber}.`);
// 006 - Write the corresponding else if statement. Within that, log a string to the console telling them that they will race at 11:00 am. Include their raceNumber.
} else if (!early && age <= 18) {
    console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`);
// 007 - For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their raceNumber.
} else {
    console.log(`You will race at 12:30 pm and your race number is ${raceNumber}.`);};

