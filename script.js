const containers = document.querySelectorAll(".container");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");

let torn = "X";

containers.forEach(container => {
    container.addEventListener("click", () => {
        if (container.textContent.trim() === "") {
            container.textContent = torn;
            Winner();
            torn = (torn === "X") ? "O" : "X";
        }
    });
});

function Winner() {
    const combinations = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    combinations.forEach(combination => {
        const [a, b, c] = combination;

        if (
            containers[a].textContent &&
            containers[a].textContent === containers[b].textContent &&
            containers[a].textContent === containers[c].textContent
        ) {
            message.textContent = " You has win!! " + containers[a].textContent;
            offGame();
        }
    });
}

function restartGame() {
    containers.forEach(container => {
        container.textContent = "";
    });

    message.textContent = "";
    torn = "X";
}

restartBtn.addEventListener("click", restartGame);
