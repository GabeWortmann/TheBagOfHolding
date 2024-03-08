import React, { useState, useEffect } from 'react'
import CampaignCard from './CampaignCard'

function CampaignSideBar({ campaigns, toggleComponent }) {

    return (
        <nav id='sidebar'>
            <ul>
                {campaigns && campaigns.map((campaign) => (
                    <CampaignCard 
                        key={campaign.id}
                        campaign={campaign}
                        toggleComponent={toggleComponent}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default CampaignSideBar