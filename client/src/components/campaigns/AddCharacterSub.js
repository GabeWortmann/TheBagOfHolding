import React from 'react';

function AddCharacterSub({ character, handlePostClick, selectedCampaign }) {

    return (
        <div id='add_char_sub'>
             <p>Name: {character.char_name}</p> {/*onClick={handlePostClick(character.id, selectedCampaign.id)} */}
        </div>
    )
}

export default AddCharacterSub