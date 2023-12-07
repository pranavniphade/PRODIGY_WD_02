let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let laps = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
        isRunning = false;
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').innerText = 'Stop';
        isRunning = true;
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function displayTime() {
    const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('display').innerText = timeString;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = [];
    displayTime();
    document.getElementById('startStop').innerText = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        laps.push(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
        updateLaps();
    }
}

function updateLaps() {
    const lapsList = document.getElementById('laps');
    lapsList.innerHTML = '';
    laps.forEach((lapTime, index) => {
        const li = document.createElement('li');
        li.innerText = `Lap ${index + 1}: ${lapTime}`;
        lapsList.appendChild(li);
    });
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
