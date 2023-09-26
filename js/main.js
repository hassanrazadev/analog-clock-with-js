/**
 * Developed By: https://hassanraza.net
 * A circle has 360 degrees
 * A clock has 12 hours
 * 60 minutes and
 * 60 seconds
 */

let minutesAngleMultiple = 6, // 360/60=6
    secondsAngleMultiple = 6, // 360/60=6
    hoursAngleMultiple = 30; // 360/12=30
let clockHandsInitialDegree = -90; // Initial degree to make all the hands to position 0

setAnalogClockHands();
setInterval(() => {
    setAnalogClockHands();
}, 1000);

/**
 * Function to set clock hands using built-in Date() object
 */
function setAnalogClockHands() {
    let date = new Date();
    let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    let hoursDegreeAngle = hours * hoursAngleMultiple + // multiply hours with angle e.g. 6=30=180 at digit 6
        (minutes * 30 / 60) + // add 0.5degree for every minute
        clockHandsInitialDegree;
    let minutesDegreeAngle = minutes * minutesAngleMultiple + // multiply minutes with angle e.g. 15=6=90 at digit 3
        clockHandsInitialDegree;
    let secondsDegreeAngle = seconds * secondsAngleMultiple + // multiply seconds with angle e.g. 15=6=90 at digit 3
        clockHandsInitialDegree;

    /**
     * Set rotation for each hand according to above calculation
     * Set hours, minutes, and seconds in digital clock as well
     */

    document.querySelector('.hours-hand')
        .style.transform = `rotate(${hoursDegreeAngle}deg)`;
    document.querySelector('.minutes-hand')
        .style.transform = `rotate(${minutesDegreeAngle}deg)`;
    document.querySelector('.seconds-hand')
        .style.transform = `rotate(${secondsDegreeAngle}deg)`;

    document.querySelector('.digital-clock-wrapper .hours').textContent = hours;
    document.querySelector('.digital-clock-wrapper .minutes').textContent = minutes;
    document.querySelector('.digital-clock-wrapper .seconds').textContent = seconds;
}