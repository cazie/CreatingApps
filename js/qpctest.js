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

        question : "This is how we copy text on computer screen?",
        imgSrc : "img/js.png",
        choiceA : "right-click Copy",
        choiceB : "Ctrl-C",
        choiceC : "Ctrl-V",
        choiceD :"A and B",
        correct : "D",
    },{
        question : "This is how we paste text on computer screen?",
        imgSrc : "img/html.png",
        choiceA : "right-click Paste",
        choiceB : "Ctrl-C",
        choiceC : "Ctrl-P",
        choiceD :"A and C",
        correct : "C"
 
    },{
        question : "What does HTML stand for?",
        imgSrc : "img/html.png",
        choiceA : "Hyper Text Markup Language",
        choiceB : "Home Tool Markup Language",
        choiceC : "Highway Tech Markup Language",
        choiceD : "Hyper Tech Markup Language",
        correct : "A"
    },{
        question : "How do you copy text on a Windows computer?",
        imgSrc : "img/copy.png",
        choiceA : "Ctrl + V",
        choiceB : "Ctrl + C",
        choiceC : "Ctrl + X",
        choiceD : "Ctrl + Z",
        correct : "B"
    },{
        question : "What is a web browser?",
        imgSrc : "img/browser.png",
        choiceA : "Software that allows you to access the internet",
        choiceB : "Hardware that connects your computer to the internet",
        choiceC : "A type of search engine",
        choiceD : "Software used for editing web pages",
        correct : "A"
        
    },{
        question : "How do you save a file on a Mac?",
        imgSrc : "img/save.png",
        choiceA : "Command + S",
        choiceB : "Control + S",
        choiceC : "Shift + S",
        choiceD : "Option + S",
        correct : "A"
        
    },{
        question : "How do you create a new folder on a Windows computer?",
        imgSrc : "img/folder.png",
        choiceA : "Right-click and select New > Folder",
        choiceB : "Click and drag a file to the desktop",
        choiceC : "Press the F5 key",
        choiceD : "Click on the Recycle Bin",
        correct : "A"
        
    },{
        question : "What is a URL?",
        imgSrc : "img/url.png",
        choiceA : "A web address that identifies a specific webpage",
        choiceB : "A type of file format used for images",
        choiceC : "An acronym for Universal Resource Locator",
        choiceD : "A type of programming language",
        correct : "A"
        
    },{
        question : "What is a CPU?",
        imgSrc : "img/cpu.png",
        choiceA : "The central processing unit, which processes data in a computer",
        choiceB : "A type of monitor",
        choiceC : "A type of keyboard",
        choiceD : "A type of printer",
        correct : "A"
        
    },{
        question : "How do you search the web using Google?",
        imgSrc : "img/google.png",
        choiceA : "Type your search query into the search box and press Enter",
        choiceB : "Click on the Google logo",
        choiceC : "Type your search query into the address bar",
        choiceD : "Click on the Bookmarks button",
        correct : "A"
        
    },{
        question : "What is the shortcut key to copy text?",
        imgSrc : "img/copy.png",
        choiceA : "Ctrl+C",
        choiceB : "Ctrl+X",
        choiceC : "Ctrl+V",
        choiceD : "Ctrl+Z",
        correct : "A"
        
    },{
        question : "What is the shortcut key to cut text?",
        imgSrc : "img/cut.png",
        choiceA : "Ctrl+X",
        choiceB : "Ctrl+C",
        choiceC : "Ctrl+V",
        choiceD : "Ctrl+Z",
        correct : "A"
        
    },{
        question : "How do you save a file?",
        imgSrc : "img/save.png",
        choiceA : "Ctrl+S",
        choiceB : "Ctrl+A",
        choiceC : "Ctrl+P",
        choiceD : "Ctrl+X",
        correct : "A"
        
    },{
        question : "What is the shortcut key to open the task manager?",
        imgSrc : "img/task-manager.png",
        choiceA : "Ctrl+Shift+Esc",
        choiceB : "Ctrl+Alt+Delete",
        choiceC : "Ctrl+Alt+Esc",
        choiceD : "Ctrl+Shift+Delete",
        correct : "A"
        
    },{
        question : "How do you open a new tab in a web browser?",
        imgSrc : "img/new-tab.png",
        choiceA : "Press 'Ctrl+T'",
        choiceB : "Press 'Ctrl+N'",
        choiceC : "Press 'Ctrl+W'",
        choiceD : "Press 'Ctrl+P'",
        correct : "A"
        
    },{
        question : "What is the shortcut key to refresh a web page?",
        imgSrc : "img/refresh.png",
        choiceA : "F5",
        choiceB : "Ctrl+R",
        choiceC : "Alt+R",
        choiceD : "Ctrl+F5",
        correct : "A"
        
    },
    {
        question : "Which of these is not a search browser?",
        imgSrc : "img/browsers.png",
        choiceA : "Firefox",
        choiceB : "Chrome",
        choiceC : "Safari",
        choiceD : "Microsoft Word",
        correct : "D"
        
    },
    {
        question : "What is the shortcut key to refresh a web page?",
        imgSrc : "img/refresh.png",
        choiceA : "F5",
        choiceB : "Ctrl+R",
        choiceC : "Alt+R",
        choiceD : "Ctrl+F5",
        correct : "A"
        
    },
    {
        question : "What is programming?",
        imgSrc : "img/programming.png",
        choiceA : "The process of creating software programs using programming languages",
        choiceB : "The act of repairing computer hardware",
        choiceC : "The process of designing web pages using HTML",
        choiceD : "The process of organizing and storing data on a computer",
        correct : "A"
        
    },
    {
        question : "What is a spreadsheet?",
imgSrc : "img/spreadsheet.png",
choiceA : "A tool for organizing and analyzing data in rows and columns",
choiceB : "A type of computer monitor",
choiceC : "A type of printer",
choiceD : "A type of network cable",
correct : "A"
        
    },
    {
        question : "What is RAM?",
imgSrc : "img/ram.png",
choiceA : "A type of computer memory used for running programs",
choiceB : "A type of keyboard",
choiceC : "A type of computer mouse",
choiceD : "A type of computer monitor",
correct : "A"
        
    },
    {
        question : "What is a virus?",
imgSrc : "img/virus.png",
choiceA : "A malicious program that can harm your computer",
choiceB : "A type of computer hardware",
choiceC : "A type of computer monitor",
choiceD : "A type of printer",
correct : "A"
        
    },
    {
        question : "What is RAM?",
imgSrc : "img/ram.png",
choiceA : "A type of computer memory used for running programs",
choiceB : "A type of keyboard",
choiceC : "A type of computer mouse",
choiceD : "A type of computer monitor",
correct : "A"
        
    },
    {
        question : "What is a spreadsheet?",
imgSrc : "img/spreadsheet.png",
choiceA : "A tool for organizing and analyzing data in rows and columns",
choiceB : "A type of computer monitor",
choiceC : "A type of printer",
choiceD : "A type of network cable",
correct : "A"
        
    },
    {
        question: "Which keyboard shortcut can be used to open a file in most programs?",
imgSrc : "img/file.png",
choiceA : "Ctrl + P",
choiceB : "Ctrl + F",
choiceC : "Ctrl + S",
choiceD : "Ctrl + O",
correct : "D"
        
    },
    {
        question: "What is the function of the Ctrl + Alt + Delete keyboard shortcut in Windows?",
imgSrc : "img/ctrl-alt-del.png",
choiceA : "Opens the Task Manager",
choiceB : "Locks the computer",
choiceC : "Logs off the current user",
choiceD : "All of the above",
correct : "D"
        
    },
    {
        question: "What does 'CC' stand for in email?",
        imgSrc : "img/email.png",
        choiceA : "Carbon Copy",
        choiceB : "Close Copy",
        choiceC : "Correct Copy",
        choiceD : "Copy Cat",
        correct : "A"
        
    },
    {
        question: "Which of the following is a common way to organize emails in an email client?",
imgSrc : "img/email.png",
choiceA : "Inboxes",
choiceB : "Labels",
choiceC : "Folders",
choiceD : "All of the above",
correct : "D"
        
    },
    {
        question: "Which of the following is NOT a common email provider?",
        imgSrc : "img/email.png",
        choiceA : "Gmail",
        choiceB : "Yahoo",
        choiceC : "Hotmail",
        choiceD : "Bluetooth",
        correct : "D"
        
    },
    {
        question: "What is the keyboard shortcut to open a file in most software applications?",
        imgSrc: "img/keyboard.png",
        choiceA : "Ctrl + Shift + O",
        choiceB : "Ctrl + O",
        choiceC : "Ctrl + S",
        choiceD : "Ctrl + Shift + S",
        correct : "B"
        
    },
    {
        question: "Which of the following is NOT a common email provider?",
        imgSrc : "img/email.png",
        choiceA : "Gmail",
        choiceB : "Yahoo",
        choiceC : "Hotmail",
        choiceD : "Bluetooth",
        correct : "D"
        
    },
    {
        question: "How do you save a file with a new name?",
        imgSrc : "img/saveas.png",
        choiceA : "Ctrl + S",
        choiceB : "Ctrl + Shift + S",
        choiceC : "Ctrl + Shift + N",
        choiceD : "Ctrl + Alt + S",
        correct : "B"
        
    },
    {
        question: "What is the difference between 'Save' and 'Save As'?",
        imgSrc : "img/save.png",
        choiceA : "There is no difference",
        choiceB : "Save As saves a new copy with a different name or location",
        choiceC : "Save As is a shortcut for Save",
        choiceD : "Save only works with certain file types",
        correct : "B"
        
    },
    {
        question: "Which of the following is NOT a common email provider?",
        imgSrc : "img/email.png",
        choiceA : "Gmail",
        choiceB : "Yahoo",
        choiceC : "Hotmail",
        choiceD : "Bluetooth",
        correct : "D"
        
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
        scoreDiv.innerHTML +='<a href="whatittakes50.html"> Next Steps 50+</a>'
    }else{
        scoreDiv.innerHTML +='<a href="whatittakes.html"> Next Steps under 50</a>'
    }
    
}





















