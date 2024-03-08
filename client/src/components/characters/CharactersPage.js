import React, { useState, useEffect } from 'react'
import CharNav from './CharNav'
import CharacterSideBar from './CharacterSideBar'
import CharacterBody from './CharacterBody'
import NewCharacter from './NewCharacter'


function CharactersPage() {

    const url = "http://127.0.0.1:5000"
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [showComponent, setShowComponent] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [newCharacter, setNewCharacter] = useState(false);

    useEffect(() => {
        fetch(`${url}/characters`)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data)
            })
    }, [])

    const toggleComponent = (character) => {
        setSelectedCharacter(character);
        setShowComponent(true)
    }

    const handleNewPostClick = () => {
        setNewCharacter(!newCharacter)
    }

    function addCharacter(character) {
        setCharacters((prevCharacters) => [...prevCharacters, character]);
    }

    function removeCharacter(id) {
        const character = characters.filter((character) => (character.id !== id))
        setCharacters(character);
    }

    return (
        <div>
            <div><CharNav /></div>
            <div><CharacterSideBar characters={characters} toggleComponent={toggleComponent} handleNewPostClick={handleNewPostClick} removeCharacter={removeCharacter} /></div>
            <div>{showComponent && <CharacterBody character={selectedCharacter}/>}</div>
            <div>{newCharacter && <NewCharacter newCharacter={newCharacter} setNewCharacter={setNewCharacter} addCharacter={addCharacter} />}</div>
        </div>
    )
}

export default CharactersPage