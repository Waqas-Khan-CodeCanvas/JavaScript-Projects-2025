const questions=[
    {
        'question':"which of the following is markup language",
        'a':"HTML",
        'b':"CSS",
        'c':"JAVASCRIP",
        'd':"PYTHON",
        'correct':"a"
    },
    {
        "question":"which of the following language is used for styling",
        "a":"HTML",
        "b":"CSS",
        "c":"JAVASCRIP",
        "d":"PYTHON",
        "correct":"b"
    },
    {
        "question":"which of the following langauge is used to creat logic in websites",
        "a":"HTML",
        "b":"CSS",
        "c":"JAVASCRIP",
        "d":"PYTHON",
        "correct":"c"
    }
]


let index=0;
let right=0;
let wrong=0;
let total=questions.length;

const questionboxElement=document.getElementById("quebox");
const inputOptionElement=document.querySelectorAll(".options");
const boxElement=document.querySelector(".box");


const loadQuestion=()=>{
    const data=questions[index]
    questionboxElement.innerText=`${index+1}) ${data.question}`
    inputOptionElement[0].nextElementSibling.innerText=data.a;
    inputOptionElement[1].nextElementSibling.innerText=data.b;
    inputOptionElement[2].nextElementSibling.innerText=data.c;
    inputOptionElement[3].nextElementSibling.innerText=data.d;
}
loadQuestion();


const submitQuiz=()=>{
    if (index==total) {
        return endQuiz();
    }
    reset();
    const data=questions[index]
    let answer=getAnswer()
    console.log(answer,data.correct)
    if(answer==data.correct){
        console.log("corerrct")
        right++;
    }
    else{
        console.log("wrrrrrrong")
        wrong++;
    }
    index++;
    loadQuestion();
    return;
    
}

const getAnswer=()=>{
    let ans;
    inputOptionElement.forEach(
        (input)=>{
            if(input.checked){
                ans = input[name="option"].value;
                console.log(ans)
            }
        }
        )
    return ans;
};

const reset=()=>{
    inputOptionElement.forEach(
        (input)=>{
            input.checked=false
        }
)}


const endQuiz=()=>{
    boxElement.innerHTML=`<h3>Thank you for playing this Quiz game</h3>
    <h2>${right}/ ${total} out of correct </h2>
`
}

