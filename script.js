// Init Vanilla Tilt - Mobile Only
if (window.VanillaTilt && window.innerWidth <= 768) {
    VanillaTilt.init(document.querySelector(".glass-container"), {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        gyroscope: true,
    });
}

// Staggered delay for simple entrance animation
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link-item");
    links.forEach((link, index) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(20px)";
        setTimeout(() => {
            link.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, 100 * index + 300); // Staggered delay
    });

    // Portfolio Toast
    const portfolioLink = document.getElementById("portfolio-link");
    if (portfolioLink) {
        portfolioLink.addEventListener("click", (e) => {
            e.preventDefault();
            showToast("Work in progress 🚧");
        });
    }
});

function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector(".toast");
    if (existingToast) existingToast.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger reflow
    toast.offsetHeight;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400); // Wait for transition
    }, 3000);
}
