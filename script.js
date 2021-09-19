let loading = document.getElementById('loading')
loading.style.display = 'flex'

// SHOW LOADER
window.onload = () => {
    setTimeout(() => {
        loading.style.display = 'none';
        main.classList.remove('hide');
    }, 1000);
}

// Iniciar Jogo
let btnStart = document.getElementById('btnStart');
let jogo_container = document.getElementById('jogo-container');
let tabuleiro_div = document.getElementById('tabuleiro')
let player_1 = document.getElementById('player-1')
let player_2 = document.getElementById('player-2')

let tabuleiro
let turn

btnStart.addEventListener('click', () => {
    jogo_container.classList.remove('hide');

    estadoInicial()

    setTimeout(inicioJogo(turn), 2000)      
})

function estadoInicial() {
    tabuleiro = [['', '', ''],['', '', ''],['', '', '']]
    turn = true // true = player 1

    tabuleiro_div.innerHTML =
    `<div class="linha">
        <div id="cel-1" class="celula"></div>
        <div id="cel-2" class="celula"></div>
        <div id="cel-3" class="celula"></div>
    </div>
    <div class="linha">
        <div id="cel-4" class="celula"></div>
        <div id="cel-5" class="celula"></div>
        <div id="cel-6" class="celula"></div>
    </div>
    <div class="linha">
        <div id="cel-7" class="celula"></div>
        <div id="cel-8" class="celula"></div>
        <div id="cel-9" class="celula"></div>
    </div>`
    
    player_1.classList.add('active')
    player_2.classList.remove('active')
}
            
function inicioJogo(turn) {
    document.querySelectorAll('.celula').forEach(celula => {
        celula.addEventListener('click', (e) => {
            if (e.target.innerHTML == '') {
                // Jogador 1 jogou
                if (turn == true) {
                    addTabuleiro(e.target.id, 'X', e.target)
                }
                // Jogador 2 jogou
                else {
                    addTabuleiro(e.target.id, 'O', e.target)
                }
                
                // Trocar turno
                !turn ? turn = true : turn = false

                if (turn) {
                    console.log('Player 1')
                    player_1.classList.add('active')
                    player_2.classList.remove('active')
                }
                else {
                    console.log('Player 2')
                    player_2.classList.add('active')
                    player_1.classList.remove('active')
                }
            }     
        })
    })
}  

function verificarVencedor() {
    if (tabuleiro[0][0] == 'X' && tabuleiro[0][1] == 'X' && tabuleiro[0][2] == 'X') {
        alert('Jogador 1 Venceu')
        location.reload()
    }
    else if (tabuleiro[1][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[1][2] == 'X') {
        alert('Jogador 1 Venceu')
        location.reload()
    }
    else if (tabuleiro[2][0] == 'X' && tabuleiro[2][1] == 'X' && tabuleiro[2][2] == 'X') {
        alert('Jogador 1 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][0] == 'X' && tabuleiro[1][0] == 'X' && tabuleiro[2][0] == 'X') {
        alert('Jogador 1 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][1] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][1] == 'X') {
        alert('Jogador 1 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][2] == 'X' && tabuleiro[1][2] == 'X' && tabuleiro[2][2] == 'X') {
        alert('Jogador 1 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][2] == 'X') {
        alert('Jogador 1 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][2] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][0] == 'X') {
        alert('Jogador 1 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][0] == 'O' && tabuleiro[0][1] == 'O' && tabuleiro[0][2] == 'O') {
        alert('Jogador 2 Venceu')
        location.reload()
    }
    else if (tabuleiro[1][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[1][2] == 'O') {
        alert('Jogador 2 Venceu')
        location.reload()
    }
    else if (tabuleiro[2][0] == 'O' && tabuleiro[2][1] == 'O' && tabuleiro[2][2] == 'O') {
        alert('Jogador 2 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][0] == 'O' && tabuleiro[1][0] == 'O' && tabuleiro[2][0] == 'O') {
        alert('Jogador 2 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][1] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][1] == 'O') {
        alert('Jogador 2 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][2] == 'O' && tabuleiro[1][2] == 'O' && tabuleiro[2][2] == 'O') {
        alert('Jogador 2 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][2] == 'O') {
        alert('Jogador 2 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][2] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][0] == 'O') {
        alert('Jogador 2 Venceu')
        location.reload()
    }
    else if (tabuleiro[0][0] != '' && tabuleiro[0][1] != '' && tabuleiro[0][2] != '' && tabuleiro[1][0] != '' && tabuleiro[1][1] != '' && tabuleiro[1][2] != '' && tabuleiro[2][0] != '' && tabuleiro[2][1] != '' && tabuleiro[2][2] != '') {
        alert('Velha')
        location.reload()   
    }
}

function addTabuleiro(celula, player, target) {
    switch (celula) {
        case 'cel-1':
            tabuleiro[0][0] = player
            target.innerHTML = player
            break;
        case 'cel-2':
            tabuleiro[0][1] = player
            target.innerHTML = player
            break;
        case 'cel-3':
            tabuleiro[0][2] = player
            target.innerHTML = player
            break;
        case 'cel-4':
            tabuleiro[1][0] = player
            target.innerHTML = player
            break;
        case 'cel-5':
            tabuleiro[1][1] = player
            target.innerHTML = player
            break;
        case 'cel-6':
            tabuleiro[1][2] = player
            target.innerHTML = player
            break;
        case 'cel-7':
            tabuleiro[2][0] = player
            target.innerHTML = player
            break;
        case 'cel-8':
            tabuleiro[2][1] = player
            target.innerHTML = player
            break;
        case 'cel-9':
            tabuleiro[2][2] = player
            target.innerHTML = player
            break;
    }
    setTimeout(verificarVencedor, 1000)
}