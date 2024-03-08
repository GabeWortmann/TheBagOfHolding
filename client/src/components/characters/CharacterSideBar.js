import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterSideBar({ characters, toggleComponent }) {

    return (
        <nav id='sidebar'>
            <ul>
                {characters && characters.map((character) => (
                    <CharacterCard 
                        key={character.id}
                        character={character}
                        toggleComponent={toggleComponent}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default CharacterSideBar