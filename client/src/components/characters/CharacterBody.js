import React from 'react';

function CharacterBody({ character }) {
    return (
        <div>
            <div>
                <p>It works: {character.char_name}</p>
            </div>
        </div>
    )
}

export default CharacterBody;