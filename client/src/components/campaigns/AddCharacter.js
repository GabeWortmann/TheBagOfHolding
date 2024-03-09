import React, { useEffect } from 'react';
import AddCharacterSub from './AddCharacterSub';

//newCharacter, setNewCharacter,

function AddCharacter({ character, setCharacter, selectedCampaign }) {

    const url = "http://127.0.0.1:5000"

    const handlePostClick = (char, camp) => {
        fetch(`${url}/campaign_characters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "char_id": char,
                "campaign_id": camp
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error during POST request:', error);
        });
    }

    useEffect(() => {
        fetch(`${url}/characters`)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data)
            })
    }, [])

    return (
        <div className='add_char'>
            <ul>
                {character && character.map((char) => (
                    <AddCharacterSub 
                        key={char.id}
                        character={char}
                        handlePostClick={handlePostClick}
                        selectedCampaign={selectedCampaign}
                    />
                ))}
            </ul>
        </div>
    )
}

export default AddCharacter