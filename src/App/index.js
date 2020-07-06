import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import MainNav from '../MainNav';
import { routes } from "./routes";
import UserContext from './UserContext'
import Edit from '../Edit';
import New from '../New';
import Footer from '../Footer';
import AuthNav from '../AuthNav';
import Register from '../Register';
import Login from '../Login';
import Jobs from '../Jobs';
import Cart from '../Cart';
import Header from '../Header';
import AssignedJobs from '../AssignedJobs'
function App () {
  // set initial user state
  const [userData, setUserData] = useState({
    token: '',
    user: '',
    myjobs: [],
  });
  const [cartSize, setCartSize] = useState(0);

  // check for login and handle jwt auth
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenRes = await axios.post(
        'http://localhost:3001/auth/validateToken',
        null,
        { headers: { 'x-auth-token': token }},
      );
      if (tokenRes.data) {
        const userRes = await axios.get(
          'http://localhost:3001/auth/',
          { headers: { 'x-auth-token': token },
        })
        setUserData({
          token,
          user: userRes.data,
        })
      }
    }
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{userData, setUserData}}>
        <div className="container-fluid justify-content-between" style={{display: 'inline-flex'}}>
          <MainNav />
          <AuthNav cartSize={cartSize} setCartSize={setCartSize} />
          
        </div>
        <Header />
        <main>
            
          <Switch>
            {routes.map((route)=> {
              return (
                <Route
                      path={route.path} 
                      component={route.component}
                      key={route.name}
                ></Route>
                )
            })}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route
              path="/jobs"
              render={(cartSize, setCartSize) => <Jobs cartSize={cartSize} setCartSize={setCartSize} />}
            ></Route>
            <Route
              path="/assignedjobs"
              render={(cartSize, setCartSize) => <AssignedJobs cartSize={cartSize} setCartSize={setCartSize} />}
            ></Route>
            <Route
              path="/signup"
              component={Register}
            ></Route>
            <Route
              path="/login"
              component={Login}
            ></Route>
            <Route
              path="/new"
              component={New}
            ></Route>
            <Route
              path="/edit/:slug"
              component={Edit}
            ></Route>
            <Route
              path="/cart"
              render={(userData) => <Cart {...userData} />}
            ></Route>
          </Switch> 
        </main>
        <Footer />
      </UserContext.Provider>
    </div>
  )
}

export default App;