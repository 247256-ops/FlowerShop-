document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Your message has been sent!");
        });
    });
});