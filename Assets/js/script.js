var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("timer-count");
var quizContainer1 = document.getElementById('quiz1');
var quizContainer2 = document.getElementById('quiz2');
var quizContainer3 = document.getElementById('quiz3');
var quizContainer4 = document.getElementById('quiz4');
var result = document.getElementById('result')
var resultsPage = document.getElementById('results-page')
var timer = 0;
var timerCount;


// const highScoreContainer = document.getElementById('high-score');
// const submitButton = document.getElementById('submit'); 
// not using yet ^^

var c01 = document.getElementById('choice-01');
var c02 = document.getElementById('choice-02');
var c03 = document.getElementById('choice-03');
var c04 = document.getElementById('choice-04');


var c11 = document.getElementById('choice-11')
var c12 = document.getElementById('choice-12')
var c13 = document.getElementById('choice-13');
var c14 = document.getElementById('choice-14');

var c21 = document.getElementById('choice-21');
var c22 = document.getElementById('choice-22');
var c23 = document.getElementById('choice-23');
var c24 = document.getElementById('choice-24');

var c31 = document.getElementById('choice-31');
var c32 = document.getElementById('choice-32');
var c33 = document.getElementById('choice-33');
var c34 = document.getElementById('choice-34');


// created a function to start the game

startButton.addEventListener('click', startGame);

// created a function for the timer, to be initialized up on clicking the start button
// Sets timer
function startGame() {
    isWin = false;
    timerCount = 20;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
}
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
        }
    }, 1000);
}

// For the first question
var choice01 = function () {
    if (c01.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
        count = timerCount - 10;
    }
};

var choice02 = function () {
    if (c02.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
        count = count - 10;
    }
};
var choice03 = function () {
    if (c03.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
        count = timerCount - 10;
    }
};
var choice04 = function () {
    if (c04.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
        count = timerCount - 10;
    }
};


// for the second question
var choice11 = function () {
    if (c11.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};
var choice12 = function () {
    if (c12.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};
var choice13 = function () {
    if (c13.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};
var choice14 = function () {
    if (c14.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};

// Third Question
var choice21 = function () {
    if (c21.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};
var choice22 = function () {
    if (c22.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};
var choice23 = function () {
    if (c23.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};
var choice24 = function () {
    if (c24.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};

// Fourth Question
var choice31 = function () {
    if (c31.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        finalPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        finalPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};
var choice32 = function () {
    if (c32.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        finalPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        finalPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};

var choice33 = function () {
    if (c33.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        finalPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        finalPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
}; var choice34 = function () {
    if (c34.dataset.answer === "true") {
        correctStatus.innerText = "Nice!";
        finalPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        finalPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        timerCount = timerCount - 10;
    }
};


/* quizContainer1.setAttribute("style", "display: none;");
quizContainer2.setAttribute("style", "display: none;");
quizContainer3.setAttribute("style", "display: none;");
quizContainer4.setAttribute("style", "display: none;"); */


function incorrectAnswer() {
    timerCount = timerCount - 10;
    if (timerCount <= 0) {
        count = 0;
        timerElement.textContent = "Time remaining: " + timerCount;
    };

}

c01.addEventListener('click', choice01);
c02.addEventListener('click', choice02);
c03.addEventListener('click', choice03);
c04.addEventListener('click', choice04);
c11.addEventListener('click', choice11);
c12.addEventListener('click', choice12);
c13.addEventListener('click', choice13);
c14.addEventListener('click', choice14);
c21.addEventListener('click', choice21);
c22.addEventListener('click', choice22);
c23.addEventListener('click', choice23);
c24.addEventListener('click', choice24);
c31.addEventListener('click', choice31);
c32.addEventListener('click', choice32);
c33.addEventListener('click', choice33);
c34.addEventListener('click', choice34);

