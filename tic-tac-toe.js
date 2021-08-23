const boxes = Array.from(document.getElementsByClassName('box'))
const playText = document.getElementById('playText')
const restartBtn = document.getElementById('restartBtn')
const playerOne = 'O'
const playerTwo = 'X'
let currentPlayer 
const spaces = []
console.log(boxes)
const drawBoard = () =>{
    boxes.forEach((box,index) =>{
        let styleString = ''
        if (index < 3){
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if(index % 3 === 0){
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if(index % 3 === 2){
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if (index > 5){
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString
        box.addEventListener('click', boxClicked)
    })
}
const boxClicked = (e) =>{
    const id = e.target.id
    
    if (!spaces[id]){
        spaces[id]=currentPlayer
        e.target.innerText = currentPlayer
        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!`
        }
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne
    }

}

//const winningStates = [[0,1,2], [0,3,6], [0,4,8], [8,2,5],[8,6,7],[4,3,5],[4,1,7]]

const playerHasWon = () =>{
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins horizontally`)
            return true 
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins vertically`)
            return true 
        }
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} wins diagonally`)
            return true 
        }
    }
    if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins vertically`)
            return true 
        }
        if(spaces[6] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins horizontally`)
            return true 
        }
    }
    if(spaces[4]=== currentPlayer){
        if(spaces[3] === currentPlayer && spaces[5]=== currentPlayer){
            console.log(`${currentPlayer} wins centrally horizontally`)
            return true
        }
        if(spaces[1] === currentPlayer && spaces[7]=== currentPlayer){
            console.log(`${currentPlayer} wins centrally vertically`)
            return true
        }
    }
}

const restart = () => {
    spaces.forEach((space, index) =>{
        spaces[index] = null 
    })
    boxes.forEach(box =>{
        box.innerText = ''
    })
    playText.innerText = `tic-tac-toe`
    currentPlayer = playerOne
}

// const declareWinner = () =>{
//     if(playerHasWon()){
//         restart()
//     }
// }
// declareWinner()
restartBtn.addEventListener('click', restart)

restart()
drawBoard()
