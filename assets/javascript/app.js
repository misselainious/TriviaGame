$(document).ready(function () { 

    //Variable for points, incorrect, unanswered.
    var points = 0;
    var wrong = 0;
    var unanswered = 0;
    
    //var for counting which question we are on.
    var count = 0;
    var holdQuestion;
    var number = 5;
    var intervalId;
    var timerCount = 0;
    
    $("#startButton").click(startGame);
    //Array of Questions 
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
   //  Set our number counter to x;
   var number = 5;

   //  Variable that will hold interval while executing function
   var intervalId;


   function run() {
    nextQuestion();
     clearInterval(intervalId);
     intervalId = setInterval(decrement, 1000);
     timerCount++;
  
     console.log("timer count: " + timerCount);
     if (timerCount === questions.length){
        endGame();
    };
   }

   //  The decrement function.
   function decrement() {

     //  Decrease number by one.
     number--;

     //  Show the number in the #show-number tag.
     $("#timer").html("<h2>" + number + "</h2>");
     console.log("number: " + number)


     //  Once number hits zero...
     if (number === 0) {

       //  ...run the stop function.
       nextQuestion();

     }
   }

   //  The stop function
   function stop() {

     //  Clears our intervalId
     //  We just pass the name of the interval
     //  to the clearInterval function.
     clearInterval(intervalId);
    
   }

   //  Execute the run function.

    // function timer(){
    // var timerId = setInterval(countdown, 1000); //uses coundown to decrease time by 1 every second
    // var timeLeft = 10;  //sets timer to 10units
    
    // //if time is >0, timer decreases by 1
    // function countdown() {
    
    //     if (timeLeft <0 ) {
    //         clearTimeout(timerId);
            
    //     } else {
    //         $("#timer").text(timeLeft + ' seconds remaining');
    //         timeLeft--;
    //     }
    // }
    // };
    
    //loop through questions

    function showQuestion(){
        number =6;
        var arr = [questions[count].correctAnswer, questions[count].incorrect1, questions[count].incorrect2, questions[count].incorrect3];
  
    shuffle(arr);
        
        $("#questionArea").text(questions[count].question);

        $("#answer1").text(arr[0]);
        $("#answer2").text(arr[1]); 
        $("#answer3").text(arr[2]);
        $("#answer4").text(arr[3]);
    //Score Game
    
    
    if(arr[0]===questions[count].correctAnswer){
        $("#answer1Button").click(function(){
        points++;
        $("#points").text(points);
        run();
    });
    }
    else if(arr[0]!==questions[count].correctAnswer){
    $("#answer1Button").click(function(){
        wrong++;
        $("#wrong").text(wrong);
        run();
    
    });
    }
    if(arr[1]===questions[count].correctAnswer){
        // console.log("ans2but");
        $("#answer2Button").click(function(){
            // console.log("click2");
            points++;
            $("#points").text(points);
            run();
            });
    }
    else if(arr[1]!==questions[count].correctAnswer){
        $("#answer2Button").click(function(){
            wrong++;
            $("#wrong").text(wrong);
            run();
    });
    }
    if(arr[2]===questions[count].correctAnswer){
        // console.log("ans3but");
        $("#answer3Button").click(function(){
            // console.log("click3");
            points++;
            $("#points").text(points);
            run();
            });
    }
    else if(arr[2]!==questions[count].correctAnswer){
        $("#answer3Button").click(function(){
            wrong++;
            $("#wrong").text(wrong);
            run();
    });
    }
    if(arr[3]===questions[count].correctAnswer){
        // console.log("ans4but");
        $("#answer4Button").click(function(){
            // console.log("click4");
            points++;
            $("#points").text(points);
            run();
            });
    }
    else if(arr[3]!==questions[count].correctAnswer){
        $("#answer4Button").click(function(){
            wrong++;
            $("#wrong").text(wrong);
            run();
    });
    }
 
    
    if (count === questions.length){
        endGame();
    }
    
    }
    //increases the count to show the next question in the array, applies timer
    function nextQuestion(){
        count++;
        showQuestion();
        
    }
    
    function startGame() {
        showQuestion();
        run();
    }
    


    //shuffle answers to appear on random buttons
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
    
  
    
    //End Game
    function endGame(){
        $("#questionArea").hide();
        $("#answer1Button").hide();
        $("#answer2Button").hide();
        $("#answer3Button").hide();
        $("#answer4Button").hide();
        $("#timer").hide();
        $("#answer1").hide();
        $("#answer2").hide();
        $("#answer3").hide();
        $("#answer4").hide();
    };
    
    }); //End Document.ready