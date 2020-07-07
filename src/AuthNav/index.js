import React, { useContext, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import UserContext from '../App/UserContext';
import Axios from 'axios';

function AuthNav({ cartSize, setCartSize }) {

    const { userData, setUserData } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const getData = async () => {
        const userId = userData.user._id;
        const loggedInUser = userData.user.username;
        const cart = await Axios.get(
            `https://job-manager-2020.herokuapp.com/users/cart/${userId}`
        )
        setUsername(loggedInUser)
        setCartSize(cart.data.length)
    }

    useEffect(() => {
        getData()
    })

    function handleLogout() {
        setUserData({
            token: '',
            user: '',
            cart: [],
        })
        localStorage.setItem('auth-token', '');
        setUsername('')
        setCartSize(0)
        setIsLoggedOut(!isLoggedOut)
    }

    return (
        <>
        
        
        
        <nav class="navbar  navbar" style={{maxWidth:"40%", marginRight:"0rem", textAlign:"right" }}>
        <ul class="nav flex-column">
        <li class="nav-item" style={{marginBottom:"1rem"}}>
            {username ?
                <>
                    <span>{username}</span>
                    <button className="btn btn-warning" onClick={handleLogout} style={{marginLeft:"1vh"}}>Logout</button>
                </>
                : (
                <>
                    <Link to="/login" className="btn btn-success" style={{marginLeft:"1vh"}}>Login</Link>
                    <Link to="/signup" className="btn btn-primary" style={{marginLeft:"1vh", }}>Sign Up</Link>    
                </>
                )}
            </li>
            <li class="navbar-brand" >
             
                {userData.user.isAdmin? '': 
                <Link style={{textDecoration:"none"}} to="/cart"  >My Jobs</Link>}
                </li>
                <li class="navbar-brand">
                {userData.user.isAdmin?
                <Link style={{textDecoration:"none"}}  to ="/assignedjobs">Assigned Jobs</Link>:''}
                {isLoggedOut ?
                    <Redirect to="/jobs" />
                    : ''}
                </li>
           
            </ul>
        </nav>
        
        </>
    )
}

export default AuthNav