import React, { useState } from 'react'
import FormControl from '../FormControl'
import { Redirect } from 'react-router';

function Form ({ initialState, callMethod, groupId }) {

    const {
        initialName,
        initialDescription,
        initialDeadline,
        initialSignedup
    } = initialState

    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);
   
    const [deadline, setDeadline] = useState(initialDeadline);
    const [signedup, setSignedup] = useState(initialSignedup);
    const [isRedirect, setIsRedirect] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const group = {
            name,
            description,
            deadline,
            signedup
        }
        let fetchUrl = 'http://localhost:3001/groups/';
        if (callMethod === 'PUT') {
            fetchUrl += groupId;
        }
        const response = await fetch(fetchUrl, {
            method: callMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(group)
        })
        setIsRedirect(true);
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit} className="form-group">
                <label htmlFor="name">Name:</label>
                <FormControl formValue={name} formHandler={setName} />
                <label htmlFor="description">Description:</label>
                <FormControl formValue={description} formHandler={setDescription} />
               
                <label htmlFor="deadline">Deadline:</label>
                <FormControl formValue={deadline} formHandler={setDeadline} />
                <label htmlFor="signedup">Signup:</label>
                <FormControl formValue={signedup} formHandler={setSignedup} />
                <button className="btn btn-primary">Submit</button>
            </form>
            {isRedirect ? <Redirect to="/jobs" /> : ''}
        </div>
    )
}

export default Form;