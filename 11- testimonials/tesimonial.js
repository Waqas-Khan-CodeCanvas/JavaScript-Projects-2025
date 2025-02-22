const testimonials=[
    {
        author:{
            name:"Waqas Khan",
            image:"waqas.jpg",
        },
        text:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias saepe recusandae ipsum, doloribus quo hic et voluptatem perferendis, quas vel non facere repudiandae modi doloremque itaque? Quisquam, iusto. Maiores ipsam",
        date:"23rd March"
    },
    {
        author:{
            name:"zaryab Khan",
            image:"zaryab.jpg",
        },
        text:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias saepe recusandae ipsum, doloribus quo hic et voluptatem perferendis, quas vel non facere repudiandae modi doloremque itaque? Quisquam, iusto. Maiores ipsam",
        date:"2rd March"
    },
    {
        author:{
            name:"hasham Khan",
            image:"zaryab.jpg",
        },
        text:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias saepe recusandae ipsum, doloribus quo hic et voluptatem perferendis, quas vel non facere repudiandae modi doloremque itaque? Quisquam, iusto. Maiores ipsam",
        date:"28rd March"
    }
]


const containerElement=document.getElementById("testimonilas-container")
console.log(containerElement)

const makeTestimonialCard=testimonial=>{
    return` <div class="testimonial-card">
        <img src="${testimonial.author.image}"></img>
        <h2>${testimonial.author.name}</h2>
        <p>${testimonial.text}</p>
        <date>Written on ${testimonial.date}</date>
    </div>`
};
let currentTestimonial=0;
const nextTestimonial=()=>{
    if (currentTestimonial <testimonials.length-1){
        currentTestimonial +=1;
        updatePage();
    }
};

const preTestimonial=()=>{
    if (currentTestimonial>0){
        currentTestimonial-=1;
        updatePage();
    }
}
const updatePage=()=>{
    let markup=makeTestimonialCard(testimonials[currentTestimonial])

    if (testimonials.length >1){
        markup+=`<nav>
            <button onclick="preTestimonial()">prevous</button>
            <button onclick="nextTestimonial()">next</button>
        </nav>`
    }


    containerElement.innerHTML=markup
}
updatePage();

