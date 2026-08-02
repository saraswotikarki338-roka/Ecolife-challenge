// ===============================
// Carbon Footprint Calculator
// ===============================


const carbonForm = document.getElementById("carbonForm");


carbonForm.addEventListener("submit", function(event) {


    event.preventDefault();



    // Get user values

    let transport = Number(
        document.getElementById("transport").value
    );


    let electricity = Number(
        document.getElementById("electricity").value
    );


    let food = Number(
        document.getElementById("food").value
    );


    let recycling = Number(
        document.getElementById("recycling").value
    );




    // Carbon calculation

    let carbonScore =
        (transport * 2) +
        (electricity * 3) +
        (food * 2) -
        (recycling * 1);




    // Prevent negative results

    if (carbonScore < 0) {

        carbonScore = 0;

    }




    // Display result


    let result = document.getElementById("result");


    if (carbonScore < 30) {


        result.innerHTML =
        "🌱 Excellent! Your carbon footprint is low. Score: "
        + carbonScore;


    }


    else if (carbonScore < 60) {


        result.innerHTML =
        "👍 Good job! There is room for improvement. Score: "
        + carbonScore;


    }


    else {


        result.innerHTML =
        "🌍 Your footprint is high. Try more eco-friendly habits. Score: "
        + carbonScore;


    }



});