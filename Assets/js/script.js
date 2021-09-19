var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");

var timer;
var timerCount;

// created a function to start the game
function startGame() {
    timerCount = 30;
    startTimer()
    startButton.disabled = true;
    // noted that this disables the start button (fades it out)
}
// created a function for the timer, to be initialized up on clicking the start button
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
            if (timerCount === 0) {
                // Clears interval
                clearInterval(timer);
              }
            }, 1000);
}

startButton.addEventListener('click', startGame);


        /*    var resetButton = document.querySelector(".reset-button");
    
            function resetGame() {
                // Resets win and loss counts
                winCounter = 0;
                loseCounter = 0;
                // Renders win and loss counts and sets them into client storage
                setHighScores()
    
            }*/