// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const whatNext = document.getElementById("whatNext");

// create our questions
let questions = [
    {

        question : "If a = 3, b = 4, and c = a = b What is c?",
        imgSrc : "img/js.png",
        choiceA : "-1",
        choiceB : "1",
        choiceC : "7",
        choiceD :"undefined",
        correct : "C",
    },{
        question : "What is the correct spelling of the underlined word? the boy missed all the work due to his <u>ABSENSE</u>",
        imgSrc : "img/html.png",
        choiceA : "absence",
        choiceB : "absense",
        choiceC : "abcanse",
        choiceD : "abcense",
        correct : "A"
 
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    },{
        question : "If a = 3, b = 4, and c = a = b What is c?",
        imgSrc : "img/js.png",
        choiceA : "-1",
        choiceB : "1",
        choiceC : "7",
        choiceD : "Wrong",
        correct : "C"
        
    },{
        question : "What number is one quarter of one tenth of one fifth of 200?",
        imgSrc : "img/js.png",
        choiceA : ".25",
        choiceB : ".5",
        choiceC : "10",
        choiceD : "1",
        correct : "D"
        
    },{
        question : "3, 7, 13, 21, 31. What number comes next in the sequence?",
        imgSrc : "img/js.png",
        choiceA : "49",
        choiceB : "39",
        choiceC : "34",
        choiceD : "43",
        correct : "D"
        
    },{
        question : "If a = 3, b = 4, and c = a = b What is c?",
        imgSrc : "img/js.png",
        choiceA : "-1",
        choiceB : "1",
        choiceC : "7",
        choiceD : "Wrong",
        correct : "C"
        
    },{
        question : "Which of the following is an anagram for \"Intelligence Tests\"?",
        imgSrc : "img/js.png",
        choiceA : "Clientele Setting",
        choiceB : "Genetic Littleness",
        choiceC : "All of the above",
        choiceD : "None of the above",
        correct : "B"
        
    },{
        question : "A, B, D, G, K. Which letter comes next in the sequence?",
        imgSrc : "img/js.png",
        choiceA : "N",
        choiceB : "P",
        choiceC : "M",
        choiceD : "O",
        correct : "B"
        
    },{
        question : "Select the next item in the pattern?",
        imgSrc : "img/qops5.png",
        choiceA : "A",
        choiceB : "B",
        choiceC : "C",
        choiceD : "D",
        correct : "C"
        
    },{
        question : "The mystery number is between 60 and 150, a multiple of 7, and the sum of its digits is 10. What is the mystery number?",
        imgSrc : "img/js.png",
        choiceA : "63",
        choiceB : "84",
        choiceC : "91",
        choiceD : "none of above",
        correct : "C"
        
    },{
        question : "If a = 3, b = 4, and c = a = b What is c?",
        imgSrc : "img/js.png",
        choiceA : "-1",
        choiceB : "1",
        choiceC : "7",
        choiceD : "Wrong",
        correct : "C"
        
    },{
        question : "Select the word with the closest meaning to the underlined word in the sentence.<br /> I <u>understand</u> you never had Mr. Angel's address",
        imgSrc : "img/js.png",
        choiceA : "pretend",
        choiceB : "introduce",
        choiceC : "joke",
        choiceD : "recognize",
        correct : "D"
        
    },{
        question : "If a = 3, b = 4, and c = a = b What is c?",
        imgSrc : "img/js.png",
        choiceA : "-1",
        choiceB : "1",
        choiceC : "7",
        choiceD : "Wrong",
        correct : "C"
        
    },{
        question : "If a = 3, b = 4, and c = a = b What is c?",
        imgSrc : "img/js.png",
        choiceA : "-1",
        choiceB : "1",
        choiceC : "7",
        choiceD : "Wrong",
        correct : "C"
        
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    if(scorePerCent >= 50){ 
        scoreDiv.innerHTML +='<a href="whatittakes50.html"> Click here for next Steps 50+</a>'
    }else{
        scoreDiv.innerHTML +='<a href="whatittakes.html"> Click here for next Steps under 50</a>'
    }
    
}





















