// Typing Effect
const words = ["Web Developer", "App Creator", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = words[i];
    document.getElementById("typing").textContent =
        isDeleting ? current.substring(0, j--) : current.substring(0, j++);

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Theme Toggle
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light");
};

// Contact
function contactMe() {
    window.location.href = "mailto:ghosharnab436@gmail.com";
}
