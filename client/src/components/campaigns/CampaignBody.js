import React from 'react';

function CampaignBody({ campaign }) {
    return (
        <div>
            <div>
                <p>It works: {campaign.campaign_title}</p>
            </div>
        </div>
    )
}

export default CampaignBody;