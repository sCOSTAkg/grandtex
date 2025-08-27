// script.js
//
// Adds simple scroll‑triggered animations to collection and highlight cards.
// When a card enters the viewport, a CSS class is toggled to trigger
// opacity/translate transitions defined in the stylesheet. This improves
// engagement without relying on heavy animation libraries.

document.addEventListener('DOMContentLoaded', () => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all cards in collections and highlights sections
    document.querySelectorAll('.collection-card, .highlight-card').forEach((el) => {
        observer.observe(el);
    });
});