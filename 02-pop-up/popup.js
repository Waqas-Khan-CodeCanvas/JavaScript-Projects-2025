const openModal=document.querySelector("#openModal");
const modal=document.querySelector(".modal");
const modalContent=modal.querySelector(".modal_content");


openModal.addEventListener('click',()=>{
    modal.classList.add("open");
    console.log("hello")

});

modalContent.addEventListener('click',()=>{
    modal.classList.remove("open");

});