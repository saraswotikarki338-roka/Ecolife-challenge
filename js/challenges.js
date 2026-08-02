// ===============================
// EcoLife Challenge - Challenges JS
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


    });


});