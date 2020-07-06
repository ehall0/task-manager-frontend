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
            <nav className="navbar" style={{inlineSize: '16rem'}}>
                {this.state.routes.map((route)=>{
                    return(
                        <Link 
                            to={route.path} 
                            key={route.name}
                            className="navbar-nav"
                        >{route.name}</Link>
                    )
                })}
            </nav>
        )
    }
}
export default MainNav;