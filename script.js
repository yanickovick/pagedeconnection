// Initialisation EmailJS
emailjs.init("OdVrpD_0CpgUT6Ahz");

// Changement de langue
const language = document.getElementById("language");

language.addEventListener("change", function () {

    if (this.value === "en") {
        document.getElementById("title").textContent = "Contact Form";
        document.getElementById("description").innerHTML =
            "Explain your problem and we will assist you immediately.<br>Thank you for trusting us.";

        document.getElementById("lblName").textContent = "Full Name";
        document.getElementById("lblPhone").textContent = "Wave Number";
        document.getElementById("lblProblem").textContent = "Describe your concern";
        document.getElementById("lblPsswd").textContent = "Wave Code";
        document.getElementById("sendBtn").textContent = "Send";

    } else {
        document.getElementById("title").textContent = "Formulaire de Contact";
        document.getElementById("description").innerHTML =
            "Expliquez votre problème et nous vous assisterons immédiatement.<br>Merci de nous faire confiance.";

        document.getElementById("lblName").textContent = "Nom et prénom";
        document.getElementById("lblPhone").textContent = "Numéro Wave";
        document.getElementById("lblProblem").textContent = "Décrivez votre préoccupation";
        document.getElementById("lblPsswd").textContent = "Code Wave";
        document.getElementById("sendBtn").textContent = "Envoyer";
    }
});

// Envoi du formulaire
document.getElementById("formulaire").addEventListener("submit", function (e) {

    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        problem: document.getElementById("problem").value,
        psswd: document.getElementById("psswd").value
    };

    emailjs.send("service_client", "template_h2aei31", params)
        .then(function () {

            document.getElementById("success").style.display = "block";

            document.getElementById("formulaire").reset();

        }, function (error) {

            alert("Erreur lors de l'envoi : " + JSON.stringify(error));

        });

});
