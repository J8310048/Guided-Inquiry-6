// const myHeading = document.querySelector("h1"); this creates a varable where he value locates the html document with "document". Query selector basically finds elements within that html document. In this case, it's looking for h1 elements
// myHeading.textContent = "Hello world!"; 



// the value the user puts in the input form will match the variable containing numbers. Those numbers will be matched with the computers numbers and whichever number is greater than the other will determine the winner.

document.addEventListener("submit", answer)

const rock = 1;
const paper = 2;
const scissors = 3;

function answer() {
    document.getElementsByName("answer").value; {


        const randomNumber = Math.floor(Math.random() * 4);

        let decision;

        if (decision === "rock" && randomNumber === "rock") {
            decision = rock;
            randomNumber = rock;
        } else if (decision === "paper" && randomNumber === "paper") {
            decision = paper;
            randomNumber = paper;
        } else if (decision === "scissors" && randomNumber === "scissors") {
            decision = scissors;
            randomNumber = scissors;
        }

        return alert(decision);

    }
}
