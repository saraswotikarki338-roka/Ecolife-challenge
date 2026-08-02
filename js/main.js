// ===============================
// EcoLife Challenge - Main JavaScript
// ===============================

// Welcome Message
window.onload = function () {
    alert("Welcome to EcoLife Challenge!");
};

// Start Challenge Button
const startButton = document.getElementById("startButton");

if (startButton) {
    startButton.addEventListener("click", function () {
        window.location.href = "challenges.html";
    });
}

// Daily Eco Facts
const ecoFacts = [
    "Recycling one aluminium can saves enough energy to power a TV for 3 hours.",
    "Turning off the tap while brushing your teeth can save up to 6 litres of water.",
    "Planting trees helps reduce carbon dioxide in the atmosphere.",
    "Using reusable bags reduces plastic pollution.",
    "Switching off unused lights helps save electricity."
];

const fact = document.getElementById("fact");

if (fact) {

    const randomFact = Math.floor(Math.random() * ecoFacts.length);

    fact.innerHTML = ecoFacts[randomFact];

}
// ===============================
// Learn Page Read More Buttons
// ===============================


const learnButtons = document.querySelectorAll(
    ".learn-card button"
);



learnButtons.forEach(function(button) {


    button.addEventListener("click", function() {


        const topic = button.parentElement.querySelector("h3").textContent;


        if (topic.includes("Recycling")) {


            alert(
                "Recycling helps reduce waste, saves resources, and protects nature. Try separating paper, plastic, glass and metal."
            );


        }


        else if (topic.includes("Water")) {


            alert(
                "Saving water helps protect freshwater supplies. Simple actions like shorter showers and fixing leaks make a difference."
            );


        }


        else if (topic.includes("Energy")) {


            alert(
                "Reducing energy use lowers carbon emissions. Switch off unused lights and devices whenever possible."
            );


        }


        else if (topic.includes("Plastic")) {


            alert(
                "Reducing plastic waste protects oceans and wildlife. Choose reusable bags and bottles where possible."
            );


        }


    });


});