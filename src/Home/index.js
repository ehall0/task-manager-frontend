import React from 'react'
import { Link } from 'react-router-dom';
import About from '../About';

function Home () {
    return (
        <html style={{scrollBehavior:"smooth"}}>

        <div style={{display:"flex", marginTop:"10rem",justifyContent:"center", alignItems:"center" }}>
        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/jobs">Go to Job Board</Link>    
        </div>
        <section id="about" style={{marginTop:"8rem"}}>
        <br/>
            <About />
        </section>
       
        
        </html>
    )
}

export default Home 