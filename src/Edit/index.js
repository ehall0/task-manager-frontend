import React from 'react'
import Form from '../Form';

function Edit (props) {

    const group = props.location.aboutProps;
    const { _id } = group

    const initialState = {
        initialName: group.name,
        initialDescription: group.description,
        initialDeadline: group.deadline,
        initialSignedup: group.signedup,
        initialStatus: group.status
    }
    return (
        <>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Prata&display=swap" rel="stylesheet"/>
            </head>
            <div style={{ margin:'50px 500px 100px 60px' , fontFamily: 'Barlow Semi Condensed'}}>
            <h1 style={{fontSize:"2rem", color:'blue'}}>Update Job Details:</h1>
            <Form initialState={initialState} callMethod="PUT" groupId={_id} />  
            </div>
        </>
    )
}

export default Edit;