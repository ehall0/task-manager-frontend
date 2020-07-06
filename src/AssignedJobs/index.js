import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart';
import UserContext from '../App/UserContext'
import { useContext } from 'react'
const AssignedJobs = ({ cartSize, setCartSize }) => {
    const { userData, setUserData } = useContext(UserContext);
    const [groups, setGroups] = React.useState(null);
    
    //Function to get products from API
    const getInfo = async () => {
        const response = await fetch('http://localhost:3001/groups/');
        const result = await response.json();
        setGroups(result);
    };
    
    // Run on initial render
    React.useEffect(()=>{
        getInfo()
    }, []);

 
    
     
    return  (
         
        <>
        <h1>All Assigned Jobs</h1>
         <div id="Content" style={{display: "flex", flexWrap: "wrap", flexDirection: "row", paddingLeft: "8vh"}}>
                
                {groups
                    ? groups.map((group) => {
                        
                          return( 
                          <>
                              {group.signedup? 
                            <div className="card border-dark mb-3" style={{maxWidth: "18rem"}}>
                            <div className="card-header">{group.signedup}</div>
                            <div className="card-body text-dark">
                              <h5 className="card-title">{group.name}</h5>
                              <h5 className="card-title">{group.deadline}</h5>
                              <p className="card-text">{group.description}</p>
                              
                                    
                               
                                </div>
                            </div>:''}
                            </>
                        );
                    })
                    : 'LOADING...'}
                    
            </div>
            
        </>
    )
};

export default AssignedJobs;