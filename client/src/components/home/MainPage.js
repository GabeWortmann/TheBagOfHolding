import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import CharactersList from './CharactersList'
import CampaignsCard from './CampaignsCard'


function MainPage() {

    const url = "http://127.0.0.1:5555"

    const [characters, setCharacters] = useState({})

    useEffect(() => {
        fetch(`${url}/characters/${characters.id}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data)
            })
    }, [])

    const [campaigns, setCampaigns] = useState({})

    useEffect(() => {
        fetch(`${url}/campaigns/${campaigns.id}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data)
            })
    }, [])


    return (
        <div>
            <div><NavBar /></div>
            <div><CampaignsCard campaigns={campaigns} /></div>
            <div><CharactersList characters={characters} /></div>
        </div>
    )
}

export default MainPage