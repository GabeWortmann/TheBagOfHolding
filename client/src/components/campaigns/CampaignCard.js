import React from 'react';

function CampaignCard({ campaign, toggleComponent }) {

    const handleClick = (e) => {
        if (e.target.tagName.toLowerCase() !== 'button') {
            toggleComponent(campaign);
        }
    };

    return (
        <div>
            <div onClick={handleClick}>
                <li className="campaign">
                    <p>It's working: {campaign.campaign_title}</p>
                </li>
            </div>
        </div>
    )
}

export default CampaignCard