const _hour = document.querySelector('.hour');
const _minute = document.querySelector('.minute');
const _second = document.querySelector('.second');
const _time = document.querySelector('.time');
const _date = document.querySelector('.date');
const _numbers = document.querySelector('.numbers');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const setTime = () => {
    const time = new Date();
    const Month = time.getMonth();
    const Day = time.getDay();
    const DatE = time.getDate();
    const Hours = time.getHours();
    const Minutes = time.getMinutes();
    const Seconds = time.getSeconds();
    const hoursForClock = Hours > 12 ? Hours % 12 : Hours;
    const ampm = Hours >= 12 ? 'PM' : 'AM';

    _hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    _minute.style.transform = `translate(-50%, -100%) rotate(${scale(Minutes, 0, 60, 0, 360)}deg)`
    _second.style.transform = `translate(-50%, -100%) rotate(${scale(Seconds, 0, 60, 0, 360)}deg)`
    _time.innerHTML = `${hoursForClock}:${Minutes < 10 ? `0${Minutes}` : Minutes} ${ampm}`;
    _date.innerHTML = `${days[Day]}, ${months[Month]} ${DatE}`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

let output = '';
const position = (num) => {
    return num;
}
for (let i = 0; i < 12; ++i) {
    output += `
    <span class="number _${i + 1}">${i + 1}</span>
    `;
}
_numbers.innerHTML = output;
setTime();
setInterval(setTime, 1000);