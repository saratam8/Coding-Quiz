var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var startButton = document.getElementById("start");
var timer = document.querySelector(".time");
var seconds = 60;
var i = 0;

var correctChoices = ["C", "A", "D", "B", "A"];
var userAnswers = [];

function startTimer(){
    var timerInterval = setInterval(function(){
        seconds--;
        timer.textContent = "Seconds left: " + seconds;

        if(seconds === 0){
            clearInterval(timerInterval);
            timer.style.display = "none";
            question.textContent = "Time's Up!";
            choiceA.style.display = "none";
            choiceB.style.display = "none";
            choiceC.style.display = "none";
            choiceD.style.display = "none";
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

// console.log(quizQuestions[0]);
// console.log(quizQuestions[i].question);
// console.log(quizQuestions[i].choiceA);
// console.log(quizQuestions[i].choiceB);
// console.log(quizQuestions[i].choiceC);
// console.log(quizQuestions[i].choiceD);
    
choiceA.addEventListener("click", function(event){
    userAnswers[i] = "A";
    if(userAnswers[i] != correctChoices[i]){
        seconds = seconds - 10;
    }
    console.log(userAnswers);
    i++;
    if(i >= quizQuestions.length){
        timer.style.display = "none";
        question.textContent = "Quiz Complete!";
        choiceA.style.display = "none";
        choiceB.style.display = "none";
        choiceC.style.display = "none";
        choiceD.style.display = "none";
        return;
    }
    printQuiz();
});

choiceB.addEventListener("click", function(event){
    userAnswers[i] = "B";
    if(userAnswers[i] != correctChoices[i]){
        seconds = seconds - 10;
    }
    console.log(userAnswers);
    i++;
    if(i >= quizQuestions.length){
        timer.style.display = "none";
        question.textContent = "Quiz Complete!";
        choiceA.style.display = "none";
        choiceB.style.display = "none";
        choiceC.style.display = "none";
        choiceD.style.display = "none";
        return;
    }
    printQuiz();
});

choiceC.addEventListener("click", function(event){
    userAnswers[i] = "C";
    if(userAnswers[i] != correctChoices[i]){
        seconds = seconds - 10;
    }
    console.log(userAnswers);
    i++;
    if(i >= quizQuestions.length){
        timer.style.display = "none";
        question.textContent = "Quiz Complete!";
        choiceA.style.display = "none";
        choiceB.style.display = "none";
        choiceC.style.display = "none";
        choiceD.style.display = "none";
        return;
    }
    printQuiz();
});

choiceD.addEventListener("click", function(event){
    userAnswers[i] = "D";
    if(userAnswers[i] != correctChoices[i]){
        seconds = seconds - 10;
    }
    console.log(userAnswers);
    i++;
    if(i >= quizQuestions.length){
        timer.style.display = "none";
        question.textContent = "Quiz Complete!";
        choiceA.style.display = "none";
        choiceB.style.display = "none";
        choiceC.style.display = "none";
        choiceD.style.display = "none";
        return;
    }
    printQuiz();
});


// if(i >= quizQuestions.length){
//     choiceA.style.display = "none";
//     choiceB.style.display = "none";
//     choiceC.style.display = "none";
//     choiceD.style.display = "none";
// }

startButton.addEventListener("click", function(event){
    event.preventDefault();
    startButton.style.display = "none";
    startTimer();
    printQuiz();
    
})

// need  to localstorage the score and name of user

//make the multiple choice answers buttons

//need timer