import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Draggable from 'react-draggable';

function NewCharacter({ newCharacter, setNewCharacter , addCharacter }) {
    const formSchema = yup.object({
        char_name: yup.string().required("Character name is required."),
        char_desc: yup.string().required("Character description is required."),
    });

    const formik = useFormik({
        initialValues: {
            char_name: '',
            char_desc: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('http://127.0.0.1:5000/characters', {
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
                .then((character) => {
                    addCharacter(character)
                })
                .catch((error) => {
                    console.error("There was a problem with the fetch operation:", error);
                });
        }
    });
    function handleExit() {
        setNewCharacter(prev => !newCharacter)
    }

    return (
        <Draggable>
            <div className="newCharacter">
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="char_name">Character Name</label>
                        <input
                            id="char_name"
                            name="char_name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.char_name}
                            placeholder="Title"
                        />
                        {formik.errors.char_name && <div>{formik.errors.char_name}</div>}
                    </div>

                    <div>
                        <label htmlFor="char_desc">Character Description</label>
                        <input
                            id="char_desc"
                            name="char_desc"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.char_desc}
                            placeholder="char_desc"
                        />
                        {formik.errors.char_desc && <div>{formik.errors.char_desc}</div>}
                    </div>

                    <button type="submit">Submit</button>
                    <button type="button" id='newformx' onClick={handleExit}>X</button>
                </form>
            </div>
        </Draggable>
    )
}

export default NewCharacter