import React from 'react'
import { Link } from 'react-router-dom';

function Home () {
    return (
        <>
        <head>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Prata&display=swap" rel="stylesheet"/>
        </head>
    
        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/jobs">Go to Job Board</Link>
       
                
        </>
    )
}

export default Home 