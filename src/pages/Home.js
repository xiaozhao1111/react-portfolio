import React from "react";
import "./Home.js";
import developer from "../assets/images/programan.svg"



function Home() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-4">
                    <img src={developer} alt='developer' />
                </div>
                <div className="col-md-6">
                    <h2 className="text-info">Hi, my name is,</h2>
                    <h1 className="text-white mt-2 md-2">Xiao Zhao</h1>
                    <h2 className="text-info">A creative Frontend Developer based in Southampton, UK</h2> 
                </div>
            </div>
            
        </div>
    )
}

export default Home;