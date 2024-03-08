import React from "react";
import CampaignsCard from './CampaignsCard';

function CampaignList({ campaigns }) {
    console.log("campaigns: " + campaigns )
    return (
        <ul className="campaign-list-card">
            {campaigns && campaigns.map((campaign) => (
                <CampaignsCard 
                    key={campaign.id}
                    campaign={campaign}
                />
            ))}
        </ul>
    )
}

export default CampaignList;