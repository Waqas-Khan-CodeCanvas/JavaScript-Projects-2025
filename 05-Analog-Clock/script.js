// ########################### Select Elements ###########################
const body = document.body,
      hourHand = document.querySelector(".hour"),
      minuteHand = document.querySelector(".minute"),
      secondHand = document.querySelector(".second"),
      modeSwitch = document.querySelector(".mode-switch");


// ########################### Function to Update Clock ###########################
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    // ########################### Calculate Degrees ###########################
    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minDeg = (minutes * 6) + (seconds * 0.1);
    const secDeg = seconds * 6;

    // ########################### Apply Rotation ###########################
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    secondHand.style.transform = `rotate(${secDeg}deg)`;
}

// ########################### Update Clock Every Second ###########################
setInterval(updateClock, 1000);
updateClock(); // Initialize on Page Load

let colorWhite=true;

// ########################### Dark Mode Toggle ###########################
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (colorWhite) {
        document.querySelector(".clock").style.background = "rgba(0, 0, 0, .01)"
        colorWhite=!colorWhite;
    }else{
         document.querySelector(".clock").style.background = "#fff"
         colorWhite=!colorWhite;
    }
});
