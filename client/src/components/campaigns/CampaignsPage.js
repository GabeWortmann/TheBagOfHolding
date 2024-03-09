import React, { useState, useEffect } from 'react'
import CampaignsNav from './CampaignsNav'
import CampaignSideBar from './CampaignSideBar'
import CampaignBody from './CampaignBody'
import NewCampaign from './NewCampaign'
import AddCharacter from './AddCharacter'


function CampaignPage() {

    const url = "http://127.0.0.1:5000"
    const [selectedCampaign, setSelectedCampaign] = useState();
    const [showComponent, setShowComponent] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const [newCampaign, setNewCampaign] = useState(false);
    const [newCharacter, setNewCharacter] = useState(false);
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`${url}/campaign`)
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data)
            })
    }, [])

    const toggleComponent = (campaign) => {
        setSelectedCampaign(campaign);
        setShowComponent(true)
    }

    const handleNewPostClick = () => {
        setNewCampaign(!newCampaign)
    }

    function addCampaign(campaign) {
        setCampaigns((prevCampaigns) => [...prevCampaigns, campaign]);
    }

    function removeCampaign(id) {
        const campaign = campaigns.filter((campaign) => (campaign.id !== id))
        setCampaigns(campaign);
    }

    const handleAddCharacterClick = () => {
        setNewCharacter(!newCharacter);
    }


    return (
        <div>
            <div><CampaignsNav /></div>
            <div><CampaignSideBar campaigns={campaigns} toggleComponent={toggleComponent} handleNewPostClick={handleNewPostClick} removeCampaign={removeCampaign} /></div>
            <div>{showComponent && <CampaignBody campaign={selectedCampaign} handleAddCharacterClick={handleAddCharacterClick} />}</div>
            <div>{newCampaign && <NewCampaign newCampaign={newCampaign} setNewCampaign={setNewCampaign} addCampaign={addCampaign} />}</div>
            <div>{newCharacter && <AddCharacter character={character} setCharacter={setCharacter} selectedCampaign={selectedCampaign} />}</div>
        </div>
    )
}

export default CampaignPage