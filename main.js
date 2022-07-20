// DOM elements
const time = document.getElementById('time'), //comma means you don't have to write const for next line
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'); //close it off with a semi-colon

// Show time function
showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

// Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// 12 Hour format
hour = hour % 12 || 12;

// Output time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${amPm.toLowerCase()}`

setTimeout(showTime, 1000);
}

// add zero to time if below 10
addZero = n => (parseInt(n, 10) < 10 ? '0' : '') +n; 

// Set background and greeting

setBgGreeting = () => {
    let today = new Date(),
        hour = today.getHours();
    document.body.style.color = 'white';

    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('../img/morning_02.jpg')"
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // afternoon 
        document.body.style.backgroundImage = "url('../img/evening.jpg')"
        greeting.textContent = 'Good Afternoon';
    } else {
        // evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')"
        greeting.textContent = 'Good Evening';

    }
}

// run
showTime()
setBgGreeting()