import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../App/routes';

class MainNav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            routes: routes
        }
    }

    render() {
        return (
            <html style={{scrollBehavior:"smooth"}}>
            <nav className="navbar fixed-top navbar" style={{maxWidth:"40%" ,justifyContent:"space-between"}}>
                {this.state.routes.map((route)=>{
                    return(
                        <Link 
                            to={route.path} 
                            key={route.name}
                            className="navbar-brand"
                        >{route.name}</Link>
                    )
                })}
                <a className="navbar-brand" href="/home#about">Tips</a> 
                
            </nav>
            </html>
        )
    }
}
export default MainNav;