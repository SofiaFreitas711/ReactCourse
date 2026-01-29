import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)
    let playerContent = <span className="player-name">{playerName}</span>
    
    function handleEditing(){
        setIsEditing((editing)=>!editing)
        if(isEditing){
            onChangeName(symbol, playerName)  
        } 
    }
    
    function handleChange(event){
        setPlayerName(event.target.value)
    }

    if(isEditing){
        playerContent = (
            <input type="text" value={playerName} onChange={handleChange} required />
        )
    }
    
    return(
        <li className={isActive? 'active':undefined}>
            <span className="player">
              {playerContent}
              {/* <span className="player-name">{name}</span> */}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{isEditing? 'Save':'Edit'}</button>
          </li>
    )
}