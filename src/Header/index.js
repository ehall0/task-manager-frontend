
import React from 'react';
const Header = () =>{
    
    
    return(
        <>
        <header>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@700&display=swap" rel="stylesheet"/>
            </header>
        <div className="jumbotron jumbotron-fluid" style={{ color: "black" , background:"white", textAlign: "left", margin:"0", padding:"0", fontFamily:"Montserrat Subrayada"} }>
            
            <div className="container" style={{margin:"1rem", padding:"0"}}>
                 <h1 className="display-4" >Job Manager</h1>
                
            </div>
         </div>
        </>
    )
}
export default Header;