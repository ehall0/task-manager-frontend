import React from 'react';

function FormControl({ formValue, formHandler,  inputType = "text" }) {
    return (
        <>
            <input
                type={inputType}
                id="name"
                className="form-control"
                value={formValue}
                onChange={event => formHandler(event.target.value)}
                
            />
        </>
    )
}

export default FormControl;