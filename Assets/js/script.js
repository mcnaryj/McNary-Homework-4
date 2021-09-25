var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("timer-count");
var timerText = document.getElementById("timer-text");
var quizContainer1 = document.getElementById('quiz1');
var quizContainer2 = document.getElementById('quiz2');
var quizContainer3 = document.getElementById('quiz3');
var quizContainer4 = document.getElementById('quiz4');
var correctStatus = document.getElementById('result');
var submitPage = document.getElementById('final-page');
var addScoreBtn = document.getElementById('add-score');
var userScore = document.getElementById('score');
var userInitials = document.getElementById('user-init');
var scorePage = document.getElementById('score-page');
var timer = 0;
var timerCount;


// const highScoreContainer = document.getElementById('high-score');
// const submitButton = document.getElementById('submit'); 
// not using yet ^^

var c01 = document.getElementById('choice-01');
var c02 = document.getElementById('choice-02');
var c03 = document.getElementById('choice-03');
var c04 = document.getElementById('choice-04');


var c11 = document.getElementById('choice-11');
var c12 = document.getElementById('choice-12');
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
    console.log("Starting Quiz")
    quizContainer1.setAttribute("style", "visibility: visible;");
    startButton.setAttribute("style", "display: none;")
    timerText.setAttribute("style", "visibility;");

}
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
            }
        }
        // Tests if time has run out
        if (timerCount <= 0) {
            // Clears interval
            clearInterval(timer);
            quizContainer1.setAttribute("style", "display: none;");
            quizContainer2.setAttribute("style", "display: none;");
            quizContainer3.setAttribute("style", "display: none;");
            quizContainer4.setAttribute("style", "display: none;");

            submitPage.setAttribute("style", "visibility:visible;");
            timerText.setAttribute("style", "display: none;");
        }

    }, 1000);
}

// For the first question
var choice01 = function () {
    if (c01.dataset.answer === "True") {
        console.log("Has the needful been done?")
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
    } else {
        console.log("is it running?");
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};

var choice02 = function () {
    if (c02.dataset.answer === "True") {
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
    } else {
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};
var choice03 = function () {
    if (c03.dataset.answer === "True") {
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
    } else {
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};
var choice04 = function () {
    if (c04.dataset.answer === "True") {
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
    } else {
        console.log("Has the needful been done?")
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};


// for the second question
var choice11 = function () {
    if (c11.dataset.answer === "true") {
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
    } else {
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};
var choice12 = function () {
    if (c12.dataset.answer === "True") {
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
    } else {
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};
var choice13 = function () {
    if (c13.dataset.answer === "True") {
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
    } else {
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};
var choice14 = function () {
    if (c14.dataset.answer === "True") {
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
    } else {
        quizContainer3.setAttribute("style", "visibility: visible;");
        quizContainer2.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};

// Third Question
var choice21 = function () {
    if (c21.dataset.answer === "True") {
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
    } else {
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};
var choice22 = function () {
    if (c22.dataset.answer === "True") {
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
    } else {
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};
var choice23 = function () {
    if (c23.dataset.answer === "True") {
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
    } else {
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};
var choice24 = function () {
    if (c24.dataset.answer === "True") {
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
    } else {
        quizContainer4.setAttribute("style", "visibility: visible;");
        quizContainer3.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};

// Fourth Question
var choice31 = function () {
    if (c31.dataset.answer === "True") {
        submitPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        window.setTimeout(closeResult, 2000);

    } else {
        submitPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};
var choice32 = function () {
    if (c32.dataset.answer === "True") {
        submitPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        window.setTimeout(closeResult, 2000);
    } else {
        submitPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
};

var choice33 = function () {
    if (c33.dataset.answer === "True") {
        submitPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        window.setTimeout(closeResult, 2000);
    } else {
        submitPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
}; var choice34 = function () {
    if (c34.dataset.answer === "True") {
        console.log("whas goin on?");
        submitPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        window.setTimeout(closeResult, 2000);
    } else {
        console.log("is it working?");
        submitPage.setAttribute("style", "visibility: visible;");
        quizContainer4.setAttribute("style", "display: none;");
        window.open()
        timerCount = timerCount - 5;
    }

};

// sets these containers to not display by default
quizContainer1.setAttribute("style", "display: none;");
quizContainer2.setAttribute("style", "display: none;");
quizContainer3.setAttribute("style", "display: none;");
quizContainer4.setAttribute("style", "display: none;");
timerText.setAttribute("style", "display: none;");
submitPage.setAttribute("style", "display: none;");
scorePage.setAttribute("style", "display: none;");
function closeResult() {
    correctStatus.style.display = " none";
};
closeResult();




var addScore = function () {
    submitPage.setAttribute("style", "visiblity: visible;");
    userScore = timerCount;
    userInitials = document.getElementById("submit").value;
    localStorage.setItem("High Score", userScore);


    const localStorageContent = localStorage.setItem('User Initials: ', userInitials);
    if (localStorageContent === null) {
        userScore = [];
    }
    else {
        final_scores.score.textContent = userScore
    }
    console.log("Adding user initials and score to local storage and the html page");
}

var showScores = function () {
    localStorage.JSON.parse(userScore);
    localStorage.getItem("score", userScore);

    for (var i = 0; i < userScore.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = userScore[i].name + ": " + userScore[i].score;
        highScores.appendChild(listItem);


    }

}


var newGame = function () {
    location.reload();
};

var eraseScores = function () {
    window.localStorage.clear();
    eraseScores();

};


/* 
 
var addInitials = function () {
 
    const localStorage = localStorage.getItem('User Initials: ')
    localStorage.setItem("User Initials", JSON.stringify(arr));
    console.log("please work");
 
}
/*    var userInitials = document.getElementById("submit");
    localStorageContent.JSON.stringify(userInitials);
    var localStorageContent = localStorageContent.setItem("User Initials", userInitials);
    console.log("Checking") */


/* myForm.addEventListener("submit", addU);
 
const list = document.querySelector("#list-items");
const listItems = document.getElementsByTagName('li');
 
function addUserInitials() {
    const userInitials = document.querySelector("add-score").value;
    const userListItem = document.createElement("li");
    userListItem.appendChild(document.createTextNode(userInitials));
    list.appendChild(userListItem);
    const myArray = map(listItems, getText);
    localStorage.setItem('User Initials', JSON.stringify(myArray));
    console.log("Is this doing anything");
 
    addUserInitials();
} */

// created event listeners for all 16 choices. In retrospect, I could have used different naming conventions but these are clear enough to me.
/*
document.getElementById('choice-01').addEventListener('click', function (event) {
 
    var data = event.target.getAttribute('data-answer')
    if (event.target.dataset.answer === "True") {
        console.log("Did we did it?")
        correctStatus.innerText = "Nice!";
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
    } else {
        correctStatus.innerText = "Wrong!!";
        console.log("is it running?");
        quizContainer2.setAttribute("style", "visibility: visible;");
        quizContainer1.setAttribute("style", "display: none;");
        timerCount = timerCount - 5;
    }
})*/
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

addScoreBtn.addEventListener("click", addScore);


// Get the value of the name field.
/* userInitials = $(function () {
    $("#add-score").click(function () {
    var userInitials = $("#name").val();
        localStorageContent.setItem("User Initials", userInitials);
        console.log("did anything happen?");
        if (localStorageContent === null) {
            userInitials = [];
        }
        else {
            userInitials.textContent = userInitials
        }
    })

});
*/