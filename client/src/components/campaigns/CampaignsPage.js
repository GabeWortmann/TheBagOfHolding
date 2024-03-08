import React, { useState, useEffect } from 'react'
import CampaignsNav from './CampaignsNav'
import CampaignSideBar from './CampaignSideBar'
import CampaignBody from './CampaignBody'


function CampaignPage() {

    const url = "http://127.0.0.1:5000"
    const [selectedCampaign, setSelectedCampaign] = useState();
    const [showComponent, setShowComponent] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

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

    return (
        <div>
            <div><CampaignsNav /></div>
            <div><CampaignSideBar campaigns={campaigns} toggleComponent={toggleComponent}/></div>
            <div>{showComponent && <CampaignBody campaign={selectedCampaign}/>}</div>
        </div>
    )
}

export default CampaignPage