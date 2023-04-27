var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var startButton = document.getElementById("start");
var scoreBoard = document.getElementById("enterScores");
var quizEl = document.getElementById("quiz");
var correctEl = document.createElement("p");
var scoreEl = document.createElement("p");
var timer = document.querySelector(".time");
var initialSubmit = document.getElementById("initialSubmit");
var seconds = 60;
var i = 0;
var numCorrect = 0;
var quizCount = 0;

var correctChoices = ["C", "A", "D", "B", "A"];
var userAnswers = [];

function calcScore(){
    var userScore = Math.floor((numCorrect / quizQuestions.length)*100);
    return userScore;
}

function startTimer(){
    var timerInterval = setInterval(function(){
        seconds--;
        timer.textContent = "Seconds left: " + seconds;

        if(seconds === 0 || i >= quizQuestions.length){
            clearInterval(timerInterval);
            timer.style.display = "none";
            choiceA.style.display = "none";
            choiceB.style.display = "none";
            choiceC.style.display = "none";
            choiceD.style.display = "none";
            scoreBoard.style.display = "block";
            var userScore = calcScore();
            scoreEl.textContent = "Total Score: " + userScore + "%";
            quizEl.appendChild(scoreEl);
            initialSubmit.style.display = "inline-block";
        }
        if(seconds === 0){
            question.textContent = "Time's Up!";
        }
        if(i >= quizQuestions.length){
            question.textContent = "Quiz Complete!";
        }

    }, 1000);
}

// Array of questions and answer choices
let quizQuestions = [
    {
        question: "What CSS pseudo-class is needed to declare variables in CSS?",
        choiceA: "*",
        choiceB: "var",
        choiceC: ":root",
        choiceD: ":var",
        correctChoice: "C"
    },
    {
        question: "What does 'this' in Javascript refer to?",
        choiceA: "The global object",
        choiceB: "The current element",
        choiceC: "The parent element",
        choiceD: "None of the above",
        correctChoice: "A"
    },
    {
        question: "What is 'function' and 'var known as?",
        choiceA: "Data types",
        choiceB: "Logical comparators",
        choiceC: "Objects",
        choiceD: "Declaration statements",
        correctChoice: "D"
    },
    {
        question: "If a local variable and global variable have the same name, which one takes precedence?",
        choiceA: "Global variable",
        choiceB: "Local variable",
        choiceC: "Both global and local variable",
        choiceD: "None of the above",
        correctChoice: "B"
    },
    {
        question: "What is the correct order of HTML tags for a webpage?",
        choiceA: "HTML, Head, Title, Body",
        choiceB: "HTML, Title, Head, Body",
        choiceC: "Head, Title, Body, HTML",
        choiceD: "Title, Head, Body, HTML",
        correctChoice: "A" 
    }
];

function printQuiz(){
    choiceA.style.display = "block";
    choiceB.style.display = "block";
    choiceC.style.display = "block";
    choiceD.style.display = "block";
    question.textContent = quizQuestions[i].question;
    choiceA.textContent = quizQuestions[i].choiceA;
    choiceB.textContent = quizQuestions[i].choiceB;
    choiceC.textContent = quizQuestions[i].choiceC;
    choiceD.textContent = quizQuestions[i].choiceD;
}

function answerCheck(){
    if(userAnswers[i] != correctChoices[i]){
        seconds = seconds - 10;
        correctEl.textContent = "Wrong Answer!";
        quizEl.appendChild(correctEl);

    }
    else{
        numCorrect++;
        correctEl.textContent = "Correct Answer!";
        quizEl.appendChild(correctEl);
    }
}
    
choiceA.addEventListener("click", function(event){
    userAnswers[i] = "A";
    answerCheck();
    console.log(userAnswers);
    i++;
    if(i >= quizQuestions.length){
        return;
    }
    printQuiz();
});

choiceB.addEventListener("click", function(event){
    userAnswers[i] = "B";
    answerCheck();
    console.log(userAnswers);
    i++;
    if(i >= quizQuestions.length){
        return;
    }
    printQuiz();
});

choiceC.addEventListener("click", function(event){
    userAnswers[i] = "C";
    answerCheck();
    console.log(userAnswers);
    i++;
    if(i >= quizQuestions.length){
        return;
    }
    printQuiz();
});

choiceD.addEventListener("click", function(event){
    userAnswers[i] = "D";
    answerCheck();
    console.log(userAnswers);
    i++;
    if(i >= quizQuestions.length){
        return;
    }
    printQuiz();
});

startButton.addEventListener("click", function(event){
    event.preventDefault();
    startButton.style.display = "none";
    startTimer();
    printQuiz();
})

initialSubmit.addEventListener("click", function(event){
    event.preventDefault();
    var initials = document.getElementById("initials");
    console.log(initials.value);
    var score = calcScore();
    console.log(score);
    
    var check = localStorage.getItem("quizCount", quizCount);

    if (check == null){
        quizCount++;
        localStorage.setItem("quizCount", quizCount);
        var scoreList = document.createElement("li");
        scoreList.textContent = initials.value + " Quiz Score: " + score + "%";
        scoreBoard.appendChild(scoreList);
        var saveScore = `${initials.value} Quiz Score: ${score}%`;
        localStorage.setItem("quizScore", saveScore);
    }
    else{
        check++;
        localStorage.setItem("quizCount", check);
        lastScore = localStorage.getItem("quizScore");
        var saveScore = `${initials.value} Quiz Score: ${score}%`;
        var temp = lastScore + "," + saveScore;
        localStorage.setItem("quizScore", temp);
        for(i = 0; i < check; i++){
            var scores = temp.split(',');
            var scoreList = document.createElement("li");
            scoreList.textContent = scores[i];
            scoreBoard.appendChild(scoreList);
        } 
    }
    scoreBoard.appendChild(scoreList);
    document.getElementById("initials").value = " ";
})