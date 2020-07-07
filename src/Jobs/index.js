import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart';
import UserContext from '../App/UserContext'
import { useContext } from 'react'
const Jobs = ({ cartSize, setCartSize }) => {
    const { userData, setUserData } = useContext(UserContext);
    const [groups, setGroups] = React.useState(null);
    
    //Function to get products from API
    const getInfo = async () => {
        const response = await fetch('https://job-manager-2020.herokuapp.com/groups/');
        const result = await response.json();
        setGroups(result);
    };
    
    // Run on initial render
    React.useEffect(()=>{
        getInfo()
    }, []);

    // delete function
    const handleDelete = async (id) => {
        const response = await fetch(`https://job-manager-2020.herokuapp.com/groups/${id}`, {
            method: 'DELETE',
        });
        getInfo();
    };
    
     
    return  (
         
        <>
        
            {userData.user.isAdmin ? 
            <Link style={{paddingLeft:"2vh"}}to="/new"><img style={{width:"3rem"}}src="https://img.icons8.com/officel/160/000000/plus.png"/></Link>: ''}
           
            
                
           <h4 style={{textAlign:"center"}}>Available Jobs</h4>
            <div id="Content" style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent:"center"}}>
                
                {groups
                    ? groups.map((group) => {
                        
                          return (
                              <>
                            {group.signedup ? '':
                            <div className="card border-dark mb-3" style={{maxWidth: "18rem", margin:"1rem"}}>
                            <div className="card-header">{group.signedup}</div>
                            <div className="card-body text-dark">
                              <h5 className="card-title">{group.name}</h5>
                              <h5 className="card-title">{group.deadline}</h5>
                              <p className="card-text">{group.description}</p>
                              {group.signedup || userData.user.isAdmin?'':<AddToCart group={group} cartSize={cartSize} setCartSize={setCartSize} />}
                                    
                                {userData.user.isAdmin?<button className="btn btn-light" onClick={() => {handleDelete(group._id)}}>Delete</button>:''}
                                <br/>
                                {group.signedup || userData.user.isAdmin? '':
                                 <Link to={{
                                    pathname: `/edit/${group._id}`,
                                    aboutProps: {
                                        ...group
                                    }
                                }}>Confirm Signup for this Job</Link>}
                                </div>
                            </div>
                            }
                    </>
                            
                        );
                    })
                    : 'LOADING...'}
                    
            
            </div>
            
        </>
    )
};

export default Jobs;