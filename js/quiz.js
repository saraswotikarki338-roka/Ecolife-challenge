// ===============================
// EcoLife Quiz System
// ===============================


const quizForm = document.getElementById("quizForm");



quizForm.addEventListener("submit", function(event) {


    event.preventDefault();



    let score = 0;



    // Get answers

    let q1 = document.querySelector(
        'input[name="q1"]:checked'
    );


    let q2 = document.querySelector(
        'input[name="q2"]:checked'
    );


    let q3 = document.querySelector(
        'input[name="q3"]:checked'
    
    );




    // Check answers


    if (q1 && q1.value === "correct") {

        score++;

    }



    if (q2 && q2.value === "correct") {

        score++;

    }



    if (q3 && q3.value === "correct") {

        score++;

    }




    // Display result


    let result = document.getElementById(
        "quiz-result"
    );



    if (score === 3) {


        result.innerHTML =
        "🌍 Excellent! You are an Eco Expert! Score: "
        + score + "/3";


    }


    else if (score === 2) {


        result.innerHTML =
        "👍 Good job! Keep learning. Score: "
        + score + "/3";


    }


    else {


        result.innerHTML =
        "🌱 Keep improving your eco knowledge. Score: "
        + score + "/3";


    }
    // Save quiz score
localStorage.setItem(
    "quizScore",
    score
);



});