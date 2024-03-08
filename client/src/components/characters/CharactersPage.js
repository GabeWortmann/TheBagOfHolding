import React, { useState, useEffect } from 'react'
import CharNav from './CharNav'
import CharacterSideBar from './CharacterSideBar'
import CharacterBody from './CharacterBody'


function CharactersPage() {

    const url = "http://127.0.0.1:5000"
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [showComponent, setShowComponent] = useState(false);
    const [characters, setCharacters] = useState([]);

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

    return (
        <div>
            <div><CharNav /></div>
            <div><CharacterSideBar characters={characters} toggleComponent={toggleComponent}/></div>
            <div>{showComponent && <CharacterBody character={selectedCharacter}/>}</div>
        </div>
    )
}

export default CharactersPage