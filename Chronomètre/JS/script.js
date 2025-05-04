const timer = document.querySelector(".timer");
const startbutton = document.getElementById("start");
const stopbutton = document.getElementById("stop");
const refreshbutton = document.getElementById("refresh");
const toursButton = document.getElementById("tour")
const listtours = document.querySelector(".list")

let second = 0;
let intervalId = null;

function formatTime(s) {
    const minutes = String(Math.floor(s / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${minutes}:${secs}`;
}


function updateDisplay() {
    timer.textContent = formatTime(second)
}

startbutton.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            second++;
            updateDisplay()
        }, 1000)
    }
})

stopbutton.addEventListener( 'click', () => {
    clearInterval(intervalId)
    intervalId = null

} )

refreshbutton.addEventListener('click', () => {
    clearInterval(intervalId)
    intervalId = null
    second = 0
    updateDisplay()
    listtours.textContent = ""

})

toursButton.addEventListener('click', () => {
    const li = document.createElement("li")
    li.textContent = formatTime(second)
    listtours.appendChild(li)

})