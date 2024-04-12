const pS = "scissors";
let cS = getComputerChoice();
let tie = 0;
let comp = 0;
let player = 0;

//Computer choice

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(pS,cS) {
  if (pS == "rock" && cS == "rock") {
      tie++;
  } else if (pS == "rock" && cS == "paper") {
      comp++;
  } else if (pS == "rock" && cS == "scissors") {
      player++;
  } else if (pS == "paper" && cS == "paper") {
      tie++;
  } else if (pS == "scissors" && cS == "scissors") {
      tie++;
  } else if (pS == "paper" && cS == "rock") {
      player++;
  } else if (pS == "paper" && cS == "scissors") {
      comp++;
  } else if (pS == "scissors" && cS == "paper") {
      player++;
  } else {
      comp++;
  }
  if(player > comp){
    console.log("Player is the winner. Player : "+ player + " comp : "+ comp + " tie : "+tie);
  }else if(comp > player){
    console.log("Comp is the winner. Player : "+ player + " comp : "+ comp + " tie : "+tie);
  }else{
    console.log("It's a tie.  Player : "+ player + " comp : "+ comp + " tie : "+tie);
  }
}

playRound(pS,cS);

//

const but = document.querySelector("#rock");
const Pap = document.querySelector("#papaer");
const sci = document.querySelector("#scissor");

but.addEventListener("click",(event)=>{
    
});






