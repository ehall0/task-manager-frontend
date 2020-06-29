import React from 'react';
export default (props) => {
    //State for form data
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
    });
    //handlechange function
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    return (
        <>
            <h3>username</h3>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <h3>password</h3>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    props.handleSubmit(formData);
                }}
            >
                SUBMIT
            </button>
        </>
    );
};