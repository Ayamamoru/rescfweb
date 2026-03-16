let count = 0;

const button = document.getElementById("log-btn");
const countDisplay = document.getElementById("log-count");
const pit = document.getElementById("log-pit");
const fire = document.getElementById("campfire-gif");

function showPopup(message) {
    const popup = document.createElement("div");
    popup.id = "log-popup";
    popup.innerHTML = `
        <div id="log-popup-box">
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()">ok</button>
        </div>
    `;
    document.body.appendChild(popup);
}

button.addEventListener("click", function () {
    count++;

    if (count === 1) {
        button.textContent = `Threw ${count} log!`;
    } else {
        button.textContent = `Threw ${count} logs!`;
    }
    countDisplay.textContent = count;
    if (count === 10) showPopup("you know it aint a real fire right");
    if (count === 15) showPopup("wow okay");
    if (count === 20) showPopup("dang man");
    if (count === 45) showPopup("bro must have some free time");
    fire.style.opacity = Math.min(count / 50, 1);
    if (count === 67) showPopup("SIX SEVEN AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA fml");
    if (count === 125) showPopup("OKAY you can stop now oml");
    if (count === 167) showPopup("stop");
    if (count === 250) showPopup("wanna play rock paper scissors?");
    if (count === 300) showPopup("ok, rock, paper, scissors");
    if (count === 350) showPopup("shoot!");
    if (count === 420) showPopup("uhhhhh rock");
    if (count === 500) showPopup("idk how am i supposed to know if you won or not? lmao");
    if (count === 520) showPopup("either way, imma toss that rock, paper or scissors into the fire with the logs ohohoho");
    if (count === 670) showPopup("aight bye");

    const log = document.createElement("img");
    log.src = "log.png";
    log.classList.add("log");

    const pitWidth = pit.offsetWidth;
    const x = Math.random() * (pitWidth - 90);
    const y = pit.offsetHeight * 0.3 + Math.random() * (pit.offsetHeight * 0.55);
    const rotation = (Math.random() * 80 - 40).toFixed(1);

    log.style.left = x + "px";
    log.style.top = y + "px";
    log.style.setProperty("--r", rotation + "deg");

    pit.appendChild(log);
});