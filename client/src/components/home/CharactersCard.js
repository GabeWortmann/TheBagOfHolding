import React from "react";

function CharactersCard({ character }) {

    return (
        <div>
            <h2 className="character-list-name">{character.char_name}</h2>
            <p className="character-list-desc">Description: {character.char_desc}</p>
        </div>
    )
}

export default CharactersCard;