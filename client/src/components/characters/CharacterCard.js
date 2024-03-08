import React from 'react';

function CharacterCard({ character, toggleComponent, removeCharacter }) {

    const url = "http://127.0.0.1:5000"

    const handleClick = (e) => {
        if (e.target.tagName.toLowerCase() !== 'button') {
            toggleComponent(character);
        }
    };

    const handleDelete = () => {
        removeCharacter(character.id)
        fetch(`${url}/characters/${character.id}`, {
            method: 'DELETE',
        })
    }

    return (
        <div>
            <div onClick={handleClick}>
                <li className="character">
                    <p>It's working: {character.char_name}</p>
                    <button id='character-delete' onClick={handleDelete}>X</button>
                </li>
            </div>
        </div>
    )
}

export default CharacterCard