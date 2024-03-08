import React from 'react';

function CampaignCard({ campaign, toggleComponent, removeCampaign }) {

    const url = "http://127.0.0.1:5000"

    const handleClick = (e) => {
        if (e.target.tagName.toLowerCase() !== 'button') {
            toggleComponent(campaign);
        }
    };

    const handleDelete = () => {
        removeCampaign(campaign.id)
        fetch(`${url}/campaign/${campaign.id}`, {
            method: 'DELETE',
        })
    }

    return (
        <div>
            <div onClick={handleClick}>
                <li className="campaign">
                    <p>It's working: {campaign.campaign_title}</p>
                    <button id='campaign-delete' onClick={handleDelete}>X</button>
                </li>
            </div>
        </div>
    )
}

export default CampaignCard