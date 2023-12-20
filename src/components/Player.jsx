import { useState } from "react"

export default function Player({initialPlayerName, playerSymbol, isActive, onChangeName}){

   const [playerName, setPlayerName] = useState(initialPlayerName)
   const [isEditing, setIsEditing] = useState(false)

   function handleEdit(){
    setIsEditing((editing) =>!editing);
    if(isEditing){
        onChangeName(playerSymbol, playerName)
    }
   }

   function handleChange(event){
 
    setPlayerName(event.target.value)
   }

    let playerField = <span className="player-field">{playerName}</span>
    let buttonText = "Edit"
    if(isEditing) {
        playerField = <input type="text" required value = {playerName} onChange = {handleChange}/>
        buttonText= "Save"
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerField}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEdit} >{ buttonText }</button>
        </li>
    )
}