// futuristic dynamic interactions: subtle tracking + floating effects

document.addEventListener("DOMContentLoaded", () => {
    // mouse move parallax for orb background (optional depth)
    const orb = document.querySelector(".orb-bg");
    if (orb) {
        document.addEventListener("mousemove", (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            orb.style.transform = `translate(${x * 10}px, ${y * 8}px) scale(1.02)`;
        });
    }

    // glitch effect trigger on hero h1 (soft random)
    const glitchElement = document.querySelector(".glitch-text");
    if (glitchElement) {
        setInterval(() => {
            glitchElement.style.animation = "none";
            setTimeout(() => {
                glitchElement.style.animation = "glitch 3s infinite";
            }, 10);
        }, 4000);
    }

    // Add hover effect for skill cards + timeline glow
    const cards = document.querySelectorAll(".skill-category, .timeline-content, .info-card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", (e) => {
            card.style.transition = "all 0.2s";
            card.style.boxShadow = "0 0 18px rgba(168, 85, 247, 0.4)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });

    // auto update year (footer dynamic)
    const yearSpan = document.querySelector(".footer-copy");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `© ${currentYear} JOHN AMOLO — AI OPS & SALES DEVELOPMENT`;
    }

    // techy console greet
    console.log("%c⚡ John Amolo | AI Operations & Sales Development — futuristic portfolio loaded", "color: #a855f7; font-size: 14px;");
});