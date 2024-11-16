let milliseconds = 0, seconds = 0, minutes = 0;
let interval = null;
let running = false;
let previousCount = 0; // Counter to track the number of previous times

const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapsList');

const previousTimesList = document.createElement('ul');
previousTimesList.id = 'previousTimesList';
previousTimesList.style.listStyleType = 'none';
previousTimesList.style.padding = '0';
previousTimesList.style.margin = '0';

const previousTimesContainer = document.createElement('div');
previousTimesContainer.classList.add('laps');
previousTimesContainer.innerHTML = `<h2>Previous Times</h2>`;
previousTimesContainer.appendChild(previousTimesList);
document.body.appendChild(previousTimesContainer);

const displayTime = () => {
    document.getElementById('milliseconds').textContent = milliseconds.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
};

const updateTime = () => {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    displayTime();
};

startPauseBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(interval);
        startPauseBtn.textContent = 'Start';
    } else {
        interval = setInterval(updateTime, 10);
        startPauseBtn.textContent = 'Pause';
    }
    running = !running;
});

resetBtn.addEventListener('click', () => {
    if (milliseconds !== 0 || seconds !== 0 || minutes !== 0) {
        // Save the current time in the Previous Times section
        const time = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
        const previousTimeItem = document.createElement('li');
        previousTimeItem.textContent = time;
        previousTimesList.appendChild(previousTimeItem);

        // Increment counter and reset list if it reaches 6
        previousCount += 1;
        if (previousCount === 6) {
            previousTimesList.innerHTML = ''; // Clear the list
            previousCount = 0; // Reset the counter
            showResetIndicator(); // Show the indicator that list was cleared
        }
    }

    clearInterval(interval);
    milliseconds = seconds = minutes = 0;
    displayTime();
    lapsList.innerHTML = '';
    startPauseBtn.textContent = 'Start';
    running = false;
});

// Function to show the indicator when previous times are cleared
const showResetIndicator = () => {
    const indicator = document.createElement('div');
    indicator.textContent = "Previous Times List Cleared!";
    indicator.style.backgroundColor = "#84a98c";
    indicator.style.color = "#2f3e46";
    indicator.style.padding = "10px";
    indicator.style.borderRadius = "5px";
    indicator.style.marginTop = "10px";
    indicator.style.textAlign = "center";
    indicator.style.fontSize = "1rem";
    indicator.style.fontWeight = "bold";
    previousTimesContainer.appendChild(indicator);

    // Remove the indicator after 1 seconds
    setTimeout(() => {
        previousTimesContainer.removeChild(indicator);
    }, 1000);
};

lapBtn.addEventListener('click', () => {
    if (running) {
        const lapTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapsList.appendChild(lapItem);
    }
});

// Add keyboard event listeners
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '1': // Start/Pause on '1'
            startPauseBtn.click();
            break;
        case '2': // Reset on '2'
        case ' ': // Reset on 'Space'
            resetBtn.click();
            break;
        case '3': // Lap on '3'
            lapBtn.click();
            break;
        default:
            break;
    }
});

displayTime();
