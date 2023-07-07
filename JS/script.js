let scoreRound1 = 0;
let scoreRound2 = 0;
let scoreGlobal1 = 0;
let scoreGlobal2 = 0;
let nb = 0;

let btnRoll = document.getElementById('roll');
let btnNewGame = document.getElementById('newGame');
let btnHold = document.getElementById('hold');


btnRoll.addEventListener('click', rollDicePlayer1);
    function rollDicePlayer1(){
        nb = Math.floor(Math.random()*6)+1;

        if (nb > 1) {
            scoreRound1 = scoreRound1 + nb;
            document.getElementById('round1').innerHTML = scoreRound1;
            document.getElementById('player1').style.backgroundColor='#ffffff';
        } else if (nb == 1){
            scoreRound1 = 0;
            document.getElementById('player1').style.backgroundColor='#808080';
            document.getElementById('round1').innerHTML = scoreRound1;
            btnRoll.removeEventListener('click', rollDicePlayer1);
            btnRoll.addEventListener('click', rollDicePlayer2);
        }   

        btnHold.addEventListener('click', holdPlayer1);
        function holdPlayer1 (){
            scoreRound1 = 0;
            document.getElementById('round1').innerHTML = scoreRound1;
            document.getElementById('player1').style.backgroundColor='#808080';
            btnRoll.removeEventListener('click', rollDicePlayer1);
            btnRoll.addEventListener('click', rollDicePlayer2);
        }
    }


    function rollDicePlayer2(){
        nb = Math.floor(Math.random()*6)+1;

        if (nb > 1) {
            scoreRound2 = scoreRound2 + nb;
            document.getElementById('round2').innerHTML = scoreRound2;
            document.getElementById('player2').style.backgroundColor='#ffffff';
        } else if (nb == 1){
            scoreRound2 = 0;
            document.getElementById('player2').style.backgroundColor='#808080';
            document.getElementById('round2').innerHTML = scoreRound2;
            btnRoll.removeEventListener('click', rollDicePlayer2);
            btnRoll.addEventListener('click', rollDicePlayer1);
        }   

        btnHold.addEventListener('click', holdPlayer2);
        function holdPlayer2 (){
            scoreRound2 = 0;
            document.getElementById('round2').innerHTML = scoreRound2;
            document.getElementById('player2').style.backgroundColor='#808080';
            btnRoll.removeEventListener('click', rollDicePlayer2);
            btnRoll.addEventListener('click', rollDicePlayer1);
        }
    }    


btnHold.addEventListener('click', () => { 
    if (scoreGlobal1 > 99){
        scoreRound1 = 0;
        document.getElementById('round1').innerHTML = scoreRound1;
        document.getElementById('global1').innerHTML = "Winner";
    } else if (scoreGlobal1 < 100) {
        scoreGlobal1 = scoreGlobal1 + scoreRound1;
        document.getElementById('global1').innerHTML = scoreGlobal1;
    }
    if (scoreGlobal2 > 99){
        scoreRound2 = 0;
        document.getElementById('round2').innerHTML = scoreRound2;
        document.getElementById('global2').innerHTML = "Winner";
    } else if (scoreGlobal2 < 100) {
        scoreGlobal2 = scoreGlobal2 + scoreRound2;
        document.getElementById('global2').innerHTML = scoreGlobal2;
    }
})


btnNewGame.addEventListener('click', () => {
    scoreRound1 = 0;
    scoreGlobal1 = 0;
    scoreRound2 = 0;
    scoreGlobal2 = 0;
    document.getElementById('round1').innerHTML = scoreRound1;
    document.getElementById('global1').innerHTML = scoreGlobal1;
    document.getElementById('round2').innerHTML = scoreRound2;
    document.getElementById('global2').innerHTML = scoreGlobal2;
    document.getElementById('player1').style.backgroundColor='#ffffff';
    document.getElementById('player2').style.backgroundColor='#ffffff';
})