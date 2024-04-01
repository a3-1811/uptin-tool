// Set the countdown date (YYYY-MM-DD format)
const countdownDate = new Date("2024-05-05").getTime();

// Update the countdown every second
const timerInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countdownDate - now;

  const twoDigits = (num) => String(num).padStart(2, "0");

  // Calculate days, hours, minutes, and seconds
  const days = twoDigits(Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = twoDigits(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = twoDigits(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = twoDigits(Math.floor((distance % (1000 * 60)) / 1000));

  // Display the countdown
  const {
    days: dayStr,
    hours: hourStr,
    minutes: minuteStr,
    seconds: secondStr,
  } = dictionary?.banner || {
    days: "DAY",
    hours: "HOUR",
    minutes: "MINUTE",
    seconds: "SECOND",
  };

  const innerHTML = `<div class="time-number">
                      <div class="flex flex-col justify-center items-center">
                        ${days}
                        <p class="time-item">${dayStr}</p>
                      </div>
                    </div>
                    :
                    <div class="time-number">
                      ${hours}
                      <p class="time-item">${hourStr}</p>
                    </div>
                    <span class="hidden md:block">:</span>
                    <div class="time-number">
                      ${minutes}
                      <p class="time-item">
                        ${minuteStr}
                      </p>
                    </div>
                    :
                    <div class="time-number">
                      ${seconds}
                      <p class="time-item">
                        ${secondStr}
                      </p>
                    </div>`;

  document.getElementById("timer").innerHTML = innerHTML;

  document.getElementById("timer2").innerHTML = innerHTML;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML =
      "Released! Checkout our website now!";
  }
}, 1000); // Update every second
