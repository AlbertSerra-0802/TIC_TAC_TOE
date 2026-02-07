// Select elements
const containers = document.querySelectorAll(".container");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");

// Initial player selection elements
const startX = document.getElementById("startX");
const startO = document.getElementById("startO");
const playerSelect = document.getElementById("player-select");

// Game variables
let torn = "❌"; 
let puntsX = 0;
let puntsO = 0;

// Choose starting player
startX.addEventListener("click", () => {
    torn = "❌";

    // Hide selection menu
    playerSelect.style.display = "none"; 
});

startO.addEventListener("click", () => {
    torn = "⭕";
    playerSelect.style.display = "none";
});

// Add click event to each cell
containers.forEach(container => {
    container.addEventListener("click", () => {
        if (container.textContent.trim() === "") {
            container.textContent = torn;
            Winner();

            //Change turn
            torn = (torn === "❌") ? "⭕" : "❌"; 
        }
    });
});

// Function to check winner or tie
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

            // Winner message and score update
            if (containers[a].textContent === "❌") {
                message.textContent = "🕶️ ❌ Win!! 🤘  ⭕ Lost!! 💩";
                puntsX++;
            } else {
                message.textContent = "🕶️ ⭕ Win!! 🤘  ❌ Lost!! 💩";
                puntsO++;
            }

            // Update score counters
            scoreX.textContent = puntsX;
            scoreO.textContent = puntsO;

            // Highlight winning cells
            containers[a].classList.add("win");
            containers[b].classList.add("win");
            containers[c].classList.add("win");

             // Disable board
            offGame();
            break;
        }
    }

    // Check tie
    const full = Array.from(containers).every(container => container.textContent !== "");
    if (full && !hasWinner) {
        message.textContent = "🤜🤛 Tie!";
    }
}

// Restart game function
function restartGame() {
    containers.forEach(container => {
        container.textContent = "";
        container.classList.remove("win"); 
    });
    message.textContent = "";
    torn = "❌";

    // enable board
    onGame(); 

    // show player selection again
    playerSelect.style.display = "block"; 
}

// Restart button event
restartBtn.addEventListener("click", restartGame);

// Disable board function
function offGame() {
    containers.forEach(container => {
        container.style.pointerEvents = "none";
    });
}

// Enable board function
function onGame() {
    containers.forEach(container => {
        container.style.pointerEvents = "auto";
    });
}
