// ===============================
// EcoLife Progress Dashboard
// ===============================


// Get favourite challenges

let favourites = JSON.parse(
    localStorage.getItem("favourites")
) || [];



document.getElementById("favouriteCount").innerHTML =
    favourites.length;



// Get completed challenges

let completed =
    Number(localStorage.getItem("completedChallenges"))
    || 0;



document.getElementById("completedCount").innerHTML =
    completed;



// Get quiz score

let quizScore =
    localStorage.getItem("quizScore");



if (quizScore) {


    document.getElementById("quizScore").innerHTML =
    quizScore + "/3";


}

else {


    document.getElementById("quizScore").innerHTML =
    "Not completed";


}




// Calculate overall progress


let progress =
    (completed * 10) + (favourites.length * 5);



if (progress > 100) {

    progress = 100;

}



let progressBar =
    document.getElementById("progress-bar");



progressBar.style.width =
    progress + "%";



progressBar.innerHTML =
    progress + "%";