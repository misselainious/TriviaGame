$(document).ready(function () {

$("#gameOver").hide();


//variable to keep track of points
var points = 0;
var wrong = 0;
//variable to loop through question in array
var count = 0;
//variable to hold timer for start of game
var showQuestion;



//Array of questions for the game
var questions = [
    question1 = {
        question: "Colonel Sander's highest level of education was:",
        correctAnswer: "Sixth Grade",
        incorrect1: "PhD",
        incorrect2: "High School",
        incorrect3: "Bachelor's",
    },
    question2 = {
        question: "Col. Sanders lost most of his money trying to sell an indoor lighting system based on:",
        incorrect1: "jet fuel",
        incorrect2: "electricty",
        incorrect3: "vegetable oil",
        correctAnswer: "acetylene gas",
    },
    question3 = {
        question: "Col. Sanders got in a fight with someone while they were:",
        incorrect1: "on their horse",
        correctAnswer: "sitting in a barber chair",
        incorrect2: "eating a salad",
        incorrect3: "listening to headphones",
    },
    question4 = {
        question: "Among many things, Col. Sanders was a trusted_____ and once used a shotgun to help with a situation.",
        correctAnswer: "midwife",
        incorrect1: "dentist",
        incorrect2: "lawyer",
        incorrect3: "cat-sitter",
    },
    question5 = {
        question: "For entertainment, Sanders would occasionally take customers around back to listen to a:",
        incorrect1: "record player",
        incorrect2: "song he wrote",
        correctAnswer: "braying jackass",
        incorrect3: "squealing pig",
        
    }
];

//Timer

function timer(){
showQuestion = setInterval(displayQuestion, 12000);
var timerId = setInterval(countdown, 1000); //uses coundown to decrease time by 1 every second
count++;
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

  //Game

//shows questions and answers from array one at a time as count increases ----includes shuffle array
function displayQuestion(){
    timer();


    //Answer array shuffles responses


//Defines array with answers so they can be shuffled  
var arr = [questions[count].correctAnswer, questions[count].incorrect1, questions[count].incorrect2, questions[count].incorrect3];
console.log('arr', arr)
shuffle(arr);
       
    $("#questionArea").text(questions[count].question);

    console.log("shuf0" + arr[0]);
    console.log("shuf1" + arr[1]);
    console.log("shuf2" + arr[2]);
    console.log("shuf3" + arr[3]);

    
    $("#answer1").text(arr[0]);
    $("#answer2").text(arr[1]); 
    $("#answer3").text(arr[2]);
    $("#answer4").text(arr[3]);
    
//Determining Score

    if(arr[0]===questions[count].correctAnswer){
        $("#answer1").click(function(){
        points++;
        $("#points").text(points);
        displayQuestion();
    });
}
else if(arr[0]!==questions[count].correctAnswer){
    $("#answer1").click(function(){
        wrong++;
        $("#wrong").text(wrong);
    displayQuestion();
    
});
}
    if(arr[1]===questions[count].correctAnswer){
        // console.log("ans2but");
        $("#answer2").click(function(){
            // console.log("click2");
            points++
            $("#points").text(points);
            displayQuestion();
            });
    }
    else if(arr[1]!==questions[count].correctAnswer){
        $("#answer2").click(function(){
            wrong++;
            $("#wrong").text(wrong);
        displayQuestion();
    });
    }
    if(arr[2]===questions[count].correctAnswer){
        // console.log("ans3but");
        $("#answer3").click(function(){
            // console.log("click3");
            points++
            $("#points").text(points);
            displayQuestion();
            });
    }
    else if(arr[2]!==questions[count].correctAnswer){
        $("#answer3").click(function(){
            wrong++;
            $("#wrong").text(wrong);
        displayQuestion();
    });
    }
    if(arr[3]===questions[count].correctAnswer){
        // console.log("ans4but");
        $("#answer4").click(function(){
            // console.log("click4");
            points++
            $("#points").text(points);
            displayQuestion();
            });
    }
    else if(arr[3]!==questions[count].correctAnswer){
        $("#answer4").click(function(){
            wrong++;
            $("#wrong").text(wrong);
        displayQuestion();
    });
    }


}

// function nextQuestion(){
//     displayQuestion();

//     if(count === questions.length){
//         $("#gameOver").show();
//     }
// }

function startGame() {
    displayQuestion();
    $("#startButton").hide();

//Game Over






    // countdown();
}

function stopGame() {
    clearInterval(showQuestion);
}

$("#startButton").click(startGame);



});