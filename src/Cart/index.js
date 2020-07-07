import React, { useEffect, useState, useContext } from 'react'
import UserContext from '../App/UserContext'
import { Link } from 'react-router-dom';
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
           <h4 style={{textAlign:"center", marginTop:"4rem"}}>My Jobs</h4>
         <div id="Content" style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent:"center"}}>
            
            
            {cart.map((group, index) => {
                return (
                    <div key={index}>
                         <div className="card border-success mb-3" style={{maxWidth: "18rem", margin:"1rem"}}>
                            <div className="card-header">{group.signedup}</div>
                            <div className="card-body text-success">
                              <h5 className="card-title">{group.name}</h5>
                              <h5 className="card-title">{group.deadline}</h5>
                              <h5>{group.status}</h5>
                              <p className="card-text">{group.description}</p>
                              
                               
                                </div>
                            </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default Cart