/* js */

function aigen() {
    return Math.floor(Math.random() * 3);
}

function numToIn(num){
    if (num === 0){
        return "Rock";
    } else if (num === 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function inToNum(input){
    if (input.localeCompare("Rock")){
        return 0;
    } else if (input.localeCompare("Paper")){
        return 1;
    } else if (input.localeCompare("Scissors")){
        return 2;
    } else {
        alert("Error");
    }
}

function valid(){
    let input = (prompt("Rock, Paper or Scissors"));
    let bool = false;
    while (bool === false){
        if (input.localeCompare("Rock") || input.localeCompare("Paper") || input.localeCompare("Scissors") ){
            console.log("Works");
            bool === true;
            break;
        } else {
            alert("Invalid input.");
            input = readLine(prompt("Rock, Paper or Scissors"));
        }
    }
    console.log("Works 2");
    return inToNum(input);
}

function res (pin, comin){
    console.log("in res");
    if (pin === comin) {
        return 0;
    } else {
        console.log("in res loop");
        if (pin === 0){
            if (comin === 1){
                return 2;
            } else {
                return 1;
            }
        } else if (pin === 1){
            if (comin === 2){
                return 2;
            } else {
                return 1;
            }
        } else if (pin === 2){
            if (comin === 0){
                return 2;
            } else {
                return 1;
            }
        }
    }
    alert("Error");
    return -1; 
}

function rwin (x){
    if (x === 0){
        alert ("It's a tie!");
    } else if (x === 1) {
        alert ("Player wins!");
    } else {
        alert("Computer wins :(");
    }
}

function sr(){
    let matchComplete = false; 
    let result;
    while(matchComplete === false){
        let pin = valid();
        let comin = aigen();
        result = res(pin, comin);
        rwin(result);
        if (result !== 0){
            matchComplete = true;
        }
    }
    return result;

}

function gam(){
    let pcount = 0;
    let comcount = 0;
    for (let i = 0; i < 5; i++){
        console.log("in loop 1");
        let res = sr();
        console.log("in loop 2");
        if (res === 1){
            pcount++;
        } else {
            comcount++;
        }
        if (pcount === 2 || comcount === 2){
            break;
        }
    }
    if (pcount > comcount){
        alert("You win!");
    } else {
        alert("You lose!");
    }
}

gam();