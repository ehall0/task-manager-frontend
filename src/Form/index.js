import React, { useState, useContext } from 'react'
import FormControl from '../FormControl'
import { Redirect } from 'react-router';
import UserContext from '../App/UserContext'
function Form ({ initialState, callMethod, groupId }) {
    const { userData, setUserData } = useContext(UserContext);
 
    const {
        initialName,
        initialDescription,
        initialDeadline,
        initialSignedup,
        initialStatus
    } = initialState

    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);
    const [status, setStatus] = useState(initialStatus);
    const [deadline, setDeadline] = useState(initialDeadline);
    const [signedup, setSignedup] = useState(initialSignedup);
    const [isRedirect, setIsRedirect] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const group = {
            name,
            description,
            deadline,
            signedup,
            status
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
                {userData.user.isAdmin ? <>
                <label htmlFor="name">Name:</label>
                <FormControl formValue={name} formHandler={setName} />
                <label htmlFor="description">Description:</label>
                <FormControl formValue={description} formHandler={setDescription} />
               
                <label htmlFor="deadline">Deadline:</label>
                <FormControl formValue={deadline} formHandler={setDeadline} /></>:'' }
                {userData.user.isAdmin ? '' : <>
                <label htmlFor="signedup">Signup:</label>
                <FormControl formValue={signedup} formHandler={setSignedup} /> 
                 <label htmlFor="status">Status:</label>
                 <FormControl formValue={status} formHandler={setStatus} /></>}
                <button className="btn btn-primary" style={{marginTop:"1rem"}}>Submit</button>
            </form>
            {isRedirect ? <Redirect to="/jobs" /> : ''}
        </div>
    )
}

export default Form;