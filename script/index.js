//player 1
const $buttonStoneP1 = document.querySelector('.button-stone1')
const $buttonPaperP1 = document.querySelector('.button-paper1')
const $buttonScissorsP1 = document.querySelector('.button-scissors1')
const $campPlayer1 = document.querySelector('.camp-player1')
let movePlayer1 = ''
//player 2

const $buttonStoneP2 = document.querySelector('.button-stone2')
const $buttonPaperP2 = document.querySelector('.button-paper2')
const $buttonScissorsP2 = document.querySelector('.button-scissors2')
const $campPlayer2 = document.querySelector('.camp-player2')
let movePlayer2 = ''

//controles
const $buttonPlay = document.querySelector('.control-start')
const $buttonReset = document.querySelector('.control-restart')
let started = false 
let winnerPlayer = document.querySelector('.winner-player')
let score1 = document.querySelector('.point-1')
let score2 = document.querySelector('.point-2')
let point1 =''
let point2 = ''
const $buttonResetPoint = document.querySelector('.control-restart')
//botão player 1

    point1 = 0
    point2 = 0
    winnerPlayer.innerHTML = ''
    score1.innerHTML = point1
    score2.innerHTML = point2


$buttonReset.addEventListener('click',function(){
    resetPoint()    
})



$buttonStoneP1.addEventListener('click', function(){
    if(started == false){
        return
    }else{
    $campPlayer1.innerHTML = ('<img src = "./images/pedra.jpeg"/>')
    movePlayer1 = 'stone'
    seewinner()
    }
})

$buttonPaperP1.addEventListener('click', function(){
    if(started == false){
        return
    }else{
    $campPlayer1.innerHTML = ('<img src = "./images/papel.jpeg"/>')
    movePlayer1 = 'paper'
    seewinner()
    }
})

$buttonScissorsP1.addEventListener('click', function(){
    if(started == false){
        return
    }else{
    $campPlayer1.innerHTML = ('<img src = "./images/tesoura.jpeg"/>')
    movePlayer1 = 'scissors'
    seewinner()
    }
})




//botão player 2

$buttonStoneP2.addEventListener('click', function(){
    if(started == false){
        return
    }else{
    $campPlayer2.innerHTML = ('<img src = "./images/pedra.jpeg"/>')
    movePlayer2 = 'stone'
    seewinner()
    }
})

$buttonPaperP2.addEventListener('click', function(){
    if(started == false){
        return
    }else{
    $campPlayer2.innerHTML = ('<img src = "./images/papel.jpeg"/>')
    movePlayer2 = 'paper'
    seewinner()
    }
})

$buttonScissorsP2.addEventListener('click', function(){
    if(started == false){
        return
    }else{
    $campPlayer2.innerHTML = ('<img src = "./images/tesoura.jpeg"/>')
    movePlayer2 = 'scissors'
    seewinner()
    }
})

$buttonPlay.addEventListener('click', function(){
    started = true
})

// possibilidades

function seewinner(){
    if(movePlayer1 == movePlayer2){
        setTimeout (function(){
            winnerPlayer.innerHTML = "<h1>Empatou</h1>" 
            point1 = point1 + 1
            point2 = point2 + 1
            score1.innerHTML = point1
            score2.innerHTML = point2
        },100)
        reset()
    } else if(movePlayer1 == 'stone' && movePlayer2 == 'paper'){
        setTimeout (function(){
            winnerPlayer.innerHTML = "<h1>Jogador 2 venceu</h1>"
            point2 = point2 + 1
            score1.innerHTML = point1
            score2.innerHTML = point2    
        },100)
        reset()
    
    }else if(movePlayer1 == 'scissors' && movePlayer2 == 'paper'){
        setTimeout (function(){ 
             winnerPlayer.innerHTML = "<h1>Jogador 1 venceu</h1>"
             point1 = point1 + 1
             score1.innerHTML = point1
             score2.innerHTML = point2 
            },100)
            reset()
    }else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors'){
            setTimeout (function(){
             winnerPlayer.innerHTML = "<h1>Jogador 1 venceu</h1>"
             point1 = point1 + 1
             score1.innerHTML = point1
             score2.innerHTML = point2 
            },100)
            reset()
    }else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors'){
            setTimeout (function(){
             winnerPlayer.innerHTML = "<h1>Jogador 2 venceu</h1>"
             point2 = point2 + 1
             score1.innerHTML = point1
             score2.innerHTML = point2 
            },100)
            reset()
    }else if (movePlayer1 == 'paper' && movePlayer2 == 'stone'){
            setTimeout (function(){
             winnerPlayer.innerHTML = "<h1>Jogador 1 venceu</h1>"
             point1 = point1 + 1
             score1.innerHTML = point1
             score2.innerHTML = point2 
            },100)
            reset()

    }else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone'){
            setTimeout (function(){
             winnerPlayer.innerHTML = "<h1>Jogador 2 venceu</h1>"
             point2 = point2 + 1
             score1.innerHTML = point1
             score2.innerHTML = point2 
            },100)
            reset()
    }
}

function reset(){
    setTimeout(function(){
    $campPlayer1.innerHTML = ''
    $campPlayer2.innerHTML  = ''
    movePlayer1 = ''
    movePlayer2 = ''
    winnerPlayer.innerHTML = '' 
    },800)
}

function resetPoint(){
    point2 = 0
    point1 = 0
    score1.innerHTML = point1
    score2.innerHTML = point2 
}