let scoreRound1 = 0;
let scoreRound2 = 0;
let scoreGlobal1 = 0;
let scoreGlobal2 = 0;
let nb = 0;

let btnRoll = document.getElementById('roll');
let btnNewGame = document.getElementById('newGame');
let btnHold = document.getElementById('hold');


btnRoll.addEventListener('click', () => {
    nb = Math.floor(Math.random()*6)+1;
        if (nb == 1){
            scoreRound1 = 0;
            document.getElementById('round1').innerHTML = scoreRound1;
        } else if (nb > 1) {
            scoreRound1 = scoreRound1 + nb;
        }    
    document.getElementById('round1').innerHTML = scoreRound1;
})

btnHold.addEventListener('click', () => {
    scoreGlobal1 = scoreRound1 ; 
    document.getElementById('global1').innerHTML = scoreGlobal1;
})
