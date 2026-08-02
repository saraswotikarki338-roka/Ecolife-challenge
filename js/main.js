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