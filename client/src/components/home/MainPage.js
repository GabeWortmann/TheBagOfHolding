import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import CharactersList from './CharactersList'
import CampaignsList from './CampaignsList'


function MainPage() {
    console.log("mainPage")

    const url = "http://127.0.0.1:5000"

    const [characters, setCharacters] = useState([])
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        fetch(`${url}/characters`)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data)
            })
        
        fetch(`${url}/campaign`)
        .then((res) => res.json())
        .then((data) => {
            setCampaigns(data)
        })
    }, [])


    return (
        <div>
            <div><NavBar /></div>
            <div><CampaignsList campaigns={campaigns} /></div>
            <div><CharactersList characters={characters} /></div>
        </div>
    )
}

export default MainPage