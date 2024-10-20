let timer;
let milliseconds = 0;
let running = false;

// Function to format time
function formatTime(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let displayMilliseconds = Math.floor((ms % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(displayMilliseconds).padStart(2, '0')}`;
}

// Start function
function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(function () {
            milliseconds += 10;
            document.getElementById("display").textContent = formatTime(milliseconds);
        }, 10);
    }
}

// Stop function
function stopTimer() {
    clearInterval(timer);
    running = false;
}

// Reset function
function resetTimer() {
    clearInterval(timer);
    milliseconds = 0;
    document.getElementById("display").textContent = "00:00:00";
    running = false;
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
