import React, { useContext } from 'react'
import UserContext from '../App/UserContext';
import axios from 'axios';

function AddToCart({ group }) {

    const { userData, setUserData } = useContext(UserContext);

    async function handleAddToCart() {
        if (userData.user) {
            const userId = userData.user._id;
            const response = await axios.post(
                'http://localhost:3001/users/addToCart',
                {
                    userId,
                    group: group,
                    
                },
            )
           
            
            setUserData(userData);
        }

    }

    
    return (
        <button
            onClick={handleAddToCart}
            className="AddToCart btn btn-primary"
        >
            Accept job
        </button>
    )
}

export default AddToCart