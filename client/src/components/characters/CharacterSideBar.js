import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterSideBar({ characters, toggleComponent, handleNewPostClick, removeCharacter }) {

    return (
        <nav id='sidebar'>
            <ul>
            <div className='button-container'><button onClick={handleNewPostClick} id='button'>Create New Character</button></div>
                {characters && characters.map((character) => (
                    <CharacterCard 
                        key={character.id}
                        character={character}
                        toggleComponent={toggleComponent}
                        removeCharacter={removeCharacter}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default CharacterSideBar