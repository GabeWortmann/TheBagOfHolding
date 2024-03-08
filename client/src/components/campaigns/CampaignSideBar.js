import React, { useState, useEffect } from 'react'
import CampaignCard from './CampaignCard'

function CampaignSideBar({ campaigns, toggleComponent, handleNewPostClick, removeCampaign }) {

    return (
        <nav id='sidebar'>
            <ul>
                <div className='button-container'><button onClick={handleNewPostClick} id='button'>Create New Campaign</button></div>
                {campaigns && campaigns.map((campaign) => (
                    <CampaignCard 
                        key={campaign.id}
                        campaign={campaign}
                        toggleComponent={toggleComponent}
                        removeCampaign={removeCampaign}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default CampaignSideBar