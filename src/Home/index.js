import React from 'react'
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div style={{display:"flex", marginTop:"10rem",justifyContent:"center", alignItems:"center"}}>
        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/jobs">Go to Job Board</Link>    
        </div>
    )
}

export default Home 