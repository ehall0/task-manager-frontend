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
        
           
            <div className="filters-content" style={{display:"flex", flexDirection:"row", marginTop:"4vh"}}>
            
                
           
            <div id="Content" style={{display: "flex", flexWrap: "wrap", flexDirection: "row", paddingLeft: "8vh"}}>
                
                {groups
                    ? groups.map((group) => {
                        
                          return (
                            <div key={group._id} className="card .d-flex" style={{ border:"none",fontFamily: 'Barlow Semi Condensed',width:'30vh'}}>
                               
                                <div className="card-body">
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <span style={{marginRight: "8vh", fontSize: "3.5vh"}} className="card-title">{group.name}</span><span style={{fontSize:"2.5vh"}}
                                     className="card-title">{group.deadline}</span>
                                     </div>
                                   <div>{group.signedup}</div>
                                   
                                    <p className="card-text" style={{fontSize:"2vh"}}>{group.description}</p>
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                        );
                    })
                    : 'LOADING...'}
                    
            </div>
            </div>
            
        </>
    )
};

export default AssignedJobs;