const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countDown = new Date("July 04, 2026 00:00:00").getTime();

const timer = setInterval( () => {
    const now = new Date().getTime();
    const distance = countDown- now;

    if(distance <= 0){
        clearInterval(timer);

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;
    }

    const daysLeft = String(
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        )
    ).padStart(2, "0");

    const hoursLeft = String(
        Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / 
            (1000 * 60 * 60)
        )
    ).padStart(2, "0");

    const minutesLeft = String(
        Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        )
    ).padStart(2, "0");

    const secondsLeft = String(
        Math.floor(
            (distance % (1000 * 60)) / 1000
        )
    ).padStart(2, "0");


    days.textContent = daysLeft;
    hours.textContent = hoursLeft;
    minutes.textContent = minutesLeft;
    seconds.textContent = secondsLeft;

}, 1000);