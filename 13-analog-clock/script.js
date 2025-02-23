const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".hand"),
    switchMode = document.querySelector(".mode-switch")
console.log(secondHand)
const updateTime = () => {
    let date = new Date(),
      secToDeg = (date.getSeconds() / 60) * 360;
    secondHand.style.transform=`rotate(${secToDeg})`;
    
};

setInterval(updateTime, 1000)


