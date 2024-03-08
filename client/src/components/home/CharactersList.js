import React from "react";
import CharactersCard from './CharactersCard';

function CharactersList({ characters }) {

    return (
        <ul className="character-list-card">
            {characters.map((character) => (
                <CharactersCard 
                    key={character.id}
                    character={character}
                />
            ))}
        </ul>
    )
}

export default CharactersList;