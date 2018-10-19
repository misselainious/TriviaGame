$(document).ready(function () {

$("#gameOver").hide();


//variable to keep track of points
var points = 0;
//variable to loop through question in array
var count = 0;
//variable to hold timer for start of game
var showQuestion;



//Array of questions for the game
var questions = [
    question1 = {
        question: "What celebrity goes by the nickname Tay-Tay?",
        correctAnswer: "Taylor Swift",
        incorrect1: "Tina Fey",
        incorrect2: "Tyra Banks",
        incorrect3: "Tina Turner",
    },
    question2 = {
        question: "Who was the first woman to win a Nobel Prize?",
        incorrect1: "Amelia Earhart",
        incorrect2: "Charlotte Bronte",
        incorrect3: "Susan B. Anthony",
        correctAnswer: "Marie Curie",
    },
    question3 = {
        question: "Which of these women's name was misspelled on their birth certificate and became the name we know them by today?",
        incorrect1: "Beyonce Knowles",
        correctAnswer: "Oprah Winfrey",
        incorrect2: "Halle Berry",
        incorrect3: "Jordin Sparks",
    },
    question4 = {
        question: "In 2014, this actress was presented with the Presidential Medal of Freedom, the highest civilian honor in the US, by President Barack Obama.",
        correctAnswer: "Meryl Streep",
        incorrect1: "Angelina Jolie",
        incorrect2: "Judi Dench",
        incorrect3: "Uma Thurman",
    },
    question5 = {
        question: "Which famous singer cut class so often in High School she got the nickname \"Mirage\"",
        correctAnswer: "Mariah Carey",
        incorrect1: "Madonna",
        incorrect2: "Macy Gray",
        incorrect3: "Mandy Moore",
    }
];
console.log(questions.length);
console.log(count);
//Timer

function timer(){
showQuestion = setInterval(displayQuestion, 12000);
var timerId = setInterval(countdown, 1000); //uses coundown to decrease time by 1 every second

var timeLeft = 10;  //sets timer to 30units

//if time is >0, timer decreases by 1
function countdown() {


    if (timeLeft == -1) {
        clearTimeout(timerId);
        
    } else {
        $("#timer").text(timeLeft + ' seconds remaining');
        timeLeft--;
    }
}
};

  //Game

//shows questions and answers from array one at a time as count increases ----includes shuffle array
function displayQuestion(){
    timer();

    //Answer array shuffles responses
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

//Defines array with answers so they can be shuffled  
var arr = [questions[count].correctAnswer, questions[count].incorrect1, questions[count].incorrect2, questions[count].incorrect3];

  var shuf = shuffle(arr);
  console.log(shuf);

       
    $("#questionArea").text(questions[count].question);

    $("#answer1Button").text(shuf[0]);
    $("#answer4Button").text(shuf[1]); 
    $("#answer2Button").text(shuf[2]);
    $("#answer3Button").text(shuf[3]);
    
    count++;
}

// function nextQuestion(){
//     displayQuestion();

//     if(count === questions.length){
//         $("#gameOver").show();
//     }
// }

function startGame() {
    displayQuestion();
    

//Game Over


//Determining Score


$("#answer1Button").click(function(){
if($("#answer1Button")===questions[count].correctAnswer){
    console.log("Win!");
}

});

$("#answer2Button").click(function(){
console.log("click2");

});

$("#answer3Button").click(function(){
console.log("click3");
});

$("#answer4Button").click(function(){
console.log("click4");
// if($("#answer4Button")===(questions.question1.correctAnswer)){
//     console.log("correctAnswer");
// }else(console.log("incorrect"));

});



    // countdown();
}

function stopGame() {
    clearInterval(showQuestion);
}

$("#startButton").click(startGame);





});