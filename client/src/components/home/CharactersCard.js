import React from "react";

function CharactersCard({ characters }) {

    return (
        <ul className="character-list-card">
            {characters.map((character) => (
                <div>
                    <div className="character-list-name">{character.char_name}</div>
                    <div className="character-list-desc">Description: {character.char_desc}</div>
                </div>
            ))}
        </ul>
    )
}

export default CharactersCard;