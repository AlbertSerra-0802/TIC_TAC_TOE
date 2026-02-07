const containers = document.querySelectorAll(".container");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");


// X start
let torn = "❌"; 
let puntsX = 0;
let puntsO = 0;

// We add click on each box
containers.forEach(container => {
    container.addEventListener("click", () => {
        if (container.textContent.trim() === "") {
            container.textContent = torn;
            Winner();
            torn = (torn === "❌") ? "⭕" : "❌";
        }
    });
});

// Check if there is a winner or tie
function Winner() {
    const combinations = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    let hasWinner = false;

    for (let i = 0; i < combinations.length; i++) {
        const [a, b, c] = combinations[i];
        if (
            containers[a].textContent &&
            containers[a].textContent === containers[b].textContent &&
            containers[a].textContent === containers[c].textContent
        ) {
            hasWinner = true;

            // Messages with emojis, points and animations
            if (containers[a].textContent === "❌") {
                message.textContent = "🕶️ ❌ Win!! 🤘  ⭕ Lost!! 💩";
                puntsX++;
            } else {
                message.textContent = "🕶️ ⭕ Win!! 🤘  ❌ Lost!! 💩";
                puntsO++;
            }

            // Update the comunters
            scoreX.textContent = puntsX;
            scoreO.textContent = puntsO;

            // Animated winning boxes
            containers[a].classList.add("win");
            containers[b].classList.add("win");
            containers[c].classList.add("win");

            
            // Close the game
            offGame(); 
            return;
        }
    };

    // Check if there is a tie
    const full = Array.from(containers).every(container => container.textContent !== "");
    if (full && !hasWinner) {
        message.textContent = "🤜🤛 Empat!";
    }
}

// Function to restart the game
function restartGame() {
    containers.forEach(container => {
        container.textContent = "";
        container.classList.remove("win"); 
    });
    message.textContent = "";
    torn = "❌";
    onGame(); 
}

// Listen to the button "Click"
restartBtn.addEventListener("click", restartGame);



