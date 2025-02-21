const navElement = document.querySelector("nav");
const navbarLinks = navElement.querySelectorAll("a");
const sectionElements = document.querySelectorAll("section");

const removerActiverLinks = () => {
    navbarLinks.forEach(link => link.parentElement.classList.remove('active'))
}

const hideSections = () => {
    sectionElements.forEach(section => section.classList.add("hidden"))
}

navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
        removerActiverLinks();
        hideSections();
        link.parentElement.classList.add("active");
        const hello = document.querySelector(link.hash);
        console.log(hello)
        hello.classList.remove("hidden");     
    })
})