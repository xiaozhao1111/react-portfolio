import React from "react";
import photo from '../assets/images/photo.jpeg';
import './Hero.css'


function Hero() {
    return( 
        
        <div className="hero">
            <div class="name-photo">
            <img src={photo} alt="profile" />
            </div>
            <h2>Stay Hungry! Stay Foolish!</h2>
        </div>
            
    )
}

export default Hero;