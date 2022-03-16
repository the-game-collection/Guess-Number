'use strict';

let ATTEMPS = 5;
const result = Math.floor(Math.random() * 21) + 1;


document.querySelector('.number').addEventListener('click', function(){
    document.querySelector('.number').textContent = result.toString();
})


document.querySelector('.check').addEventListener('click', function () {
    if (ATTEMPS === 1) {
        document.querySelector('.message').textContent = "You lose";
        ATTEMPS -= 1;
        document.querySelector('.score').textContent = ATTEMPS.toString();
        document.querySelector('.feedback').textContent = ATTEMPS.toString() + " left";
        document.getElementById("btn-check").disabled = true;
    } else {
        let input = Number(document.querySelector('.guess').value)       
        if (input === "") {
            document.querySelector('.message').textContent = "Please enter number...";
        } else {
            //Check if input equals result
            if (input === result) {
                document.querySelector('.message').textContent = "You win";
                document.querySelector('.score').textContent = ATTEMPS.toString();
                document.querySelector('.feedback').textContent = "";
                document.getElementById("btn-check").disabled = true;
            }
            //Check if higher
            else if (input > result) {
                ATTEMPS -= 1;
                document.querySelector('.message').textContent = "Too high";
                document.querySelector('.feedback').textContent = ATTEMPS.toString() + " left";
            }
            //Check if lower
            else if (input < result) {
                ATTEMPS -= 1;
                document.querySelector('.message').textContent = "Too low";
                document.querySelector('.feedback').textContent = ATTEMPS.toString() + " left";
            } else {
                ATTEMPS -= 1;
                document.querySelector('.message').textContent = "Incorrect";
                document.querySelector('.feedback').textContent = ATTEMPS.toString() + " left";
            }
        }
    }

})

// document.querySelector('.again').addEventListener('click', function () {
//   score = 0;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });