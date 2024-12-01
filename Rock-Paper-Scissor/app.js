let humanScore = 0 ; 
let computerScore = 0 ;
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choose");

const humScore = document.querySelector("#human-score");
const compScore = document.querySelector("#computer-score");


const play = (choiceId) =>{
    const arr = [0,1,2];
    const choice = ["rock","paper","scissor"];
    const randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
    const computerChoice = choice[randomNumber];
    console.log("computr selected ",choice[randomNumber])
    if(choiceId ==computerChoice ){
        printingWinner("game is draw !!!",choice[randomNumber]);
    }else if( computerChoice === "rock" && choiceId === "scissor"){
        printingWinner("computer win",choice[randomNumber]);
        computerScore +=1;
    }else if(computerChoice === "scissor" && choiceId === "rock"){
        printingWinner("human win",choice[randomNumber]);
        humanScore += 1;
    }else if(computerChoice === "paper" && choiceId === "scissor"){
        printingWinner("human win",choice[randomNumber]);
        humanScore += 1;
    }else if(computerChoice === "scissor" && choiceId === "paper"){
        printingWinner("computer win",choice[randomNumber]);
        computerScore +=1;
    }else if(computerChoice === "paper" && choiceId === "rock"){
        printingWinner("computer win",choice[randomNumber]);
        computerScore +=1;
    }else if(computerChoice === "rock" && choiceId === "paper"){
        printingWinner("human win",choice[randomNumber]);
        humanScore += 1;
    }
    counter(humanScore,computerScore);

}

const printingWinner = (win,message) =>{
    msg.innerText = win+" Computer Selected "+message;

    if(win === "computer win"){
        msg.style.backgroundColour = "green"
    }else if(win === "human win"){
        msg.classList.add("green");
    }else{
        msg.classList.add("blue");
    }
    
}
const counter = (you,comp) =>{
    humScore.innerText = you;
    compScore.innerText = comp;
}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const choiceId = choice.getAttribute("id");
        console.log("item clicked !!!",choiceId);
        play(choiceId);
    });
});