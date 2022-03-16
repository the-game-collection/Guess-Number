'use strict';

let ATTEMPS = 10;
let result = Math.floor(Math.random() * 21);


function win(input){
    return (input===result)    
}

function check(){
    let input = document.querySelector('.guess').value

    if (input=="")
        alert("empty")
    else {
        
        while(ATTEMPS>=0){
            

        }
    }
    
}
