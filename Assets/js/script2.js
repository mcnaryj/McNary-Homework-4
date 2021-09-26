
/* unused code

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