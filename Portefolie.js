const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.5});

sections.forEach((section) => {
    observer.observe(section);
})



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form_content");
    const inputs = document.querySelectorAll(".table_form_text, .table_form_textarea");
    const sendButton = document.querySelector(".form_button_send");

    sendButton.addEventListener("click", function (event) {
        event.preventDefault(); // Empêche l'envoi par défaut
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
                input.style.border = "1px solid red"; // Met en rouge les champs vides
            } else {
                /* input.style.border = "2px solid b"; // Met en vert si rempli */
            }
        });

        if (allFilled) {
            alert("✅ Formulaire envoyé avec succès !");
            form.submit(); // Envoie le formulaire si tout est rempli
        } else {
            alert("⚠️ Veuillez remplir tous les champs !");
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animated");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observer après animation
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => observer.observe(element));
});