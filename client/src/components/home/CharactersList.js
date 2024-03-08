import React from "react";
import CharactersCard from './CharactersCard';

function CharactersList({ characters }) {
    console.log("characters: " + characters)
    return (
        <ul className="character-list-card">
            {characters && characters.map((character) => (
                <CharactersCard 
                    key={character.id}
                    character={character}
                />
            ))}
        </ul>
    )
}

export default CharactersList;