import React from 'react';
export default (props) => {
    //State for form data
    const [formData, setFormData] = React.useState(props.initial);
    //useEffect to update for data when state changes
    //
    React.useEffect(()=> {
        setFormData(props.initial);

    }, [props.initial])
    //handlechange function
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    return (
        <>
            <input
                type="text"
                name="groupName"
                value={formData.groupName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    props.handleSubmit(formData);
                    setFormData(props.initial)
                }}
            >
                SUBMIT
            </button>
        </>
    );
};