let startTime = Date.now();

function updateTime() {
    let elapsedTime = new Date(Date.now() - startTime);
    let hours = elapsedTime.getUTCHours();
    let minutes = elapsedTime.getUTCMinutes();
    let seconds = elapsedTime.getUTCSeconds();

    document.getElementById("timer").textContent = `${formatTimer(hours)}:${formatTimer(minutes)}:${formatTimer(seconds)}`;
    document.title = `${formatTitle(hours, 'h')} ${formatTitle(minutes, 'm')} ${formatTitle(seconds, 's')}`;
}

function formatTimer(time) {
    return time < 10 ? `0${time}` : `${time}`;
}

function formatTitle(time, suffix) {
    return time > 0 ? `${time}${suffix}` : ``;
}

setInterval(updateTime, 1000);
