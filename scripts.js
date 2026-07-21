document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-links');

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});

function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

function envoyerRequete(event) {
    event.preventDefault();
    alert('Merci ! Votre demande de réservation a été envoyée. Nous vous recontacterons sous peu.');
    event.target.reset();
}

function envoyerMessage(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    event.target.reset();
}
