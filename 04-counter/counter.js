const addButtonElement = document.getElementById("counterAdd");
const subButtonElement = document.getElementById("counterSub");
const counterDisplayElement = document.getElementById("counter-Display");


let total = 0;
const limit = 20;
const updateCounterDisplay = () => {
    if(total>limit){
        total=0;
    }
    if(total<0){
        total=0;
    }
    counterDisplayElement.textContent = total;
    document.body.style.setProperty('background-color',`rgb(${(total/limit)*255},64,0)`)
}

addButtonElement.addEventListener("click", () => {
    total += 1;
    updateCounterDisplay();
});
subButtonElement.addEventListener("click", () => {
    total -= 1;
    updateCounterDisplay();
});
updateCounterDisplay();