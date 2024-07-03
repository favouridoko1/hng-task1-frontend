let currentDayIs = document.querySelector(".dayIs");
let currentTimeIs = document.querySelector('.timeIs');

let date = new Date();
function curentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[date.getDay()];
    return currentDayIs.innerHTML = `Current day: ${currentDayOfWeek}`;
}
curentDay();

function currentTime() {
    // const date = new Date().getUTCDate();
    return currentTimeIs.innerHTML = `Current time: ${date.getUTCHours() + 1}:${date.getUTCMinutes()}`
    
    // console.log(currentTimeIs);
}

currentTime();

