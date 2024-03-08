import React from "react";

function CampaignsCard({ campaign }) {
    console.log("Campaign: " + campaign)
    return (
        <div>
            <h2 className="campaign-list-name">{campaign.campaign_title}</h2>
            <p className="campaign-list-desc">Description: {campaign.campaign_desc}</p>
        </div>
    )
}

export default CampaignsCard;