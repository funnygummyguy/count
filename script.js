let timeLeft = 100;
let timerElement = document.getElementById('timer');
let clickerGameElement = document.getElementById('clicker-game');
let pointsElement = document.getElementById('points');
let clickerButton = document.getElementById('clicker-btn');
let points = 0;

// Countdown timer
let countdown = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft--;
        timerElement.innerText = timeLeft;
    } else {
        clearInterval(countdown);
        startClickerGame();
    }
}, 1000);

// Function to start the clicker game
function startClickerGame() {
    timerElement.style.display = 'none'; // Hide the timer
    clickerGameElement.style.display = 'block'; // Show the clicker game
}

// Clicker game logic
clickerButton.addEventListener('click', () => {
    points++;
    pointsElement.innerText = points;
});
