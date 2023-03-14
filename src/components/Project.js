import React from "react";

function Project(props) {
    return(
        <div className="card m-1" style={{width: '16rem'}}>
            <img src={props.image} className="card-img-top" alt={props.title}></img>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="mt-auto btn btn-primary">Click to open</a>
            </div>
        </div>
    )
}