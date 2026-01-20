let btnRef = document.querySelectorAll(".button-option");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let popupRef = document.querySelector(".popup");


//The Player press 'X' plays first 22:41
let xTurn = true;
let count = 0;

//Winning Pattern Array
let winningPattern = [
    [0,1,2],[3,4,5],[6,7,8],  // files
    [0,3,6],[1,4,7],[2,5,8],  // columnes
    [0,4,8],[2,4,6]           // diagonals
];


//Disable All Buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));

    //enable popup
    popupRef.classList.remove("hide");
};

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
    btnRef.forEach((element)) => {
        element.innerText = "";
        element.disabled = "false";            
    };

    //disable popup
    popupRef.classList.add("hide");
};

//This function is executed when a player wins
const winFunction = (letter) => {
    msgRef.innerText = `${letter} Wins!`;
    disableButtons();
};

//Win Logic
const winChecker = () => {

    //Loop through all win patterns
    for(let i of winningPattern){
        let[element1, element2, element3] = [
            btnRef[i[0]].innerText, 
            btnRef[i[1]].innerText, 
            btnRef[i[2]].innerText,
        ];
        
        //Check if elements are filled
        //If 3 empty elements are same and would give win as would
         if(element1 != "" && element2 != "" && element3 != "") 
            {
            if(element1 == element2 && element2 == element3){
                
                //If all 3 buttons have same values then pass the value to winFunction
                winFunction(element1);
            }
         }
    }
};

//Display X/O on click 
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
 