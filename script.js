let count = 0;

const button = document.getElementById("log-btn");
const countDisplay = document.getElementById("log-count");

button.addEventListener("click", function () {
    count++;

    if (count === 1) {
        button.textContent = `Threw ${count} log! 🪵`;
    } else {
        button.textContent = `Threw ${count} logs! 🪵`;
    }

    countDisplay.textContent = count;
});
