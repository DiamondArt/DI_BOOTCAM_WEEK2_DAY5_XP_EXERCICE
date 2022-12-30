/***********************************************************************************
 * Exercise 1 : Play A Guessing Game
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description :
 * Explanation of the game : the point of the game is to guess 
 * the number that the computer has in “mind”.
 * @typeof {number}
 * @typeof {function}
 * @typedef :
 * - {(number|string)} userNumber
 * - {(number|string)} computerNumber
 * **********************************************************************************/ 

/******************************************************************************
 * @description: Verify if number enter is between (0,10) and show random number
 * @returns {number} computerNumber - the random numer
 ******************************************************************************/
let chance = 2;
function  playTheGame() {
    let confirme = confirm("Do you want to play a game ?")
    let userNumber;
    if(confirme){
        userNumber = prompt("Welcome, enter a number between 0 and 10");
        if(isNaN(userNumber)){
            alert("Sorry Not a number, Goodbye");
        }else{
            if(userNumber < 0){
                alert("Sorry it’s not a good number, Goodbye");
            }else{
                let computerNumber = getRandomArbitrary(0,10);
                compareNumbers(userNumber,computerNumber);
                console.log(`random value is ${computerNumber}`);
            }
        }
    }else{
     alert("No problem, Goodbye"); 
    }
}

/**************************************
 * @description: Generate random number
 * @param {number} min
 * @param {number} max
 * @returns {number}
 **************************************/
function getRandomArbitrary(min, max) {
    return  Math.round(Math.random() * (max - min) + min);
}
  
/**************************************
 * @description: Compare two numbers
 * @param {number} userNumber
 * @param {number} computerNumber
 **************************************/
 function compareNumbers(userNumber,computerNumber){
    if(userNumber == computerNumber){
            alert("WINNER");
    }else{
        while(userNumber > computerNumber || userNumber < computerNumber){
            userNumber = prompt(`No good, you are ${chance} chance try again!`);
            chance--;
            if(chance == 0){
                alert("(-_-) Out of chances!");
                break;
            }
            console.log(chance);
        }
    }
 }