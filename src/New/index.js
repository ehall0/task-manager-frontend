import React from 'react'
import Form from '../Form';

function New () {
    const initialState = {
        initialName: '',
        initialDescription: '',
        initialDeadline:'',
        initialStatus:'',
        initialSignedup: ''
    }

    return (
        <>
        <head>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Prata&display=swap" rel="stylesheet"/>
        </head>
        < div style={{ margin:'50px 500px 100px 60px' , fontFamily: 'Barlow Semi Condensed'}}>
            <h1 style={{fontSize:"2rem", color:'blue'}}>Add New Job:</h1>
            <Form initialState={initialState} callMethod="POST" />  
        </div>
        </>
    )
}

export default New 