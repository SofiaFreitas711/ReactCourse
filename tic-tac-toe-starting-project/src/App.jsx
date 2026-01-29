import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import { useState } from "react"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from './components/GameOver'

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const initialGameboard= [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'
  if(gameTurns.length>0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }
  return currentPlayer
}

function deriveWinner(gameboard, players){
  let winner
    
  for(let combination of WINNING_COMBINATIONS){
    let firstSquareSymbol = gameboard[combination[0].row][combination[0].column]
    let secondSquareSymbol = gameboard[combination[1].row][combination[1].column]
    let thirdSquareSymbol = gameboard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol]
    }
  }
  return winner
}

function deriveGameboard(gameTurns){
  let gameboard = [...initialGameboard.map(array => [...array])]
  for(const turn of gameTurns){
      const {square, player} = turn
      const {row, col} = square

      gameboard[row][col] = player
  }
  return gameboard
}

function App() {
  const [players, setPlayersName] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])
//  const [hasWinner, setHasWinner] = useState(false)
  const activePlayer = deriveActivePlayer(gameTurns)
  const gameboard = deriveGameboard(gameTurns)
  const winner = deriveWinner(gameboard, players)  
  const hasDraw = gameTurns.length == 9 && !winner

  function handleShift(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer)=> curActivePlayer === 'X'?'O':'X')
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns)
      
      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer},...prevTurns]
      return updatedTurns
    })
  }

  function handleRestart(){
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayersName(prevPlayers =>{
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange} />
          <Player name={PLAYERS.O} symbol="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <Gameboard onSelectSquare={handleShift} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
