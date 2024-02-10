// This function rolls 2 dice and generates a result in console.
function rollDice(){
    let die1 = Math.floor(Math.random() * 6) +1;
    let die2 = Math.floor(Math.random() * 6) +1;
    let bothsum = die1+die2;
    //After getting the sum of Die 1 and 2, we see our results.
    // I orignally used || as well as else, if statements but found switch and cases were way better for this task.
    switch (bothsum) {
        case 2:
            summy = "You Lose"
            break;
        case 3:
            summy = "You Lose"
            break;
        case 7:
            summy = "You Win"
            break;
        case 11:
            summy = "You Win"
            break;
        case 12:
            summy = "You Lose"
            break;
        default: 
            summy = "Re-Roll"
    }
    return summy;
}
    //This allows the button on on my html page to work. It calls my roll the dice function.
    function Craps(){
        sum = rollDice()
        console.log(sum)
    
        document.getElementById('GameResult').innerHTML = sum;
    }
    

