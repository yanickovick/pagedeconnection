const formulaire = document.getElementById("formulaire");
const success = document.getElementById("success");

formulaire.addEventListener("submit", function(e){

    e.preventDefault();

    success.style.display="block";

    formulaire.reset();

});const language = document.getElementById("language");

language.addEventListener("change", function () {

    if (this.value === "en") {

        document.getElementById("title").textContent = "Contact Form";

        document.getElementById("description").innerHTML =
            "Explain your problem and we will assist you immediately.<br>Thank you for trusting us.";

        document.getElementById("lblName").textContent = "Full Name";
        document.getElementById("lblPhone").textContent = "Phone Number";
        document.getElementById("lblProblem").textContent = "Describe your concern";
        document.getElementById("lblPromo").textContent = "Promo Code";
        document.getElementById("sendBtn").textContent = "Send";

    } else {

        document.getElementById("title").textContent = "Formulaire de Contact";

        document.getElementById("description").innerHTML =
            "Expliquez votre problème et nous vous assisterons immédiatement.<br>Merci de nous faire confiance.";

        document.getElementById("lblName").textContent = "Nom et prénom";
        document.getElementById("lblPhone").textContent = "Numéro";
        document.getElementById("lblProblem").textContent = "Décrivez votre préoccupation";
        document.getElementById("lblPromo").textContent = "Code promo";
        document.getElementById("sendBtn").textContent = "Envoyer";
    }

});