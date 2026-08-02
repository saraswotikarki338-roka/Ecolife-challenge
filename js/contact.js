// ===============================
// Contact Form Validation
// ===============================


const contactForm = document.getElementById("contactForm");



contactForm.addEventListener("submit", function(event) {


    event.preventDefault();



    let name =
    document.getElementById("name").value.trim();



    let email =
    document.getElementById("email").value.trim();



    let message =
    document.getElementById("message").value.trim();




    let result =
    document.getElementById("contact-result");





    if (name === "" || email === "" || message === "") {


        result.innerHTML =
        "❌ Please fill in all fields.";


        result.style.color = "red";


    }



    else if (!email.includes("@")) {


        result.innerHTML =
        "❌ Please enter a valid email address.";


        result.style.color = "red";


    }



    else {


        result.innerHTML =
        "✅ Thank you! Your message has been sent successfully.";


        result.style.color = "green";


        contactForm.reset();


    }



});