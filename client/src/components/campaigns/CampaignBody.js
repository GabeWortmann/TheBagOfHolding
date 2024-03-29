import React from 'react';
import CampaignSubBody from './CampaignSubBody';

function CampaignBody({ campaign, handleAddCharacterClick }) {

    return (
        <div>
            <div>
                <h1>{campaign.campaign_title}</h1>
                <p>{campaign.campaign_desc}</p>
                <h3>Player Characters: </h3>
                {campaign.campaign_characters.map((character) => {
                    return (
                        <CampaignSubBody 
                            key={character.char_id}
                            name={character.characters.char_name}
                        />
                    )
                })}
                <button onClick={handleAddCharacterClick}>Add New Player Character</button>
            </div>
        </div>
    )
}

export default CampaignBody;