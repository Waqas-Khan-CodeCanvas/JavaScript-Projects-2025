const initialQuestions = [
    {
        label: "Riendliness",
        rating: 0,
    },
]

const storedQuestions = JSON.parse(localStorage.getItem("storedQuestions"));

const questions = storedQuestions || initialQuestions;

const makeStarRating = question => {
    const container = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = question.label;
    container.appendChild(label)
    container.appendChild(makeStarRating(5, question))

    return container;
}

const madeStars = (maxValue, question) => {
    const starContainer = document.createElement("div");

    for (let starPosition = 1; starPosition <= maxValue; starPosition++) {
        const starElement = document.createElement("span");
        starContainer.appendChild(starElement);
        if (starPosition <= question.rating) {
            starElement.classList.add("filled");

        } else {
            starElement.classList.add("empty");
        }
    }
    return starContainer
}

const ratingsElement = document.getElementById("ratings")
questions.forEach(question => {
    ratingsElement.appendChild(makeStarRating(question));

});