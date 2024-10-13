let countdownInterval;

// Automatically start the countdown when the page loads
window.onload = function() {
    startCountdown();
};

function startCountdown() {
    const targetDate = new Date('October 15, 2024 10:00:00').getTime();

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerText = "00:00:00";
            alert("Time's up!");
        } else {
            document.getElementById("countdown").innerText = formatTime(timeRemaining);
        }
    }, 1000); // atualiza a cada segundo
}

function formatTime(timeInMilliseconds) {
    const totalSeconds = Math.floor(timeInMilliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}