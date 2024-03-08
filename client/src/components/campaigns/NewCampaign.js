import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Draggable from 'react-draggable';

function NewCampaign({ newCampaign, setNewCampaign , addCampaign }) {
    const formSchema = yup.object({
        campaign_title: yup.string().required("Campaign title is required."),
        campaign_desc: yup.string().required("Campaign description is required."),
    });

    const formik = useFormik({
        initialValues: {
            campaign_title: '',
            campaign_desc: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('http://127.0.0.1:5000/campaign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            })
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then((campaign) => {
                    addCampaign(campaign)
                })
                .catch((error) => {
                    console.error("There was a problem with the fetch operation:", error);
                });
        }
    });
    function handleExit() {
        setNewCampaign(prev => !newCampaign)
    }

    return (
        <Draggable>
            <div className="newCampaign">
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="campaign_title">Campaign Title</label>
                        <input
                            id="campaign_title"
                            name="campaign_title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.campaign_title}
                            placeholder="Title"
                        />
                        {formik.errors.campaign_title && <div>{formik.errors.campaign_title}</div>}
                    </div>

                    <div>
                        <label htmlFor="campaign_desc">Campaign Description</label>
                        <input
                            id="campaign_desc"
                            name="campaign_desc"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.campaign_desc}
                            placeholder="campaign_desc"
                        />
                        {formik.errors.campaign_desc && <div>{formik.errors.campaign_desc}</div>}
                    </div>

                    <button type="submit">Submit</button>
                    <button type="button" id='newformx' onClick={handleExit}>X</button>
                </form>
            </div>
        </Draggable>
    )
}

export default NewCampaign