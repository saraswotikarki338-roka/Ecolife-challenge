// ===============================
// Eco Journey - Challenges JS
// ===============================


// Search Challenge Function

const searchInput = document.getElementById("searchChallenge");

const cards = document.querySelectorAll(".challenge-card");


if (searchInput) {

    searchInput.addEventListener("keyup", function () {


        let searchValue = searchInput.value.toLowerCase();


        cards.forEach(function(card) {


            let text = card.textContent.toLowerCase();


            if (text.includes(searchValue)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }


        });


    });

}



// Filter Buttons


const filterButtons = document.querySelectorAll(".filter-buttons button");


filterButtons.forEach(function(button) {


    button.addEventListener("click", function() {


        let filter = button.textContent.toLowerCase();


        cards.forEach(function(card) {


            let difficulty = card.querySelector(".difficulty")
.textContent
.trim()
.toLowerCase();



            if (filter === "all" || difficulty === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }


        });


    });


});



// Complete Challenge Button


const completeButtons = document.querySelectorAll(
".challenge-card button:last-child"
);


completeButtons.forEach(function(button) {


    button.addEventListener("click", function() {


        button.textContent = "Completed ✅";

        button.style.backgroundColor = "#66BB6A";



        let completed =
        Number(localStorage.getItem("completedChallenges"))
        || 0;



        completed++;



        localStorage.setItem(
            "completedChallenges",
            completed
        );



    });


});
// ===============================
// Favourite Challenge System
// Using localStorage
// ===============================


const favouriteButtons = document.querySelectorAll(
    ".challenge-card button:first-of-type"
);


favouriteButtons.forEach(function(button) {


    button.addEventListener("click", function() {


        const card = button.parentElement;


        const challengeName = card.querySelector("h3").textContent;



        let favourites = JSON.parse(
            localStorage.getItem("favourites")
        ) || [];



        if (!favourites.includes(challengeName)) {


            favourites.push(challengeName);


            localStorage.setItem(
                "favourites",
                JSON.stringify(favourites)
            );


            button.textContent = "⭐ Favourite Added";


        } else {


            button.textContent = "⭐ Already Added";


        }



    });


});