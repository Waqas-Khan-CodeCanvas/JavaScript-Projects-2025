const circles = document.querySelectorAll(".cricle"),
    progressBar = document.querySelector(".indicator"),
    buttons = document.querySelectorAll("button");


let currentStep = 1;
//function that update the current step and updates the dom
const updateSteps = (e) => {
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

    console.log(currentStep)

    // update through all circles and add or remove "active " class bassed on their index on and current step
    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    });
    //update progress bar width bassed on current step
    progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`

    if (currentStep===circles.length) {
        buttons[1].disabled=true;
    } else if(currentStep===1){
        buttons[0].disabled=true;
    }else{
        buttons.forEach((button)=>(button.disabled=false));
    }
};
//add click event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", updateSteps);
});