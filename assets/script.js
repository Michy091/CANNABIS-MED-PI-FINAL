// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // evita reprocessamento
            }
        });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

});