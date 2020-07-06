import React, { useEffect, useState, useContext } from 'react'
import UserContext from '../App/UserContext'

import axios from 'axios';

function Cart(props) {

    const { userData, setUserData } = useContext(UserContext);
 
    const [cart, setCart] = useState([]);
    const userId = userData.user._id
  

    useEffect(() => {
        const getCart = async () => {
            const response = await axios.get(
                `http://localhost:3001/users/cart/${userId}`
            )
            setCart(response.data) 
        }
        getCart()
        console.log(userData)
    }, [userId])

  

    
    // delete function
    async function handleDelete(id) {
        const response = await axios.delete(`http://localhost:3001/users/${userId}/${id}`)
        setCart(response.data)
        setUserData(userData)
    };
    

    return (
        <div className="Cart">
           
         <div style={{ margin:'50px 500px 200px 60px'}}>
            <h2 style={{fontFamily: 'Barlow Semi Condensed', color:'red'}}>My Jobs</h2>
            
            {cart.map((group, index) => {
                return (
                    <div key={index}>
                        <h2>{userData.user.username}</h2>
                        <h2>{group.name}</h2>
                        <h3>{group.deadline}</h3>
                        <h4>{group.description}</h4>
                        <button className="btn btn-light" onClick={() => handleDelete(group._id)}>Remove Job</button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default Cart