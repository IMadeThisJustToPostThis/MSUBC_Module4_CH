// Assignment code here


// Get references to the #generate element
var startBtn = document.querySelector("#start-btn");
var startBtnStyle = document.getElementById("start-btn")

quizBtns = document.getElementsByClassName("questBtn");
for (var i = 0; i < quizBtns.length; i++) {
  quizBtns[i].addEventListener("click", function() {
    console.log(i);
  })
}
/*var quizBtn1 = document.querySelector("#quiz_btn1");
var quizBtn2 = document.querySelector("#quiz_btn2");
var quizBtn3 = document.querySelector("#quiz_btn3");
var quizBtn4 = document.querySelector("#quiz_btn4");*/

/* function handleClick(event) {
  event = event || window.event;
  event.target = event.target || event.srcElement;

  var element = event.target;

  while (element) {
    if (element.nodeName === "BUTTON" && /questBtn/.test(element.className)) {
        // The user clicked on a <button> or clicked on an element inside a <button>
        // with a class name called "foo"
        doSomething(element);
        break;
    }

    element = element.parentNode;
}
}

function doSomething(button){
  console.log(1);
} */

var timerElement = document.querySelector("#timer");
var timer;
var timerCount;
var isWin = false;
var winCounter = 0;
var loseCounter = 0;

var initialsField = document.querySelector("#initials");

var scoresBtn = document.querySelector("#scores_btn");
var backBtn = document.querySelector("#back_btn");
var clearBtn = document.querySelector("#clear_btn");

// start the game
function startGame() {
  isWin = false;
  timerCount = 75;
  startBtn.disabled = true;
  startBtnStyle.style.display == "none"
  displayQuestions();
  startTimer();
  saveScores();
}
startBtn.addEventListener("click", startGame);

/*quizBtn1.addEventListener("click", getQuestionChosen);
quizBtn2.addEventListener("click", getQuestionChosen(2));
quizBtn3.addEventListener("click", getQuestionChosen(3));
quizBtn4.addEventListener("click", getQuestionChosen(4));*/



function getQuestionChosen(event){
  searchKey
}

function renderBlanks() {

}

// start the countdown timer
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        //clearInterval(timer);
        //winGame();
      }
    }
    if (timerCount === 0) {
      //clearInterval(timer);
      //loseGame();
    }
  }, 1000);
}

function displayQuestions() {

}

function saveScores() {
  score = timerCount;
  initials = initialsField.textContent;
  console.log(timerCount);
  console.log(initials);
}

// clear scores
function clearScores() {
  winCounter = 0;
  loseCounter = 0;
  //setWins();
  //setLosses();
}
clearBtn.addEventListener("click", clearScores);


