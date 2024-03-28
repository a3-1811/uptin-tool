// Set the countdown date (YYYY-MM-DD format)
const countdownDate = new Date("2024-05-07").getTime();

// Update the countdown every second
const timerInterval = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countdownDate - now;

    const twoDigits = (num) => String(num).padStart(2, "0");

    // Calculate days, hours, minutes, and seconds
    const days = twoDigits(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = twoDigits(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = twoDigits(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = twoDigits(Math.floor((distance % (1000 * 60)) / 1000));

    // Display the countdown
    document.getElementById("timer").textContent = `${days}:${hours}:${minutes}:${seconds}`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "Released! Checkout our website now!";
    }
}, 1000); // Update every second