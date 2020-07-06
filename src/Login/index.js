import React, { useState, useContext } from 'react'
import UserContext from '../App/UserContext.js';
import axios from 'axios';
import { Redirect } from 'react-router';

function Login() {

    // state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setisAdmin] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { setUserData } = useContext(UserContext);
    const [isError, setIsError] = useState(false);

    // login
    async function handleLogin(event) {
        event.preventDefault();
        setIsError(false);
        try {
            const user = {
                username,
                password,
                isAdmin
            }
            const response = await axios.post(
                'http://localhost:3001/auth/',
                user
            )
            setUserData({
                token: response.data.token,
                user: response.data.user,
            });
            localStorage.setItem('auth-token', response.data.token);
            setIsLoggedIn(true);
        } catch(err) {
            console.log(err);
            setIsError(true);
        }
    }

    return (
        <div className="Login" style={{ margin:'50px 500px 200px 60px'}}>
            {isError ?
                <p style={{color: 'red'}}>username or password is incorrect</p>
                : ''}
            <form onSubmit={handleLogin} className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="username"
                    className="form-control"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    className="form-control"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                /><br/>
                <label htmlFor="isAdmin">Is are an Admin?</label>
                <input
                    type="text"
                    id="isAdmin"
                    placeholder="enter yes if admin, otherwise leave blank"
                    className="form-control"
                    value={isAdmin}
                    onChange={event => setisAdmin(event.target.value)}
                /><br/>
                <button className="btn btn-success">Login</button>
            </form>
            {isLoggedIn ? <Redirect to='/jobs' /> : ''}
        </div>
    )
}

export default Login