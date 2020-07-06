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
            `http://localhost:3001/users/cart/${userId}`
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
        <span className="AuthNav">
            {username ?
                <>
                    <span style={{margin: '0 1vh'}}>{username}</span>
                    <button className="btn btn-warning" onClick={handleLogout} style={{marginRight:"1vh"}}>Logout</button>
                </>
                : (
                <>
                    <Link to="/login" className="btn btn-success" style={{marginRight:"1vh"}}>Login</Link>
                    <Link to="/signup" className="btn btn-primary" style={{marginRight:"1vh", }}>Sign Up</Link>    
                </>
                )}
                {userData.user.isAdmin? '': 
                <Link to="/cart" >My Jobs</Link>}
                {userData.user.isAdmin?
                <Link to ="/assignedjobs">Assigned Jobs</Link>:''}
                {isLoggedOut ?
                    <Redirect to="/jobs" />
                    : ''}
        </span>
    )
}

export default AuthNav