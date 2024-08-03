
const Questions = [{
    id: 0,
    question: "Who is the king of pop?",
    answer: [{ text: "Michael Jackson", correct: true },
        { text: "Justin Bieber", correct: false },
        { text: "The Weeknd", correct: false },
        { text: "Ed Sheeran", correct: false }
    ]

},
{
    id: 1,
    question: "What is taylor swift's first full pop album after being a country artist for years?",
    answer: [{ text: "Speak now", correct: false },
        { text: "Red", correct: false },
        { text: "1989", correct: true },
        { text: "Reputation", correct: false }
    ] 
},
{
    id: 2,
    question: "Which singer recorded the first country song to sell one million copies?",
    answer: [{ text: "Brad Paisley's 'Remind Me'", correct: false },
        { text: "Shania Twain's 'Still The One'", correct: false },
        { text: "Tim McGraw's 'Dont Take The Girl'", correct: false },
        { text: "Vernon Dalhart's 'The Wreck of the Old 97'", correct: true }
    ]

},
{
    id: 3,
    question: "Lauryn Hill was a member of which band formed in 1994?",
    answer: [{ text: "The fugees", correct: true },
        { text: "All Saints", correct: false },
        { text: "Salt-N-Pepa", correct: false },
        { text: "The spice girls", correct: false }
    ]

},
{
    id: 4,
    question: "Which of these songs is on Lana's album Ultraviolence?",
    answer: [{ text: "Doin' Time", correct: false },
    { text: "West Coast", correct: true },
    { text: "Born to die", correct: false },
    { text: "Yes to heaven", correct: false }
    ]

},
{
    id: 5,
    question: " Which band hails from Germany and is known for their rock anthem 'Rock You Like a Hurricane'?",
    answer: [{ text: "Scorpions", correct: true },
        { text: "Metallica", correct: false },
        { text: "Led Zeppelin", correct: false },
        { text: "Queen", correct: false }
    ]

},
{
    id: 6,
    question: "Who is the youngest person to score a billboard hot 100 hit?",
    answer: [{ text: "Billie Eilish", correct: false },
        { text: "Miley Cyrus", correct: false },
        { text: "Olivia Rodrigo", correct: false },
        { text: "Blue Ivy Carter", correct: true }
    ]

},
{
    id: 7,
    question: "Who won the Album of the year at 2020 Grammys?",
    answer: [{ text: "thank u, next by Ariana Grande", correct: false },
        { text: "I Used to Know Her by H.E.R", correct: false },
        { text: "when we all fall asleep, where do we go? by Billie Eilish", correct: true },
        { text: "Father of the Bride by Vampire Weekend", correct: false }
    ]

},
{
    id: 8,
    question: "Which legendary band is often referred to as 'The Greatest Rock 'n' Roll Band in the World'",
    answer: [{ text: "Rolling Stones", correct: true },
        { text: "Boston", correct: false },
        { text: "Lynyrd Skynyrd", correct: false },
        { text: "the Doors", correct: false }
    ]

},
{
    id: 9,
    question: "Who performed at the 2023 Super Bowl?",
    answer: [{ text: "The weeknd", correct: false },
        { text: "Rihanna", correct: true },
        { text: "Nicki Minaj", correct: false },
        { text: "Drake", correct: false }
    ]

},
]


let start = true;
let currentQuestionNo = 1;
let selected = "";
let score = 0 ;


const question = document.getElementById("question");

const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


function iteration(id) {
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";


    document.getElementById("number").innerHTML = "Question: " + currentQuestionNo + " / 10";

    if(currentQuestionNo == 10){
        next.textContent = 'Result';
    }


    question.innerText = Questions[id].question;



    op1.innerText = Questions[id].answer[0].text;
    op2.innerText = Questions[id].answer[1].text;
    op3.innerText = Questions[id].answer[2].text;
    op4.innerText = Questions[id].answer[3].text;


    op1.value = Questions[id].answer[0].correct;
    op2.value = Questions[id].answer[1].correct;
    op3.value = Questions[id].answer[2].correct;
    op4.value = Questions[id].answer[3].correct;


function showSelections(option) {
    option.addEventListener("click", () => {
      selected = option.value;
  
      if (selected === "true") {
        option.classList.add("correct");
        
        result[0].style.color = "green";
      } else {
        option.classList.add("incorrect");
  
   
        const correctAnswerOption = document.querySelector('[value="true"]');
        correctAnswerOption.classList.add("correct");
        result[0].style.color = "red";
      }
  

      deactivate();
    });
  }


showSelections(op1);
showSelections(op2);
showSelections(op3);
showSelections(op4);



}

var buttonStatus = false;

function deactivate(){
op1.deactivated = true;
op2.deactivated = true;
op3.deactivated = true;
op4.deactivated = true;
buttonStatus = true;
}

function activate(){
op1.deactivated = false;
op2.deactivated = false;
op3.deactivated = false;
op4.deactivated = false;
buttonStatus = false;

//remove button color
op1.classList.remove("correct", "incorrect");
op2.classList.remove("correct", "incorrect");
op3.classList.remove("correct", "incorrect");
op4.classList.remove("correct", "incorrect");
}


if (start) {
iteration("0");
}

const next = document.getElementsByClassName('next')[0];

var id = 0;

next.addEventListener("click", () => {

if (!buttonStatus) {
    window.alert("Choose an answer!");
    return;
}

if (selected == "true"){
    score++;
    selected = "";
}

start = false;
if (currentQuestionNo < 10) {
    id++;
    currentQuestionNo++;
    iteration(id);
    activate();
}else {
    document.querySelector(".heading").textContent = "Congratulations, Quiz completed!";
    endResults()
}
})

//setting a timer
let time=60;	//make it 60s						
var counter=setInterval(timer, 1000); 
function timer() {	
    time--;
    if (time == 0) {
        if (selected == "true"){
            score++;
            selected = "";
        }
        //display an alert messege when the time is over
        document.querySelector(".heading").textContent = "Your time is over!";
        endResults()
    }
    //when the user is doing the quiz shows the timer in the top of the container
    document.getElementById("timer").innerHTML = "You got " + time + " seconds left"; 
}   
//creating the final output of the quiz
function endResults() {
    clearInterval(counter);
    document.querySelector(".panel").style.display = "none";
    document.querySelector(".end").style.display = "flex";
    document.querySelector(".score").innerHTML = "You got " + score + " out of 10 correct";

    const percentage = (score / 10) * 100;
    document.querySelector(".grade").textContent = "Your grade: " + percentage + "%";

    var timeTaken = 60 - time;
    document.querySelector(".time").innerHTML = "You took: " + timeTaken + " s";

    if (percentage >= 60) {          //if the user did the quiz well it shows this
        document.querySelector(".comment").textContent = "Excellent";
        document.querySelector(".comment").style.color = "green";
        document.querySelector(".ender").classList.add("excellent");
    } else {                         //if user did a poor job it shows this
        document.querySelector(".comment").textContent = "You need to improve";
        document.querySelector(".comment").style.color = "red";
        document.querySelector(".ender").classList.remove("excellent");
    }
}

    



    
      