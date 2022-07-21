// DOM elements
const time = document.getElementById('time'), //comma means you don't have to write const for next line
    greeting = document.getElementById('greeting'),
    userName = document.getElementById('user-name'),
    userFocus = document.getElementById('user-focus'); //close it off with a semi-colon

// Show AM/PM
let showAmPm = true

// Toggles showAmPm
const amPmClick = () => showAmPm = !showAmPm;

// Show time function
showTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

// Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

// 12 Hour format on showAmPm = true -> toggled by eventlistener of click on time
showAmPm ? hour = hour % 12 || 12 : ''

// Output time
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${showAmPm ? amPm : ''}`

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
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')"
        greeting.textContent = 'Good Afternoon';
    } else {
        // evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')"
        greeting.textContent = 'Good Evening';
    }
}

// Get Name
const getName = () => {
    if(localStorage.getItem('userName') === null) {
        userName.textContent = '[Enter Name]'
    } else {
        userName.textContent = localStorage.getItem('userName');
    }
}

// Set Name
function setName(e){
    if (e.type === 'keypress') {
        if(e.which === 13 || e.keycode === 13) {
            localStorage.setItem('userName', e.target.innerText)
            userName.blur(); //stops enter press adding a new line and instead moves you out the box
        }
    } else {
        localStorage.setItem('userName', e.target.innerText);
    }
}

// Get Focus
const getFocus = () => {
    if(localStorage.getItem('focus') === null) {
        userFocus.textContent = '[Choose focus]'
    } else {
        userFocus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e){
    if (e.type === 'keypress') {
        if(e.which === 13 || e.keycode === 13) {
            localStorage.setItem('focus', e.target.innerText)
            userFocus.blur(); //stops enter press adding a new line and instead moves you out the box
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);
userFocus.addEventListener('keypress', setFocus);
userFocus.addEventListener('blur', setFocus);
time.addEventListener('click', amPmClick);

// run
showTime()
setBgGreeting()
getName()
getFocus()

