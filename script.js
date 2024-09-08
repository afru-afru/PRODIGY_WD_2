let startTime;
let tInterval;
let running = false;
let difference = 0; // Initialize difference

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - difference; // Use difference correctly
        tInterval = setInterval(getShowTime, 10);
        running = true;
    }
}

function pauseTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
        difference = new Date().getTime() - startTime; // Update difference
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    difference = 0; // Reset difference
    document.getElementById('display').innerHTML = "00:00:00";
}

function getShowTime() {
    const now = new Date().getTime();
    const elapsedTime = now - startTime;

    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById('display').innerHTML =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

// Button event listeners
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
