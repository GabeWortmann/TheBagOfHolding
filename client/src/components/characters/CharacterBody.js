import React from 'react';

function CharacterBody({ character }) {
    return (
        <div>
            <div>
                <h1>{character.char_name}</h1>
                <p>{character.char_desc}</p>
                <h3>Items: </h3>
                <p>{character.items.item_name}</p>
                <h3>Quests: </h3>
                <p>{character.quests.quest_name}</p>
                <p>{character.quests.quest_desc}</p>
            </div>
        </div>
    )
}

export default CharacterBody;