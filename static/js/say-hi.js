// Create Function that takes user name and outputs the value in a HTML string.
function say_hi() {
    let fname = document.getElementById('firstName').value;
    let html = `Hello ${fname}`;
    document.getElementById('nameResult').innerHTML = html;
};
// Add an event lidtener for the say_hi function.
document.getElementById('say').addEventListener('click', say_hi);