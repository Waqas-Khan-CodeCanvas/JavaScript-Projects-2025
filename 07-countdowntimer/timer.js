const hoursInputElement = document.getElementById("hoursInput")
const minutesInputElement = document.getElementById("minutesInput")
const secondsInputElement = document.getElementById("secondsInput")


const hoursOutputElement = document.getElementById("hoursOutput")
const minutesOutputElement = document.getElementById("minutesOutput")
const secondsOutputElement = document.getElementById("secondsOutput")

const startTimerButtonElement = document.getElementById("startTimer")

let targetTime=575875;
let timerInterval;

const updateTimer = () => {
    if (targetTime) {
        const differenceInSeconds = Math.floor(targetTime - Date.now()) / 1000;

        const hours = Math.floor(differenceInSeconds / 3600);
        const minutes = Math.floor(differenceInSeconds / 60) % 60;
        const seconds = Math.floor(differenceInSeconds % 60);

        hoursOutputElement.textContent=`${hours} hours`;
        minutesOutputElement.textContent=`${minutes} minutes`;
        secondsOutputElement.textContent=`${seconds} seconds`;

    }
}

startTimerButtonElement.addEventListener("click",()=>{
    const futurHours=parseInt(hoursInputElement.value);
    const futurMinutes=parseInt(minutesInputElement.value);
    const futurSeconds=parseInt(secondsInputElement.value);

    const date =new Date();
    const currentHours = getHours();
    const currentMintes = getMinutes();
    const currentSecondes = getSecondes();

    date.setHours(currentHours + futurHours);
    date.setHours(currentMintes + futurMinutes);
    date.setHours(currentSecondes + futurSeconds);

    targetTime=date.getTime();
    updateTimer();
    timerInterval=setInterval(updateTimer,500)

})



updateTimer();






