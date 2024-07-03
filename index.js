let Home = document.getElementById("home-el");
let Guest = document.getElementById("guest-el");
let Timer = document.getElementById("timer-el");
let homeFoulEl = document.getElementById("homefoul-el");
let foulEl = document.getElementById("foul-el");

let homePoints = 0;
let guestPoints = 0;
let homefoul = 0;
let foul = 0;
let timer;
let timeRemaining = 0;

function homeAddOne() {
    homePoints += 1
    Home.textContent = homePoints
}

function homeAddTwo() {
    homePoints += 2
    Home.textContent = homePoints
}

function homeAddThree() {
    homePoints += 3
    Home.textContent = homePoints
}

function homeFoul() {
    homefoul += 1
    homeFoulEl.textContent = homefoul
}
function addOne() {
    guestPoints += 1
    Guest.textContent = guestPoints
}

function addTwo() {
    guestPoints += 2
    Guest.textContent = guestPoints
}

function addThree() {
    guestPoints += 3
    Guest.textContent = guestPoints
}

function Foul() {
    foul += 1
    foulEl.textContent = foul
}
function reset() {
    homePoints = 0;
    guestPoints = 0;
    homefoul = 0;
    foul = 0;
    Home.textContent = homePoints;
    Guest.textContent = guestPoints;
    homeFoulEl.textContent = homefoul;
    foulEl.textContent = foul;
    pauseTimer();
    timeRemaining = 0;
    Timer.textContent = "00:00";
}

function setTimer() {
    let input = document.getElementById("timer-input").value;
    if (input) {
        timeRemaining = parseInt(input) * 60; // Convert minutes to seconds
        updateTimerDisplay();
    }
}

function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000); // 1000 ms = 1 second
}

function pauseTimer() {
    if (timer) clearInterval(timer);
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    Timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}