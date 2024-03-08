import React from "react";

function CampaignsCard({ campaigns }) {

    return (
        <ul className="campaign-list-card">
            {campaigns.map((campaign) => (
                <div>
                    <div className="campaign-list-name">{campaign.campaign_title}</div>
                    <div className="campaign-list-desc">Description: {campaign.campaign_desc}</div>
                </div>
            ))}
        </ul>
    )
}

export default CampaignsCard;