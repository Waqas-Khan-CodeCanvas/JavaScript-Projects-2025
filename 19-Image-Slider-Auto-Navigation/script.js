//get the DOM element for the image carousel
const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll(".button");
//   console.log(wrapper,carousel,images,buttons)

let imageIndex = 0,
    intervalId;

// Define fauction to start autimatic image slider
const autoSlide = () => {
    //Start the slideshow by calling slideImae() every 2 seconds
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
//call autoslide function on page load
autoSlide();
// a function that updates the carousel display to show the specified image
const slideImage = () => {
    // console.log(imageIndex)
    //calculate the updated image index
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    //update the carousel display to show the specified image 
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// a function that updaes the carousel display to show the next or previous image
const updateClick = (e) => {
    // console.log("clicked")
    clearInterval(intervalId);
    //calculate the updated image index bassed on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    //Restart the automatic slideshow
    autoSlide();
};
//add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));
//add mouseover event listener to wrapper element to stop auto sliding 
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
//add mouseleave event listener to wrapper element to star auto sliding again 
wrapper.addEventListener("mouseleave", autoSlide);

