const secondsToMinutes = (minutes) => {
    const sec = (minutes * 60);
    return sec;
}

const milliSecondsToMinutes = (milliseconds) => {
    const min = milliseconds / 60000;
    return min;
}

const milliSecondsToSeconds = (milliseconds) => {
    const min = milliseconds / 6000;
    return min;
}