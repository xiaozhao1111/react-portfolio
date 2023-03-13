import React from "react";
import photo from '../assets/images/photo.jpeg';


function Hero() {
    return( 
        <>
            <div class="name-photo">
            <img src={photo} alt="photo" />
            <h1>Xiao Zhao</h1>
        </div>
        <h2>Stay Hungry! Stay Foolish!</h2>
        </>
    )
}

export default Hero;