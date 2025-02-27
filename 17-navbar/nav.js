const searchIcon=document.querySelector(".search-Icon"),
      search=document.querySelector(".search"),
      closeIcon=document.querySelector(".close-Icon"),
      menu=document.querySelector(".menu"),
      text=document.querySelector(".animate-text");



searchIcon.addEventListener("click",()=>search.classList.add("open"));
closeIcon.addEventListener("click",()=>search.classList.remove("open"));

const animateText=(()=>{
    setTimeout(() => {
        text.textContent="YouTuber"
    }, 0);
    setTimeout(() => {
        text.textContent="Developer"
    }, 4000);
    setTimeout(() => {
        text.textContent="Programer"
    }, 8000);
    setTimeout(() => {
        text.textContent="bloger"
    }, 12000);
    setTimeout(() => {
        text.textContent="Gamer"
    }, 16000);
});
animateText();
setInterval(animateText,16000);