import React from 'react';

function CharacterCard({ character, toggleComponent }) {

    const handleClick = (e) => {
        if (e.target.tagName.toLowerCase() !== 'button') {
            toggleComponent(character);
        }
    };

    return (
        <div>
            <div onClick={handleClick}>
                <li className="character">
                    <p>It's working: {character.char_name}</p>
                </li>
            </div>
        </div>
    )
}

export default CharacterCard