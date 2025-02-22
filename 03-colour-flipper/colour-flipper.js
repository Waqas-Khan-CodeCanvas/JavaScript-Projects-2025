const newColourBtnElement = document.getElementById("new-colour-button");
const currentColourBtnElement = document.getElementById("current-colour");

const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function getRandomHexValue() {
    const randomIndexPosition = Math.floor(
        Math.random()*hexValues.length
        );

    const randomHexValue=hexValues[randomIndexPosition]

    return randomHexValue;
}
function getRandomHexString(stringLenght){
    let hexString="";
    for (let i=0; i<stringLenght; i++){
        hexString+=getRandomHexValue();
    }

    return hexString;
}

newColourBtnElement.addEventListener('click',()=>{
    const randomHexString ="#"+ getRandomHexString(6);

    document.body.style.background=randomHexString
    currentColourBtnElement.textContent=randomHexString
})