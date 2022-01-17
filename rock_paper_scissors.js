function computerPlay() {
    let rock = String.raw `   
 _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)`;


let paper = String.raw `   
 _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________);
`


let scissors = String.raw `    
_______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)`;

    let rpsArray = [
        rock,
        paper,
        scissors
    ];

    let randomRPS = (Math.floor(Math.random() * rpsArray.length));
        return rpsArray[randomRPS];
        

}

function oneRound(playerSelection, computerSelection) {
    
}