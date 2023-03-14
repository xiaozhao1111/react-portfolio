import React from "react";
import photo from '../assets/images/photo.jpeg';
import './Hero.css'


function Hero() {
    return( 
        
        <div className="hero">
            <div class="name-photo">
            <img src={photo} alt="photo" />
            <h1>Xiao Zhao</h1>
            </div>
            <h2>Stay Hungry! Stay Foolish!</h2>
        </div>
            
    )
}

export default Hero;