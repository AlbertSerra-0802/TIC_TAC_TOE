let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementaryByld("new-game");
let restartBtn = document.getElementById("restar");
let magRef = document.getElementById("message");

//Winning Pattern Array
let winningPattern = [
    [0, 1, 2], 
    [0, 3, 6], 
    [2, 5, 8], 
    [6, 7, 8], 
    [3, 4, 5], 
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
]; 

//The Player press 'X' plays first :14:28
let