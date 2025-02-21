const btn=document.querySelector("button")
const span=document.querySelector("span")

btn.addEventListener("click",()=>{
    const name = prompt("Enter your name please ? ")
    span.textContent=name
})