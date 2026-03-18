// Page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded 🚀");
});

// Select links
const links = document.querySelectorAll("a");

// Click tracking + active highlight
links.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Opening:", this.innerText);

        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// Toggle button
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Mode";
toggleBtn.classList.add("toggle-btn");

document.body.appendChild(toggleBtn);

// Toggle mode
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});