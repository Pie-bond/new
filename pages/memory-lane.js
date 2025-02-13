document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".timeline-event");

    function reveal() {
        events.forEach(event => {
            const eventTop = event.getBoundingClientRect().top;
            if (eventTop < window.innerHeight - 100) {
                event.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Run on page load too
});
