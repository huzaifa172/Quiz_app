const questions = [{
    Ques : "who is the founder of Pakistan",
    a : "Mhummad Ali Jinnah",
    b : "Allama Iqbal ",
    c : "Sir Johon",
    d : "Mhatma Ghandi",
    correct : "a"

},
{
    Ques : "what is the second most buetifull capital in the world",
    a : "London",
    b : "Paris",
    c : "Islamabad",
    d : "Dehli",
    correct : "c"

},
{
    Ques : "which city is the biggest city in Pakistan",
    a : "Kunri",
    b : "Karachi",
    c : "Kala Kot",
    d : "Kandh Kot",
    correct : "b"

},
{
    Ques : "what is the National bird of Pakistan",
    a : "Chakoor",
    b : "Moor",
    c : "murgi",
    d : "kabooter",
    correct : "a"

}
];

let total = questions.length;
var right = 0; 
var wrong = 0;
let index = 0;
const queBox = document.getElementById("questionsBox");
const inputOptions = document.querySelectorAll(".options");
const LoadFunction = () => {
    if(index == questions.length){
        return end();
    }
            reset()
            const data = questions[index];
           queBox.innerText = `${index+1}) ${data.Ques}`;
           inputOptions[0].previousElementSibling.innerText = data.a;           inputOptions[0].previousElementSibling.innerText = data.a;
           inputOptions[1].previousElementSibling.innerText = data.b;           inputOptions[0].previousElementSibling.innerText = data.a;
           inputOptions[2].previousElementSibling.innerText = data.c;           inputOptions[0].previousElementSibling.innerText = data.a;
           inputOptions[3].previousElementSibling.innerText = data.d;           inputOptions[0].previousElementSibling.innerText = data.a;

                   
}
function next(){
    const data = questions[index];
    const answer = getans()
    if(answer == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++
    LoadFunction()
    return;

}

let getans = () => {
    let ans;
    inputOptions.forEach(
        (input) => {
            if(input.checked){
             ans = input.value;
            }

        }
    )
    return ans;

}

const reset = () => {
    inputOptions.forEach(
     (input) => {
        input.checked = false

        }
    )
}

const end = () => {
 document.getElementById("questionsBox").innerText = `
 thank you for the test.
 ${right} / ${total} this is the result of your test
 `    
}
LoadFunction()

