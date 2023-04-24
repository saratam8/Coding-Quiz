var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");

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

var i = 0;

function printQuiz(){
question.textContent = quizQuestions[i].question;
choiceA.textContent = quizQuestions[i].choiceA;
choiceB.textContent = quizQuestions[i].choiceB;
choiceC.textContent = quizQuestions[i].choiceC;
choiceD.textContent = quizQuestions[i].choiceD;
}

printQuiz();

// console.log(quizQuestions[0]);
// console.log(quizQuestions[i].question);
// console.log(quizQuestions[i].choiceA);
// console.log(quizQuestions[i].choiceB);
// console.log(quizQuestions[i].choiceC);
// console.log(quizQuestions[i].choiceD);
    
choiceA.addEventListener("click", function(event){
    i++;
    printQuiz();
});

choiceB.addEventListener("click", function(event){
    i++;
    printQuiz();
});

choiceC.addEventListener("click", function(event){
    i++;
    printQuiz();
});

choiceD.addEventListener("click", function(event){
    i++;
    printQuiz();
});

// need  to localstorage the score and name of user

//make the multiple choice answers buttons

//need timer