let btnRef = document.querySelectorAll(".button-option");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");


//The Player press 'X' plays first
let xTurn = true;
let count = 0;


//Display X/O on click 17:04
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            element.innerText = "X";
        } else { 
            element.innerText = "O";
        }
        element.disabled = true;   // Desactivar el botó
        xTurn = !xTurn;            // Alterna el torn
    
        //Increment count on each click
        count += 1;
        if(count === 9){
            //It's a draw since there are a total of 9 boxed

        }
        //Check for win on every click
        winChecker();
    });
});
 