const moves = ['P', 'R', 'S'];
const movesToIcons = {
    'R': '✊',
    'P': '🖐️',
    'S': '✌️'
}
let tie = 0;
let wins = 0;
let losses = 0;


function resetScore(){
    tie = 0;
    wins = 0;
    losses = 0;
    document.getElementById('wins').innerHTML = `Wins: ${wins}`;
    document.getElementById('losses').innerHTML = `Losses: ${losses}`;
    document.getElementById('ties').innerHTML = `Draws: ${tie}`;
}

function showWin(){
    let ele = document.getElementById('result');
    ele.style.display = 'block';
    ele.querySelector('p').style.backgroundColor = 'green';
    ele.querySelector('p').innerHTML = 'You Win! 🥳';
}
function showLoss(){
    let ele = document.getElementById('result');
    ele.style.display = 'block';
    ele.querySelector('p').style.backgroundColor = 'darkred';
    ele.querySelector('p').innerHTML = 'You Loose! ☹️';

}
function showDraw(){
    let ele = document.getElementById('result');
    ele.style.display = 'block';
    ele.querySelector('p').style.backgroundColor = 'darkgoldenrod';
    ele.querySelector('p').innerHTML = 'It\'s a Draw!😐';
}
function playRound(playerMove) {
    let compMove = moves[(Math.floor(Math.random()*10))%3];

    document.getElementById('playerMove').innerHTML = movesToIcons[playerMove];
    document.getElementById('computerMove').innerHTML = movesToIcons[compMove];

    if (playerMove === compMove) {
        tie++;
        showDraw();
    }
    
    else if (playerMove === 'R'){
        switch (compMove) {
            case 'P':
                losses++;
                showLoss();
                break;
            case 'S':
                wins++;
                showWin();
                break;
        }
    }
    else if (playerMove === 'P'){
        switch (compMove) {
            case 'R':
                wins++;
                showWin();
                break;
            case 'S':
                losses++;
                showLoss();
                break;
        }
    }
    else if (playerMove === 'S'){
        switch (compMove) {
            case 'P':
                wins++;
                showWin();
                break;
            case 'R':
                losses++;
                showLoss();
                break;
        }
    }

    document.getElementById('wins').innerHTML = `Wins: ${wins}`;
    document.getElementById('losses').innerHTML = `Losses: ${losses}`;
    document.getElementById('ties').innerHTML = `Draws: ${tie}`;

}