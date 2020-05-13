// Create a function that takes the users name, age and time and outputs those specific details in a string with the race registration time and their specific race niumber.
function name_age_time_string () {
    let raceNumber = Math.floor(Math.random() * 1000);

    let userName = document.getElementById('firstName').value;
    let userAge = document.getElementById('age').value;
    let userTime = document.getElementById('time').value;

    if (userTime === 'early' && userAge >= 18) {
        raceNumber += 1000;
    }

    if (userTime === 'early' && userAge >= 18) {
        let string = `${userName}, you will race at 9:30 am and your race number is ${raceNumber}.`
        document.getElementById('nameAgeTimeString').innerHTML = string;
      } else if (userAge >= 18 && userTime === !'early') {
        let string = `${userName}, you will race at 11:00 am and your race number is ${raceNumber}.`
        document.getElementById('nameAgeTimeString').innerHTML = string;
      } else {
        let string = `${userName}, you will race at 12:30 pm and your race number is ${raceNumber}.`
        document.getElementById('nameAgeTimeString').innerHTML = string;
    };

};

document.getElementById('ageAndTimeSubmit').addEventListener('click', name_age_time_string);